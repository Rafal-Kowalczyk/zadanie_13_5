var os = require('os');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();	
	if(type === 'Darwin') {
		type = "OSX";
	} else if (type === 'Windows NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();

	console.log(colors.blue('System: %s'), type);
	console.log(colors.green('Release: %s'), release);
	console.log('CPU model: ', cpu);
	console.log(colors.red('Uptime: ~ %s'), (uptime / 60).toFixed(0), 'min');
	console.log(colors.yellow('User name: %s'), userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
	
}

exports.print = getOSinfo;