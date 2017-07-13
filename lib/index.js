var cmd = require('node-cmd');
var fs = require('graceful-fs');
var cool = require('cool-ascii-faces')

var fucknode = function(name) {
	if (fs.existsSync('node_modules')) {
		cmd.get(
			'pwd',
			function(err, data, stderr) {
				var fuckbreak = data.replace(/\n|\r/g, "");
				console.log("🤦‍  removing node_modules in" + fuckbreak + "\n🤦‍  and force npm install\n");
			}
		);

		cmd.run('rm -r node_modules');
		cmd.run('npm install');

		var undefined = '';
		return undefined;
	} else {
		return "\n" + cool() + "\nfucknode isn't able to find your node_modules\n" + cool() + "\n";
	}
};

exports.fucknode = fucknode;
