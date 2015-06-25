# Lab Angular 2 and NW.js built with gulp and webpack

This project will develop a working build system for a Angular 2 application running on NW.js.

## Steps

1. Follow the basic [Angular 2 Quickstart](https://angular.io/docs/js/latest/quickstart.html) to have a working Angular 2 Typescript application;

1. Add a webpack build using [angular2-webpack-started](https://github.com/angular-class/angular2-webpack-starter). I won´t use webpack server. Test application will be served by [http-server](https://www.npmjs.com/package/http-server);

1. Adapt project to be run by Gulp [ref](https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js);

1. Add NW.js using (https://github.com/lsvidal/lab-ng2-nwjs)

## Configuration

### TSD config

To run _tsd_ it is necessary to create the file _.tsdrc_ in home directory with the following parameters:
```
{
	"proxy": "http://localhost:3940",
	"strictSSl": false
}
```

### Command line commands

It is necessary to download declaration files for es6-loader, rx and rx-lite to stop tsc complaining about unresolved references. The full list of commands is: 

```
	npm install tsd -g

	tsd query angular2 --action install --verbose --save
	tsd query es6-loader --action install --verbose --save
	tsd query rx --action install --verbose --save
	tsd query rx-lite --action install --verbose --save
```
