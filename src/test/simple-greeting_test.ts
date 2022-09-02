import {SimpleGreeting} from '../simple-greeting';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('simple-greeting', () => {
  test('is defined', () => {
    const el = document.createElement('simple-greeting');
    assert.instanceOf(el, SimpleGreeting);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<simple-greeting></simple-greeting>`);
    assert.shadowDom.equal(
      el,
      `
        <p>Hello, World!</p>
      `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(
      html`<simple-greeting name="Test"></simple-greeting>`
    );
    assert.shadowDom.equal(
      el,
      `
        <p>Hello, Test!</p>
      `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(
      html`<simple-greeting></simple-greeting>`
    )) as SimpleGreeting;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).color, 'rgb(0, 0, 255)');
  });
});
