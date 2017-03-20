import _ from 'lodash';
import tpl from './form.tpl';
import formItemTpl from './form-item.tpl';
import { parseElement } from '../index';

/**
 * form 参数
 */
export default function parse(config) {
  let data = _.omit(config, 'name');

  let childrenChunks = _.chunk(data.children, data.columns);
  let childrenHtml = childrenChunks.map(chunk => {
    let html = '<div class="x-page-row">';
    chunk.forEach(child => {
      html += _.template(formItemTpl, {
        labelWidth: config.labelWidth,
        label: child.label,
        item: parseElement(child)
      });
    });
    html += '</div>';
    return html;
  });

  data.childrenHtml = childrenHtml;
  return _.template(tpl)(data);
}
