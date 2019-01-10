#!/usr/bin/env node

import commander from 'commander';
import _ from 'lodash';
import { version } from '../../package.json';
import genSamples from '..';
import { renderMarkdown, renderHtml, renderTable } from '../renderers';

const outputFormats = {
  md: renderMarkdown,
  html: renderHtml,
  table: renderTable,
};

const processAction = (inputFile) => {
  if (!_.has(outputFormats, commander.format)) {
    console.log(`Unknown output format "${commander.format}". `
      + `Available formats: ${_.keys(outputFormats).join(', ')}.`);
    return;
  }

  console.log(genSamples(inputFile, outputFormats[commander.format]));
};

commander
  .description('Generate textile samples markup.')
  .option('-f, --format [type]', 'output format', 'md')
  .version(version)
  .arguments('<input_file>')
  .action(processAction)
  .parse(process.argv);

if (commander.args.length === 0) {
  commander.help();
}
