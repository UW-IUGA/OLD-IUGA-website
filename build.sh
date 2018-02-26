#!/usr/bin/env bash
set -e
npm run build
docker build -t brendankellogg/iuga-site .
docker push brendankellogg/iuga-site