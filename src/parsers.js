import yaml from 'js-yaml';

const parsers = {
  '.yml': yaml.load,
  '.yaml': yaml.load,
  '.json': JSON.parse,
};

export default (ext) => {
  const parser = parsers[ext];
  if (!parser) {
    throw new Error(`Unknown input file type: "${ext}"`);
  }
  return parser;
};
