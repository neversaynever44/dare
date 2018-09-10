# Hedgehog Technology - standard HTML template

This is a standard biolerplate for websites by [Hedgehog Technology](https://hedgehog.technology/).

## Reasoning

OMG, all other developers are doing this wrong!!! ([NIH syndrome](https://en.wikipedia.org/wiki/Not_invented_here)). Just kidding.

## What's under the hood

- Gulp as a task runner;
- Webpack as a bundler;
- SASS (SCSS) as CSS preprocessor;
- Browsersync for live reloading;
- Nunjucks as templating engine (incl. data.json for content);
- Basic .htaccess file;
- Bells and whistles.

## What is automated

- Compilation of SCSS/SASS partials to one CSS file, adding prefixes, expand short inputs by PostCSS short syntax;
- Bundling JavaScript from modules to one concatenated JS file + minimization for the production environment;
- Linting PHP, minimization for production.
- Building sprite images from few icons (default version + another sprite for retina displays automatically used by media rule in generated sprite.css);
- Minimize images for production;
- Moving unchanged vendor files from src to dev/ and prod/ without no need to touch these folders manually;
- Building HTML from parts and minification for production.

## ToDo

- Change image optimization - switch to [ImageMagick](https://developers.google.com/speed/docs/insights/OptimizeImages)
- Add test cases for check before merging into default branch (cross-platform testing, biulding etc.)

---

## Getting Started

### Requirements

- Linux/Windows/macOS;
- Node ([Active LTS](https://github.com/nodejs/Release) version recommended);

### Installation

- Clone it from the [original repository](https://gitlab.com/hedgehog.technology/ht-html-template)

`git clone git@gitlab.com:hedgehog.technology/ht-html-template.git`

- Copy content of this repository to your one.
- Install NPM packages, from the folder where package.json file is located -  run in terminal:

`npm i`

### Usage

To start development run in terminal command :
`gulp`
Open default development URL [http://localhost:9451](http://localhost:9451)
All development is meant to be done in `/src` folder, no need to do manipulations in `/dev` or `/prod`.

To build production version run:
`gulp prod`

In `gulp\config\options.js` you can configure variables `options.config`

### Instalation of new plugins/packages via npm

Install new package for development :
`npm i *package-name* --save-dev`

Install new plugin or lib :
`npm i *package-name* --save-dep`

---

## Folders structure

### HTML

`src/templates` - html pages;
`src/templates/partials` - for repetitive parts like header, footer, other blocks;

### Styles

`src/style` - main folder for sources;
`src/style/main.scss` - main compiled file (there are only imports there);
`src/style/vendor` - non-changable CSS from libs (like reset.css etc.);
`src/style/partials` - SCSS for pages, repetitive parts like buttons, header, footer
`src/style/base` - SCSS with basic template, SCSS variables for colors, fonts, media-width variables;

### JavaScript

`src/js` - main folder for sources;
`src/js/main.js` - main compiled js file (there are only imports there);
`src/js/vendor` - lib js files;
`src/js/modules` - module js parts, later imported to main.js file;

### Media

`src/img` - images (idealy there no images directly in this folder);
`src/img/svg` - SVG images;
`src/img/sprite` - PNG images for combining into sprite;
`src/img/ui` - UI images like arrows, buttons, dropdown arrows (idealy all that staff take in sprite);
`src/img/content` - content images, like backgrounds, images (so when back-end developer will convert HTML/CSS/JS into live site, he can kill all redundant content as a single folder);
`src/img/favicon` - favicon image(s);
`src/vendor` - for media files like videos, pdf, docs etc. (will be not compressed or optimised via gulp);
`src/fonts` - all locally served fonts;

### PHP

`/src` - the boilerplate is not suitable for back-end development, but having PHP script there can solve simple problems like email sending from a simple contact form.

---

## Other instructions

### HTML Templating

To include html partial  (for example, footer) , insert in html next line of code `{% include "partials/footer.html" %}`

### Sprite usage

Source sprite images should be in `src/img/sprite` directory.

For retina support there should be 2 versions of image, for examlpe:
`example.png` and `example@2x.png` with `@2x` sufix for retina display. Please pay attention, that `example@2x.png` should be exactly twice larger by width and height.

To use sprite in development we have 2 options:

- in html add class `.icon-example` to element;
- or in scss add `@export .icon-example`.

### data.json usage

For example data.json already contains some data like a  “pageTitle”: “page title”. To use this text (“page title”) you need to type `{{pageTitle}}` inside html.

For more details look in documentatin [here](https://mozilla.github.io/nunjucks/templating.html).

---

![Image of hedgehog](http://res.cloudinary.com/ds3tq91lc/image/upload/v1510330451/fav_icon_180x180_white_i0smni.png)

#### The hedgehog image above gives you +5 to coding skills ;)