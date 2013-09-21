var shell = require('shelljs');

module.exports = function (grunt) {

    grunt.registerTask('bungee-start', function () {
        shell.cd('bungee');
        shell.exec('tmux new-session -d -n bungee java -Xss192k -Xms256M -Xmx1G -jar BungeeCord.jar');
    });

    grunt.registerTask('bungee-stop', function () {
        shell.exec('tmux send-keys -t bungee "end^M"');
    });

    grunt.registerTask('bungee-reload', function () {
        shell.exec('tmux send-keys -t bungee "greload^M"');
    });

    grunt.registerTask('bungee-restart', function () {
        grunt.task.run('bungee-stop', 'bungee-start');
    });

};
