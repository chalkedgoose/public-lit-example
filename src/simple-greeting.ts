import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static override styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name?: string = 'World';

  override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
    interface HTMLElementTagNameMap {
        'simple-greeting': SimpleGreeting;
    }
}
