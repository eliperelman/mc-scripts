var fn = require('fn.js');
var mark2 = require('../mark2');

module.exports = function (grunt) {

    grunt.registerTask('reload-server', function (server) {
        mark2.send(server, 'reload');
    });

    grunt.registerMultiTask('reload', 'Reload all configured named servers', function () {
        fn.each(function (server) {
            grunt.task.run('reload-server:' + server);
        }, this.data);
    });

};