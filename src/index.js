import * as ParserFactory from './ParserFactory';

import './styles.scss';

export function parse(config) {
  let elements = config.elements;
  let output = [];

  elements.forEach(component => {
    let parser = ParserFactory.factory(component.component, component);
    console.log(parser.getHtml());
    output.push(parser.getHtml());
  });

  return output.join('');
}
