# Qiang Zou — Academic Website

Website: <https://qiang-zou.github.io/>

**Edit content in `content/`; shared templates handle presentation. Push to GitHub to publish automatically.**

## Where to Edit

| Content | File |
| --- | --- |
| Homepage biography, sidebar, and news | [content/about.md](content/about.md) |
| Publications, technical reports, awards, and talks | [content/research.md](content/research.md) |
| Open-source projects | [content/code.md](content/code.md) |
| Lab information and students | [content/group.md](content/group.md) |
| Teaching | [content/teaching.md](content/teaching.md) |
| Professional service | [content/service.md](content/service.md) |
| Chinese biography | [content/chinese.md](content/chinese.md) |
| Student guidelines | [content/group-guide.md](content/group-guide.md) |
| Lab name and shared contact information | [_config.yml](_config.yml) |
| Navigation labels and order | [_data/navigation.yml](_data/navigation.yml) |

To add an entry, copy the corresponding format from the [content examples](templates/entries.md).
To create a page, copy the [page template](templates/page.md) into `content/`.
Store images in `images/` and code project illustrations in `images/codes/`.

## Editing and Publishing

1. Edit the appropriate Markdown file.
2. Run `make preview` locally. Saving changes automatically rebuilds the site and reloads the browser.
3. Run `make check` to validate pages and internal links.
4. Commit and push to the GitHub repository's `main` branch. GitHub Pages builds and publishes the site automatically.

For initial local setup, run `make setup`. Ruby, Bundler, Python 3, and Make are required.
You can also edit and commit files in `content/` directly on GitHub without installing local tools.
**Saving a local file updates only the local preview. Updating the public site requires committing and pushing to GitHub.**

## Project Structure

```text
content/       Editable Markdown content
images/        Profile photo and project images
projects/      Standalone reports and their attachments

templates/     Reusable content examples (not published)
docs/          Editing and architecture guides (not published)

_layouts/      Shared page layouts
_includes/     Navigation, banner, head metadata, and footer
_data/         Shared data, including navigation
assets/        CSS, scripts, fonts, and decorative images
scripts/       Validation tools
_config.yml    Site configuration and page styling assignments
Makefile       Preview, build, and validation commands
```

See the [editing guide](docs/editing.md) and [architecture guide](docs/architecture.md) for details.

Page content stays in Markdown rather than HTML templates; no separate JSON content files are required.
Control which news entries are collapsed in `content/about.md`. Publication lists display in full, in the order you specify.
The existing visual design, navigation order, public URLs, and standalone reports are preserved.
