import fs from 'fs';
import { extname } from 'path';
import getParser from './parsers';
import { renderMarkdown } from './renderers';

const genSamples = (inputPath, render = renderMarkdown) => {
  const inputExtName = extname(inputPath);
  const parse = getParser(inputExtName);
  const rawData = fs.readFileSync(inputPath, 'utf-8');

  return render(parse(rawData));
};

export default genSamples;
