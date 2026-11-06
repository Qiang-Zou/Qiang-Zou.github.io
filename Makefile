BUNDLE ?= bundle
PYTHON ?= python3
DEST ?= _site

.PHONY: help setup preview build check
.DEFAULT_GOAL := help

help:
	@echo "make setup    Install the site's Ruby dependencies"
	@echo "make preview  Preview locally; rebuild and reload when content changes"
	@echo "make check    Build and check pages, links, and anchors before publishing"

setup:
	$(BUNDLE) install

preview:
	$(BUNDLE) exec jekyll serve --config _config.yml,_config.dev.yml --livereload

build:
	JEKYLL_ENV=production $(BUNDLE) exec jekyll build --safe --destination "$(DEST)"

check: build
	$(PYTHON) scripts/check_site.py "$(DEST)"
