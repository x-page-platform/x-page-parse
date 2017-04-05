import * as XPage from './components';

function camelize(str) {
  return str.substr(0, 1).toUpperCase() + str.substring(1);
}

export function factory(componentName, config) {
  switch (componentName) {
    case 'form':
      return new XPage[camelize(componentName)](config);
    default:
      return new XPage.Component(config);
  }
}
