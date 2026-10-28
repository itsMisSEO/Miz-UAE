#!/usr/bin/env bash
# Сборка на Cloudflare Workers: ставит Hugo нужной версии и собирает сайт в public/
set -euo pipefail
HUGO_VERSION=0.169.0
mkdir -p "${HOME}/.local/hugo"
curl -sLJo "${HOME}/.local/hugo/hugo.tar.gz" "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
tar -C "${HOME}/.local/hugo" -xf "${HOME}/.local/hugo/hugo.tar.gz"
export PATH="${HOME}/.local/hugo:${PATH}"
hugo version
hugo build --gc --minify
