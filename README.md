# Lab Angular 2 and NW.js built with gulp and webpack

This project will develop a working build system for a Angular 2 application running on NW.js.

## Steps

1. Follow the basic [Angular 2 Quickstart](https://angular.io/docs/js/latest/quickstart.html) to have a working Angular 2 Typescript application;

1. Add a webpack build using [angular2-webpack-started](https://github.com/angular-class/angular2-webpack-starter). I won´t use webpack server. Test application will be served by [http-server](https://www.npmjs.com/package/http-server);

1. Adapt project to be run by Gulp [ref](https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js);

1. Add NW.js using (https://github.com/lsvidal/lab-ng2-nwjs)

## Following Angular 2 Quickstart

Configure TSD to run behind a corporate proxy by creating the file _.tsdrc_ in home directory with the following content:
```
{
	"proxy": "_<host>_:_<port>_",
	"strictSSl": false
}
```

Run **tsc** directly in command line using `tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts`

Use http-server to see the results. Following the basic tutorial, TSC will emit some warnings about not finding references to *es6-promise* and *rx* but will compile a runnable app. The tutorial only tells to install *angular2* reference using TSD: `tsd query angular2 --action install --verbose --save`. So running the following command is necessary to resolve the warnings: `tsd query es6-promise rx rx-lite --action install --verbose --save`. *rx-lite* is added because it is referenced after installing the first two.

## Intermediate step 1

The application files were moved into a specific directory to be separated from build files. I still want to call **tsc** from base directory which broke typing reference in app.ts file. The solution was moving **tsc** configuration into _tsconfig.json_ file with the proper paths to source and typings. Now **tsc** as `tsc --watch`.

Notes:
* **tsc** with **watch** autodetects changes in *tsconfig.json*.
* Declaring typings in files list of **tsc** configuration seems to eliminate the nedde to declare reference paths in ts files.
