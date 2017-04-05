import { factory } from './ParserFactory';

export class Component {
  constructor(config) {
    this.name = config.name;
    this.config = config;
    this.children = config.children;
    delete this.config.children;
  }
  getHtml() {
    return '<div></div>';
  }
  mergeConfig(childConfig) {
    // merge当前config到子config中，子config可继承父config
    return Object.assign({ parent: this }, this.config, childConfig);
  }
  getChildrenHtmls() {
    let arr = [];
    if (this.children) {
      this.children.forEach(childConfig => {
        arr.push(this.getChildHtml(childConfig));
      });
    }
    return arr.join('');
  }
  getChildHtml(childConfig) {
    let config = this.mergeConfig(childConfig);
    return factory(config.component, config).getHtml();
  }
}

export class Form extends Component {
  getHtml() {
    return `<div class="x-page-form">${this.getChildrenHtmls()}</div>`;
  }
}

export class HBox extends Component {
  getHtml() {
    return `<div class="x-page-hbox">${this.getChildrenHtmls()}</div>`;
  }
}

export class VBox extends Component {
  getHtml() {
    return `<div class="x-page-vbox">${this.getChildrenHtmls()}</div>`;
  }
}

export class Col extends Component {
  getHtml() {
    return `<div class="x-page-col">${this.getChildrenHtmls()}</div>`;
  }
}

export class Textfield extends Component {
  getHtml() {
    return `
      <div class="x-page-form-item">
        <label style="width: ${this.config.labelWidth}">${this.config.label}</label>
        <div class="x-page-form-control">
          <div class="x-page-textfield">
            <input type="text" />
          </div>
        </div>
      </div>
    `;
  }
}

export class Button extends Component {
  getHtml() {
    return `
      <button>${this.config.text}</button>
    `;
  }
}
