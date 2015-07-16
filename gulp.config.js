'use strict';

var src =  './src/';
var build = './build/';
var release = './release';


module.exports = {
    src: {
        path: src,
        ts: src + 'app/**/*.ts',
        css: src + 'static/styles/**/*.css',
        html: src + 'static/**/*.html',
        nw: src + 'static/package.json',
        lib: ['./node_modules/traceur/bin/traceur-runtime.js']
    },

    build: {
        path: build,
        scripts: build + 'scripts/',
        css: build + 'styles/',
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
