/* global describe, it */
'use strict';
var assert = require('assert');
var globRun = require('../');

describe('glob-run node module', function () {

	it('must support static escaped paths', function () {
		var commands = globRun('echo "foo" >> ' + __dirname + '/fixtures/*.js');
		assert.deepStrictEqual(commands, [
			'echo "foo" >> ' + __dirname + '/fixtures/a.js',
			'echo "foo" >> ' + __dirname + '/fixtures/b.js'
		]);
		assert.ok(true);
	});
 
	it('must escape dynamic generated paths', function () {
		var commands = globRun('cat "' + __dirname + '/fixtures/text_files/*.txt" >> output.txt');
		assert.deepStrictEqual(commands, [
			'cat "' + __dirname + '/fixtures/text_files/File 1 (Text).txt" >> output.txt',
			'cat "' + __dirname + '/fixtures/text_files/File 2 (Ümläütè).txt" >> output.txt'
		]);
		assert.ok(true);
	});

	//see https://github.com/fahad19/glob-run/issues/7
	it('must escape dynamic generated paths', function () {
		var commands = globRun('glob-run js-beautify --config H:\\.jsbeautifyrc -r "' + __dirname + '/fixtures/**/*.txt"');
		assert.deepStrictEqual(commands, [
			'glob-run js-beautify --config "H:\\.jsbeautifyrc" -r "' + __dirname + '/fixtures/text_files/File 1 (Text).txt"',
			'glob-run js-beautify --config "H:\\.jsbeautifyrc" -r "' + __dirname + '/fixtures/text_files/File 2 (Ümläütè).txt"'
		]);
		assert.ok(true);
	});

	

});
