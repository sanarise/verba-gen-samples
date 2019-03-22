import _ from 'lodash';

const renderHeader = (json) => {
  const headers = _.map(json, rec => `<th>${rec.category}</th>`);
  return `<tr>${headers.join('')}</tr>`;
};

const renderCells = (json) => {
  const checkLevel = (data, level) => {
    const checker = (acc, rec) => acc || rec.list.length > level;
    return _.reduce(data, checker, false);
  };

  const renderLevel = (data, level) => {
    if (!checkLevel(data, level)) {
      return '';
    }
    const cells = _.map(data, rec => {
      const cellData = rec.list[level];
      return cellData ? `<td>${cellData.id}<br>${cellData.name}</td>` : '<td></td>';
    });
    return [`<tr>${cells.join('')}</tr>`, renderLevel(data, level + 1)].join('\n');
  };

  return renderLevel(json, 0);
};

const render = json => ['<table>', renderHeader(json), renderCells(json), '</table>'].join('\n');

export default render;
