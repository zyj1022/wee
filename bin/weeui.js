#!/usr/bin/env node

var program = require('commander'),
    gs = require('../lib/generateWee');

program
  .version(require('../package.json').version)
  .usage('<command>')

program
  .command('install ')
  .description('Install weeui')
  .action(function(){gs('wee');});

program.parse(process.argv);

var pname = program.args[0]

if (!pname) program.help();
