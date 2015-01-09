#!/bin/bash

mkdir -p _site

pandoc -o _site/skoleni_git.pdf -V geometry:"top=2cm, bottom=2cm, left=2cm, right=2cm" -V papersize:"a4paper" index.md
pandoc -o _site/index.html -T 'Skoleni GIT' -B before_body.html index.md

