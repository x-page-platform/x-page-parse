import * as XPage from './components';

function camelize(str) {
  return str.substr(0, 1).toUpperCase() + str.substring(1);
}

export function factory(componentName, config) {
  let Component = XPage[camelize(componentName)];
  if (Component) {
    return new Component(config);
  }
  return new XPage.Component(config);
}
