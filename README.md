# zola-cook
A static site with famillial cooking recipes in french (some cooking recipes are very hard to translate and quantity to convert in oz, cup or other... Just to annoying :)), made with
[zola](https://www.getzola.org/) and deployed with [edgio](https://edgio.app/).

[beercss](https://www.beercss.com/) is used to build a nice ui interface with [material design](https://m3.material.io/).

Many images used on the site come from [unsplash](https://unsplash.com), others are stored on [imagekit.io](https://imagekit.io/).

## Install
The site is deployed with surge, you need to install the cli tool:

    npm install surge --save-dev

## Build

Add content to the `public/` dir:

    zola build

And deploy:

    cd public
    ../node_modules/.bin/surge
    domain: recipes-zola.surge.sh

## Deployed

Site deployed at: https://recipes-zola.surge.sh/

### Responsive image

imagekit use a website analyzer: https://imagekit.io/website-analyzer

In resume, in order to reduce image size, all metadatas are erased using `mat2`:

    $ mat2 example.jpeg

And images are compressed and formatted in webp using `cwebp`:

    $ cwebp -q 80.00 example.cleaned.jpeg -o example.webp


Docs: [unsplash](https://unsplash.com/documentation#example-image-use), [imagekit](https://imagekit.io/blog/lazy-loading-images-complete-guide/).

### Sitemap

After deployed, new sitemap is valided by clicking on https://www.google.com/ping?sitemap=https://szorfein-zola-cook-default.edgio.link/sitemap.xml

### Good links

+ [w3m validator](https://validator.w3.org/nu/)
