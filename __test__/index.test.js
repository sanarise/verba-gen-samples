import fs from 'fs';
import path from 'path';
import genSamples from '../src';
import { renderMarkdown, renderHtml } from '../src/renderers';

const buildFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

describe('genSamples', () => {
  describe('valid input formats', () => {
    let expectedMd;

    beforeAll(() => {
      const expectedMdPath = buildFixturePath('expected.md');
      expectedMd = fs.readFileSync(expectedMdPath, 'utf-8').trim();
    });

    it('json format', () => {
      const inputPath = buildFixturePath('input.json');

      expect(genSamples(inputPath)).toEqual(expectedMd);
    });

    it('yaml format', () => {
      const inputPath = buildFixturePath('input.yml');

      expect(genSamples(inputPath)).toEqual(expectedMd);
    });
  });

  describe('output renderers', () => {
    let inputPath;

    beforeAll(() => {
      inputPath = buildFixturePath('input.json');
    });

    it('markdown renderer', () => {
      const expectedMdPath = buildFixturePath('expected.md');
      const expectedMd = fs.readFileSync(expectedMdPath, 'utf-8').trim();

      expect(genSamples(inputPath, renderMarkdown)).toEqual(expectedMd);
    });

    it('html renderer', () => {
      const expectedHtmlPath = buildFixturePath('expected.html');
      const expectedHtml = fs.readFileSync(expectedHtmlPath, 'utf-8').trim();

      expect(genSamples(inputPath, renderHtml)).toEqual(expectedHtml);
    });
  });

  it('unknown input format throws error', () => {
    const beforePath = buildFixturePath('input.unknown');

    expect(() => genSamples(beforePath)).toThrow('Unknown input file type: ".unknown"');
  });
});
