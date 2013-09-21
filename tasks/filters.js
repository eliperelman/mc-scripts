var util = require('util');
var path = require('path');
var fn = require('fn.js');
var shell = require('shelljs');
var mark2 = require('../mark2');

module.exports = function (grunt) {

    grunt.registerMultiTask('filter-sync', 'Sync PwnFilter rules on all named servers', function () {
        shell.cp(path.join(this.data.from, 'plugins/PwnFilter/rules.txt'), this.data.to);
    });

    grunt.registerMultiTask('filter-reload', 'Reload PwnFilter rules on all names servers', function () {
        fn.each(function (server) {
            mark2.send(server, 'pfreload');
        }, this.data);
    });

};