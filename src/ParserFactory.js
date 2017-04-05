import * as XPage from './components';

export function factory(componentName, config) {
  let cname = Object.keys(XPage).find(key => key.toLowerCase() === componentName.toLowerCase());
  if (cname) {
    return new XPage[cname](config);
  }
  return new XPage.Component(config);
}
