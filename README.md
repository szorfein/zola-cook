# zola-cook
A static site with famillial cooking recipes in french (some cooking recipes are very hard to translate and quantity to convert in oz, cup or other... Just to annoying :)), made with
[zola](https://www.getzola.org/) and deployed with [edgio](https://edgio.app/).

[beercss](https://www.beercss.com/) is used to build a nice ui interface with [material design](https://m3.material.io/).

Many images used on the site come from [unsplash](https://unsplash.com), others are stored on [imagekit.io](https://imagekit.io/).

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

## Others

After deployed, new sitemap is valided by clicking on https://www.google.com/ping?sitemap=https://szorfein-zola-cook-default.edgio.link/sitemap.xml
