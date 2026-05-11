#!/bin/bash

build() {
    echo 'Building DevTab...'
    rm -rf dist
    npx vite build "$@"
}

build "$@"
