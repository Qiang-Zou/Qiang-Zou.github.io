# Qiang Zou — academic website

Jekyll source for <https://qiang-zou.github.io/>. The site uses a small custom theme and keeps its existing GitHub Pages URLs. The standalone report in `projects/icad-eval-report/` is independent of the shared theme.

## Edit content

| Content | Location |
| --- | --- |
| Original biography, recruitment note, and news | `_pages/about.md` |
| Research publications, grouped by topic | `_data/publications.json` |
| Code projects and their paper links | `_data/projects.json` |
| Group, teaching, service, Chinese profile | `_pages/` |
| Navigation | `_data/navigation.yml` |
| Contact details and site settings | `_config.yml` |
| Shared page structure | `_layouts/` and `_includes/` |
| All shared styling | `assets/css/site.css` |
| Research illustrations | `images/codes/` |

For a new code project, add one object to `_data/projects.json` with `id`, `name`, `category`, `description`, `image`, and `code`. `title` and `paper` are optional. `image` is a site-relative path, for example `/images/codes/kdh-cad.png`. Existing category names are `AI for CAD/CAM`, `Surface and Solid Modeling`, and `Microstructure Modeling`.

The homepage keeps a profile photo and contact links on the left, with the original biography, recruitment note, and full news list on the right. Its layout is in `_layouts/home.html`; all homepage text is edited directly in `_pages/about.md`. All code-page illustrations keep their proportions and link to their original files.

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

The 2026 redesign replaces the old Minimal Mistakes layout, Sass dependencies, jQuery plugins, icon fonts, comment providers, and sample comment data. These removed files remain recoverable in Git history before this change. No Node/npm build is needed; the shared website uses plain CSS and native HTML disclosure controls.

The site contains 14 code projects (including the newly added CADDesigner), 32 selected publication entries, and 22 news entries. Existing page URLs and the standalone report and PDFs are retained. The unused research illustration `images/isolevel.png` is retained as original research material. Commented publication notes remain in `_pages/research.md`.
