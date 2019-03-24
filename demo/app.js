import {
  LitElement,
  html
} from 'lit-element';

import '@dolphin-kiss/material-wc-button';
import '@dolphin-kiss/material-wc-card';
import '@dolphin-kiss/material-wc-checkbox';
import '@dolphin-kiss/material-wc-select';

class DemoApp extends LitElement {
  render() {
    return html `

      <style>
        mdwc-card {
          margin-bottom: 16px;
        }
      </style>

      <h1>mdwc-button</h1>
      <h2>Normal</h2>
      <mdwc-card>
        <mdwc-button>Normal</mdwc-button>
      </mdwc-card>
      <mdwc-card>
        <mdwc-button raised>Raised</mdwc-button>
      </mdwc-card>

      <mdwc-card><h1>Normal</h1></mdwc-card>
      <mdwc-card raised><h1>Raised</h1></mdwc-card>
      <mdwc-checkbox disabled></mdwc-checkbox>
      <form id="native-form" @submit="${this._nativeFormSubmit}">
        <input value="pjotr" type="checkbox" name="native" @change="${this._handleChange}" @input="${this._handleInput}">
        <mdwc-checkbox name="blablabla" value="checked" @change="${this._handleChange}" @input="${this._handleInput}"></mdwc-checkbox>
        <button type="submit">Submit</button>
      </form>
      <mdwc-select id="select1">
        <option value="grains">
          Bread, Cereal, Rice, and Pasta
        </option>
        <option value="vegetables">
          Vegetables
        </option>
        <option value="fruit">
          Fruit
        </option>
      </mdwc-select>
    `;
  }

  firstUpdated() {
    // this._appendOptionToSelect('select1');
  }

  _appendOptionToSelect(selectId) {
    // window.setInterval(() => {
    //   // console.log('hello');
    //   let option = document.createElement('option');
    //   option.value = 'optionvalue';
    //   option.innerHTML = 'optiontext';
    //   this.shadowRoot.getElementById(selectId)
    //     .append(option);
    // }, 1000);
  }

  _handleChange(e) {
    console.log('_handleChange', e.currentTarget.checked, e.currentTarget.value, e.currentTarget);
  }

  _handleInput(e) {
    console.log('_handleInput', e.currentTarget.checked, e.currentTarget.value, e.currentTarget);
  }

  _nativeFormSubmit(e) {
    e.preventDefault();
    let formData = new FormData(this.shadowRoot.getElementById('native-form'));
    console.log(Array.from(formData.keys()));
    console.log(Array.from(formData.values()));
  }
}

window.customElements.define('demo-app', DemoApp);
