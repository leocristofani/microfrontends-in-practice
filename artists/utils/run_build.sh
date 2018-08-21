#!/usr/bin/env bash

rm -rf ../server/public/
npm run build --prefix ../client/
webpack --config webpack.embed.js