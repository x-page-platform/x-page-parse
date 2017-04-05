import * as XPage from './components';

export function factory(componentName, config) {
  switch (componentName) {
    case 'form':
      return new XPage[componentName](config);
    default:
      return new XPage.Component(config);
  }
}
