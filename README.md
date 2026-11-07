# Qiang Zou — Academic Website

<https://qiang-zou.github.io/>

**Edit Markdown in `content/`, add images to `images/`, and push to GitHub. The site updates automatically.**

## What to Edit

| Content | File |
| --- | --- |
| Homepage biography, profile, and news | [content/about.md](content/about.md) |
| Publications, reports, awards, and talks | [content/research.md](content/research.md) |
| Open-source projects | [content/code.md](content/code.md) |
| Lab information and students | [content/group.md](content/group.md) |
| Teaching | [content/teaching.md](content/teaching.md) |
| Professional service | [content/service.md](content/service.md) |
| Chinese biography | [content/chinese.md](content/chinese.md) |
| Student guidelines | [content/group-guide.md](content/group-guide.md) |
| Lab name, contact links, and navigation | [_config.yml](_config.yml) |

Keep each page's `permalink` unchanged to preserve its public address.
Use `##` for main sections and `###` for subsections. Keep existing `{#...}` heading anchors.
Entries appear in the order you write them. Templates handle all fonts, colors, and layouts.

## Copy-and-Paste Examples

Copy an example into the appropriate content file and replace its text. Keep the blank lines and two-space indentation inside list entries.

### News

Add new entries at the top of the News list in `content/about.md`.
Move older entries inside the existing `Earlier news` block to collapse them; retain `markdown="1"` on that block.

```markdown
- **Nov 2026** Your news text. [Read more](https://example.org/)
```

### Publication

Add to a research category in `content/research.md`. Publication titles are plain bold text; resource links belong on the Code page.

```markdown
- **Paper title**

  First Author, **Qiang Zou**\*, Other Authors

  *Journal name (2026)*
```

The corresponding-author marker `\*` is optional. Publications display in full without automatic filtering or sorting.

### Technical Report

Use the same format under Technical Reports, with a report link at the end.
Replace the example arXiv identifier with the actual identifier, or omit it if unavailable.

```markdown
- **Report title**

  **Qiang Zou**, Other Authors

  *arXiv preprint arXiv:XXXX.XXXXX (2026)*

  [Read report](/projects/your-report/)
```

### Code Project

Put the illustration in `images/codes/`, then add the entry to `content/code.md`.
Each entry has an image, title, description, and resource links. Omit unavailable links.

```markdown
- [![Project illustration](/images/codes/example.png)](/images/codes/example.png){: #project-name}

  **Project name**

  One sentence describing the project.

  [Code](https://github.com/owner/repository) · [Paper](https://doi.org/example)
```

The optional `#project-name` anchor must be unique on the page.

### Students, Courses, Awards, and Service

Use ordinary Markdown lists in the corresponding page. Numbered lists may use `1.` for every item; numbering is automatic.

```markdown
1. Student Name, 2026.9 – , Research topic: research topic
1. Another Student, 2026.9 – , Research topic: research topic
```

### New Page

Create a Markdown file in `content/` using this structure. To add it to the main navigation, edit `navigation` in `_config.yml`.

```markdown
---
title: "New Page"
permalink: /new-page/
show_title: true
---

Write the introduction here.

## Main Section

Write the section content here.
```

## Preview and Publish

You can edit and commit content directly on GitHub without installing anything locally.
For local editing, install Ruby, Bundler, Python 3, and Make, then use:

```sh
make setup     # Install dependencies once
make preview   # Open http://127.0.0.1:4000/; saving content rebuilds and reloads
make check     # Build and validate pages, internal links, and anchors
```

Restart the preview after changing `_config.yml`. Stop it with `Ctrl+C`.
The checker validates internal links, not external websites or publication metadata.

**Saving locally updates the preview. Commit and push to `main` to update the public site.**
GitHub Pages builds and publishes automatically; progress appears in the repository's Actions tab.

## Files You Normally Leave Alone

- `.site/` is a hidden folder containing page templates and the site checker.
- `assets/` contains the shared stylesheet, homepage script, fonts, and decorative artwork.
- `projects/` contains standalone reports and attachments. Their existing URLs are preserved.
- `Gemfile`, `Gemfile.lock`, `Makefile`, and `404.html` support building and serving the site.

All editing instructions and examples are in this README. There are no separate documentation or example folders.
The generated `_site/` and cache directories are ignored by Git; do not edit or commit them.

For design changes, edit `assets/site.css`. Typography and colors are defined by its CSS variables.
The Open Sans license is in `assets/fonts/OpenSans-OFL.txt`; icon font credits are included in the stylesheet.
