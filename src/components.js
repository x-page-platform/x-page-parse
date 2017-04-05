import { factory } from './ParserFactory';

class Component {
  constructor(config) {
    this.name = config.name;
    this.config = config;
    this.children = config.children;
  }
  getHtml() {
    return '<div></div>';
  }
  // merge当前config到子config中，子config可继承父config
  mergeConfig(childConfig) {
    return Object.assign({ parent: this }, this.config, childConfig);
  }
  getChildrenHtmls() {
    let arr = [];
    if (this.children) {
      this.children.forEach(childConfig => {
        arr.push(this.getChildHtml(childConfig));
      });
    }
    return arr;
  }
  getChildHtml(childConfig) {
    let config = this.mergeConfig(childConfig);
    return factory(config.name, config).getHtml();
  }
}

class Form extends Component {
  getHtml() {
    return `<div class="x-page-form">${this.getChildrenHtmls()}</div>`;
  }
}

class HBox extends Component {
  getHtml() {
    return `<div class="x-page-hbox">${this.getChildrenHtmls()}</div>`;
  }
}

class VBox extends Component {
  getHtml() {
    return `<div class="x-page-vbox">${this.getChildrenHtmls()}</div>`;
  }
}

export { Component, Form, HBox, VBox };
