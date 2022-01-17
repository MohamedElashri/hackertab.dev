#!/bin/bash

stores_build() {
    echo 'building app for Chrome & Firefox Stores'

    rm -rf dist/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    rm -f source_code.zip
    rm -f extension.zip

    react-scripts build

    mkdir -p dist
    cp -r build/* dist
    echo 'zipping the dist'
    zip -r extension.zip dist/* -x "*.DS_Store"

    echo 'zipping the source code for Firefox'
    zip -r source_code.zip 'public/' 'script/' 'src' 'LICENCE' 'package.json' 'yarn.lock' 'README.md' -x "*.DS_Store"
}

stores_build