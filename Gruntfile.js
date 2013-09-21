module.exports = function (grunt) {

    grunt.initConfig({
        reload: {
            all: [
                'nexusquest',
                'games',
                'pvp',
                'skyrim',
                'creative',
                'survival'
            ]
        },
        'filter-sync': {
            main: {
                from: './nexusquest',
                to: [
                    './__BASE__',
                    './games',
                    './pvp',
                    './skyrim',
                    './creative',
                    './survival'
                ]
            }
        },
        'filter-reload': {
            all: '<%= reload.all %>'
        }
    });

    grunt.loadTasks('./tasks');

    grunt.registerTask('reload-filters', 'filter-sync:main filter-reload:all');

    grunt.file.setBase('../');

};