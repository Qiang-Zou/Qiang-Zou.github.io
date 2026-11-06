#!/usr/bin/env python3
"""Check a built Jekyll site's local links, anchors, and duplicate element IDs."""

import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.duplicates = set()
        self.links = []

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        identifier = attrs.get("id")
        if identifier:
            if identifier in self.ids:
                self.duplicates.add(identifier)
            self.ids.add(identifier)
        for attribute in ("href", "src"):
            if attribute in attrs:
                self.links.append(attrs[attribute])


def check(root):
    root = root.resolve()
    if not (root / "index.html").is_file():
        raise SystemExit(f"No built homepage in {root}; run jekyll build first.")
    pages = {}
    failures = []
    total_links = 0
    required_routes = (
        "index.html", "about/index.html", "about.html", "research/index.html",
        "codes/index.html", "group/index.html", "group/must_know/index.html",
        "teaching/index.html", "services/index.html", "about-chinese/index.html",
        "projects/icad-eval-report/index.html", "404.html",
    )
    for private_path in ("docs", "templates", "scripts", "README.md", "Makefile", "Gemfile", "Gemfile.lock"):
        if (root / private_path).exists():
            failures.append(f"Maintenance file or directory accidentally published: {private_path}")
    for route in required_routes:
        if not (root / route).is_file():
            failures.append(f"Missing required page or redirect: {route}")
    for file in sorted(root.rglob("*.html")):
        page = Page()
        page.feed(file.read_text(encoding="utf-8"))
        pages[file] = page
        for identifier in page.duplicates:
            failures.append(f"{file.relative_to(root)}: duplicate id {identifier!r}")
    for file, page in pages.items():
        relative = file.relative_to(root).as_posix()
        base = "https://qiang-zou.github.io/" + relative
        if relative.endswith("index.html"):
            base = base[:-len("index.html")]
        for link in page.links:
            if not link or link == "#":
                failures.append(f"{relative}: empty link")
                continue
            parts = urlsplit(urljoin(base, link))
            if parts.scheme not in ("http", "https") or parts.netloc != "qiang-zou.github.io":
                continue
            total_links += 1
            target = root / unquote(parts.path).lstrip("/")
            if target.is_dir():
                target /= "index.html"
            if not target.is_file():
                failures.append(f"{relative}: missing target {link}")
            elif parts.fragment and target in pages:
                if unquote(parts.fragment) not in pages[target].ids:
                    failures.append(f"{relative}: missing anchor {link}")
    if failures:
        print("\n".join(failures))
        raise SystemExit(1)
    print(f"Checked {len(pages)} HTML pages and {total_links} local references; no missing targets, anchors, or duplicate IDs.")


if __name__ == "__main__":
    check(Path(sys.argv[1] if len(sys.argv) > 1 else "_site"))
