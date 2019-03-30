var today = new Date();
var dd = today.getDate();
var h = today.getHours();
var m = today.getMinutes();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
}
if(mm<10) {
    mm = '0'+mm
}
if(h<10) {
    h = '0'+h
}
if(m<10) {
    m = '0'+m
}
var fileVersion = yyyy + mm + dd + h + m;

var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/img', to: 'img' },
        { from: './assets/fonts', to: 'fonts' }
    ]))

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */

    //.addEntry('jquery', './assets/js/jquery-2.1.1.js')
    .addEntry('app', './assets/app.js')
    //.addEntry('app2', './assets/assets/js/app.min.js')
    //.addEntry('lp', './assets/js/lp.js')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })

    //.enableVueLoader()
;

if (Encore.isProduction()) {
    Encore.configureFilenames({
        js: '[name].' + fileVersion + '.js',
        css: '[name].' + fileVersion + '.css',
        images: '[path][name].' + fileVersion + '.[ext]',
        fonts: '[path][name].' + fileVersion + '.[ext]'
    });
} else {
    Encore.configureFilenames({
        js: '[name].js',
        css: '[name].css',
        images: '[path][name].[ext]',
        fonts: '[path][name].[ext]'
    });
}

const config = Encore.getWebpackConfig();

// config.resolve = {
//     alias: {
//         'jquery-ui/widget': 'blueimp-file-upload/js/vendor/jquery.ui.widget.js',
//         'load-image': 'blueimp-load-image/js/load-image.js',
//         'load-image-meta': 'blueimp-load-image/js/load-image-meta.js',
//         'load-image-exif': 'blueimp-load-image/js/load-image-exif.js',
//         'canvas-to-blob': 'blueimp-canvas-to-blob/js/canvas-to-blob.js',
//         'load-image-scale': 'blueimp-load-image/js/load-image-scale.js',
//     }
// };

module.exports = config;