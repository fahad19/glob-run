/* global describe, it */
'use strict';
var assert = require('assert');
var globRun = require('../');

describe('glob-run node module', function () {
	it('must list commands per pattern', function () {
		var commands = globRun('browserify ' + __dirname + '/fixtures/*.js -o bundle.js');
		assert.deepEqual(commands, [
			'browserify ' + __dirname + '/fixtures/a.js -o bundle.js',
			'browserify ' + __dirname + '/fixtures/b.js -o bundle.js'
		]);
		assert.ok(true);
	});

	it('must list commands per pattern, with matching file name', function () {
		var commands = globRun('browserify ' + __dirname + '/fixtures/*.js -o *.js');
		assert.deepEqual(commands, [
			'browserify ' + __dirname + '/fixtures/a.js -o a.js',
			'browserify ' + __dirname + '/fixtures/b.js -o b.js'
		]);
		assert.ok(true);
	});
});
