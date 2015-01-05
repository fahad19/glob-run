'use strict';

var glob = require('glob');

module.exports = function (run) {
	if (typeof run === 'undefined') {
		return;
	}

	var commands = [];

	// no pattern found
	if (run.indexOf('*') === -1) {
		commands.push(run);
		return commands;
	}

	// find by pattern
	var runE = run.split(' ');
	var patternAt = null;
	var pattern = null;
	var lastPatternAt = null;
	var lastPattern = null;
	runE.forEach(function (word, i) {
		if (!pattern && word.indexOf('*') > -1) {
			pattern = word;
			patternAt = i;
		}

		if (pattern && i > patternAt && word.indexOf('*') > -1) {
			lastPattern = word;
			lastPatternAt = i;
		}
	});
	var list = glob.sync(pattern);
	list.forEach(function (item) {
		var command = run.split(' ');
		command[patternAt] = item;

		if (lastPattern) {
			var filenameE = item.split('/');
			var filename = filenameE[filenameE.length - 1];

			if (lastPattern.indexOf('*.') > -1) {
				var filenameWithoutExtension = filename.split('.');
				filenameWithoutExtension.pop();
				filenameWithoutExtension = filenameWithoutExtension.join('.');
				filename = filenameWithoutExtension;
			}

			command[lastPatternAt] = command[lastPatternAt].replace('*', filename);
		}

		command = command.join(' ');
		commands.push(command);
	});

	return commands;
};
