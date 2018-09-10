const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const pathPlugin = require('path');
const WebpackOnBuildPlugin = require('on-build-webpack');
const browserSync = require("browser-sync");
const reload = browserSync.reload;
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let options = {
  config: { // Gulp options to configure project 
    checkChanged: true, // Check if files where before so compile only changed files 
    minifyHTML: true, // on prod stage
    minifyCSS: true, // on prod stage
    uglifyJS: true, //  disabled
    concatJS: false, //  disabled
    minifyPHP: true, // on prod stage , https://github.com/cedx/gulp-php-minify doc
    showGulpDebug: true, // shows gulp debug messages in terminal
    nunjucksOn: true, // if false html will be build by rigger 
    // removeJsConsoleLogDev: false, // true to delete all console.log
    // removeJsConsoleLog: false , // true to delete all console.log
    showSizes: true, // in gulp config show size of files 
    cssSourcemap: true, // build css sourcemap 
    pngSprite: '../img/sprite.png', // path to image that should know css . Default -  '../img/sprite.png'
    pngSpriteRetina: '../img/sprite@2x.png' // path to retina image that should know css . Default -  '../img/sprite@2x.png'
  },
  BrowserSyncConfig: { // documentation https://browsersync.io/docs/options
    server: { baseDir: "./dev/" },
    tunnel: false,
    host: 'localhost',
    port: 9451,
    open: false,
    notify: true,
    scrollProportionally: false,
    logPrefix: "Frontend",
  },
  webpackConfig: {
    watch: true, // js will be watched by native webpack watcher
    devtool: 'cheap-module-inline-source-map',
    module: {
      loaders: [{
        test: /\.js/,
        include: pathPlugin.join(__dirname, 'src'), // __dirname - absolute path // к чему применять бабел
        loader: 'babel-loader',
      }]
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        'TweenLite': 'gsap/src/minified/TweenLite.min.js',
        'TweenMax': 'gsap/src/minified/TweenMax.min.js',
        'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
        'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
        'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',

        'RoundPropsPlugin': 'gsap/src/minified/plugins/RoundPropsPlugin.min.js',
        // 'scrollTo': 'gsap/src/minified/plugins/ScrollToPlugin.min.js',
        // 'split': 'gsap/src/minified/utils/split.min.js',
        'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
      }
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new WebpackOnBuildPlugin(function (stats) {
        browserSync.reload()
      }),
    ],

  },

  // webpackConfigProd: {
  //   module: {
  //     loaders: [{
  //       test: /\.js/,
  //       include: pathPlugin.join(__dirname, 'src'),
  //       loader: 'babel-loader',
  //     }]
  //   },
  //   plugins: [
  //     new webpack.optimize.UglifyJsPlugin({
  //       output: { comments: false },
  //       compress: {
  //         warnings: false,
  //         drop_console: true
  //       },
  //     }),
  //     new webpack.NoEmitOnErrorsPlugin(),
  //   ]
  // },
  htmlMinOptions: { // documentation https://github.com/kangax/html-minifier 
    collapseWhitespace: false,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    minifyJS: true,
    caseSensitive: true
  }
};

module.exports = options