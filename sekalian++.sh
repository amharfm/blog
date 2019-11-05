#!/bin/bash
bundle exec jekyll build --incremental;
bundle exec jekyll serve --incremental --host=192.168.43.42;
