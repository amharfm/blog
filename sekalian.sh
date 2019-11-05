#!/bin/bash --login

# bundle update;
bundle exec jekyll build;
bundle exec jekyll serve --incremental --host=192.168.43.42;
