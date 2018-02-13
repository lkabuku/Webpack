
# WEBPACK

> Webpack is a static module bundler (cf. [Webpack Concepts](https://webpack.js.org/concepts/))

`npm install --save-dev webpack@latest webpack-dev-server@latest` 

## TEMPLATING : HTML-WEBPACK-PLUGIN

`npm install html-webpack-plugin --save-dev`

> The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation


## TRANSPILING

### BABEL-LOADER / BABEL-CORE / BABEL-PRESET-ENV

* BABEL-LOADER / BABEL-CORE

`npm install --save-dev babel-loader babel-core`

> Babel is a compiler [...], it has 3 stages that it runs code in: parsing, transforming, and generation

* BABEL-PRESET-ENV / BABEL-PRESET-REACT / BABEL-PRESET-ES2015

`npm install --save-dev babel-preset-env`

> A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments.


## PREPROCESSING CSS

### STYLE-LOADER / CSS-LOADER / AUTOPREFIXER / POSTCSS-LOADER

`npm install --save-dev style-loader css-loader autoprefixer postcss-loader`

* STYLE-LOADER

> Adds CSS to the DOM by injecting a `<style>` tag, add the css rules to your document

* CSS-LOADER

> The css-loader interprets @import and url() like import/require() and will resolve them

* AUTOPREFIXER / POSTCSS-LOADER

> PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Taobao.

### STYLUS

`npm install --save-dev stylus-loader stylus`

> Stylus is an innovative stylesheet language that compiles down to CSS, inspired by SASS

### EXTRACT-TEXT-WEBPACK-PLUGIN

> It moves all the required *.css modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file.

`npm install extract-text-webpack-plugin --save-dev`

