import { factory } from './ParserFactory';
import omit from 'lodash/omit';
import defaultsDeep from 'lodash/defaultsDeep';

export class Component {
  defaults() {
    return {};
  }

  constructor(config) {
    this.name = config.name;
    this.config = defaultsDeep(config, this.defaults());
    this.children = config.children;
  }

  getHtml() {
    return '<div></div>';
  }

  mergeConfig(childConfig) {
    // merge当前config到子config中，子config可继承父config
    let pureParentConfig = omit(this.config, ['children', 'component']);
    return Object.assign({ parent: this }, pureParentConfig, childConfig);
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
  defaults() {
    return {
      colspan: 1
    };
  }

  getHtml() {
    return `<div class="x-page-col" style="flex: ${this.config.colspan}">${this.getChildrenHtmls()}</div>`;
  }
}

export class Field extends Component {
  getFieldHtml() {

  }
  getHtml() {
    return `
      <div class="x-page-form-item">
        <label style="width: ${this.config.labelWidth}">${this.config.label}</label>
        <div class="x-page-form-control">
          ${this.getFieldHtml()}
        </div>
      </div>
    `;
  }
}

export class Textfield extends Field {
  getFieldHtml() {
    return `
        <div class="x-page-textfield">
          <input type="text" />
        </div>
    `;
  }
}

export class RadioField extends Field {
  static UUID = 0;

  constructor(config) {
    super(config);
    this.radioName = this.config.name || RadioField.UUID++;
  }

  getRadiosItems() {
    return this.config.items.map(item => {
      return `<label><input type="radio" value="${item.value}" name="${this.radioName}" /> ${item.label}</label>`;
    }).join('');
  }

  getFieldHtml() {
    return `
      <div class="x-page-radiofield">
        ${this.getRadiosItems()}
      </div>
    `;
  }
}

export class ComboboxField extends Field {
  getComboList() {
    return this.config.items.map(item => {
      return `<option value="${item.value}">${item.label}</option>`;
    }).join('');
  }

  getFieldHtml() {
    return `
      <div class="x-page-comboboxfield">
        <select>${this.getComboList()}</select>
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
