
/*
 * Limpa o diretório de build e release
 */
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('clean', function() {
  var del = require('del');
  del(config.build.path, function (err) {
    if (err) {
      console.error('Failed to delete ' + config.build.path + ' due to ' + err); 
    } 
  });
  del(config.release.path, function (err) {
    if (err) {
      console.error('Failed to delete ' + config.release.path + ' due to ' + err); 
    } 
  });
});
