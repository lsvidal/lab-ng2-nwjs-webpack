'use strict';

var src =  './src/';
var build = './build/';
var release = './release';


module.exports = {
    src: {
        path: src,
        ts: src + 'app/**/*.ts',
        styles: src + 'static/styles/**/*.css',
        html: src + 'static/**/*.html'
    },

    build: {
        path: build,
        scripts: build + 'scripts/',
        styles: build + 'styles/',
        html: build
    },
    
    release: {
        path: release
    },

    nwBuild: {
        version: '0.12.2',
        platforms: ['win32', 'win64'],
        files: build + '**',
        buildDir: release
    }
};
