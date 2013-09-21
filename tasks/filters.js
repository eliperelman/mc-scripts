var mark2 = require('../mark2');

module.exports = function (grunt) {

    grunt.registerMultiTask('filter-sync', 'Sync PwnFilter rules on all named servers', function () {
        var from = this.data.from;

        fn.each(function (dest) {
            var rules = '/plugins/PwnFilter/rules.txt';

            grunt.file.copy(from + rules, dest + rules);
        }, this.data.to);
    });

    grunt.registerMultiTask('filter-reload', 'Reload PwnFilter rules on all names servers', function () {
        fn.each(function (server) {
            mark2.send(server, 'pfreload');
        }, this.data);
    });

};