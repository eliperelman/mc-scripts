var fn = require('fn.js');
var mark2 = require('../mark2');

module.exports = function (grunt) {

    grunt.registerTask('reload-server', function (server) {
        mark2.send(grunt.option('server') || server, 'reload');
    });

    grunt.registerMultiTask('reload', 'Reload all configured named servers', function () {
        fn.each(function (server) {
            grunt.option('server', server);
            grunt.task.run('reload-server');
        }, this.data);
    });

};