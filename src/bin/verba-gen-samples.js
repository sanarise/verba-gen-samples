#!/usr/bin/env node

import commander from 'commander';
import { version } from '../../package.json';

const processAction = (inputJson, outputFile) => {
  console.log('args:', inputJson, outputFile);
  console.log('opts:', commander.format);
};

commander
  .description('Generate textile samples markup.')
  .option('-f, --format [type]', 'output format', 'md')
  .version(version)
  .arguments('<input_json> <output_file>')
  .action(processAction)
  .parse(process.argv);

if (commander.args.length === 0) {
  commander.help();
}
