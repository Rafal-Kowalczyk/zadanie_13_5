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

	console.log('System: ', type);
	console.log(colors.red('Release: %s'), release);
	console.log('CPU model: ', cpu);
	console.log('Uptime: ~ ', (uptime / 60).toFixed(0), 'min');
	console.log('User name: ', userInfo.username);
	console.log('Home dir: ', userInfo.homedir);

	console.log('hello'.green);
	
}

exports.print = getOSinfo;