var util = require('util');
var shell = require('shelljs');


module.exports.send = function (server, sendCommand) {
    var command = util.format('mark2 send -n %s %s', server, sendCommand);

    return shell.exec(command);
};