process.stdin.setEncoding('utf-8');

var OSinfo = require('./modules/Osinfo');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instuction = input.toString().trim();
		switch(instuction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/sayhello':
				process.stdout.write('hello!\n');
				break;	
			case '/getOSinfo':
				OSinfo.print();
			break;		
			default:
			process.stderr.write('Wrong instuction!\n');
		};	
	}
});

