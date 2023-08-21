# zola-cook
A static site with famillial cooking recipes, made with
[zola](https://www.getzola.org/) and deployed with [edgio](https://edgio.app/).

[BeerCSS](https://www.beercss.com/) is used to build a [Material Design](https://m3.material.io/).

## Install
The site is deployed with edgio, you need to install the cli tool:

    npm install @edgio/cli

## Build

Add content to the `public/` dir:

    zola build

And deploy:

    node_modules/.bin/edgio deploy

## Deployed

Site deployed at: https://szorfein-zola-cook-default.edgio.link
