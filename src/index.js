import * as ParserFactory from './ParserFactory';

export function parse(config) {
  let elements = config.elements;
  let output = [];

  elements.forEach(component => {
    let parser = ParserFactory.factory(component.component, component);
    output.push(parser.getHtml());
  });

  return output.join('');
}
