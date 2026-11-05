# Qiang Zou — academic website

Jekyll source for <https://qiang-zou.github.io/>. The site uses a small custom theme and keeps its existing GitHub Pages URLs. The standalone report in `projects/icad-eval-report/` is independent of the shared theme.

## Edit content

| Content | Location |
| --- | --- |
| Original biography and recruitment note | `_pages/about.md` |
| News (eight recent entries visible, earlier entries collapsed) | `_data/news.json` |
| Research publications, grouped by topic | `_data/publications.json` |
| Code projects and their paper links | `_data/projects.json` |
| Group, teaching, service, Chinese profile | `_pages/` |
| Navigation | `_data/navigation.yml` |
| Contact details and site settings | `_config.yml` |
| Shared page structure | `_layouts/` and `_includes/` |
| Shared typography, navigation, page headings and content styling | `assets/css/site.css` |
| Homepage sidebar, icon fonts and news layout | `assets/css/home.css` |
| Research illustrations | `images/codes/` |

For a new code project, add one object to `_data/projects.json` with `id`, `name`, `category`, `description`, `image`, and `code`. `title` and `paper` are optional. `image` is a site-relative path, for example `/images/codes/kdh-cad.png`. Existing category names are `AI for CAD/CAM`, `Surface and Solid Modeling`, and `Microstructure Modeling`.

The homepage retains the original profile arrangement: a circular portrait and compact icon links on the left, with the original biography and recruitment note on the right. All pages share the same header, footer, font family, colors and heading scale. Desktop body text is 20px, supporting text and resource links are 18px; mobile uses 18px and 17px respectively. These sizes are defined once as CSS variables in `assets/css/site.css`. News uses aligned dates, with the latest eight entries visible and the remaining entries under a native “Earlier news” disclosure. Its layout is in `_layouts/home.html`; biography text is edited in `_pages/about.md` and news in `_data/news.json`. All code-page illustrations keep their proportions and link to their original files.

## Build and check

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open <http://127.0.0.1:4000/>. For a production build and local-link validation:

```sh
bundle exec jekyll build
python3 scripts/check_site.py _site
```

Commit source changes and push to the website's GitHub Pages branch to publish. Do not commit `_site/`, local gem installations, or `.DS_Store` files.

## Theme cleanup

The 2026 redesign replaces the old Minimal Mistakes layout, Sass dependencies, jQuery plugins, icon fonts, comment providers, and sample comment data. These removed files remain recoverable in Git history before this change. The legacy compiled homepage stylesheet has been removed. A small `assets/css/home.css` retains the circular portrait, original icon links and news layout, using three original icon fonts. Its native script in `assets/js/home.js` handles the mobile Follow button. Navigation and page typography come from the same shared templates and stylesheet on every page; the legacy theme source and jQuery plugins are not required. No Node/npm build is needed; the shared website uses plain CSS and native HTML disclosure controls.

The site contains 14 code projects (including the newly added CADDesigner), 32 selected publication entries, and 29 news entries. Existing page URLs and the standalone report and PDFs are retained. The unused research illustration `images/isolevel.png` is retained as original research material. Commented publication notes remain in `_pages/research.md`.
