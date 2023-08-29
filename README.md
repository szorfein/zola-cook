# zola-cook
A static site with famillial cooking recipes in french (some cooking recipes are very hard to translate and quantity to convert in oz, cup or other... Just to boring for me :)), made with
[Zola](https://www.getzola.org/) and deployed with [Edgio](https://edgio.app/).

[BeerCSS](https://www.beercss.com/) is used to build a [Material Design](https://m3.material.io/).

Many images used on the site come from [Unsplash](https://unsplash.com), others are stored on [imagekit.io](https://imagekit.io/).

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
