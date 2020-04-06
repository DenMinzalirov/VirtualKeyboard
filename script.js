/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import { keyBase } from './key.js';

console.log('keyBase', keyBase);
class Btn {
  constructor({
    code, value, valueShift, row, leng, keySpecial, isShift,
  }) {
    this.isShift = isShift;
    this.code = code;
    this.value = value;
    this.valueShift = valueShift;
    this.row = row;
    this.leng = leng;
    this.keySpecial = keySpecial;
  }

  generateBtn() {
    const button = document.createElement('li');
    button.className = `btn btn-${this.code}`;
    if (this.isShift) {
      button.innerHTML = this.valueShift;
    } else { button.innerHTML = this.value; }
    return button;
  }
}

const leng = 'eng';
const isShift = true;

const renderKeyBoard = (state) => {
  const main = document.createElement('main');
  // eslint-disable-next-line array-callback-return
  keyBase[leng].map((el, id) => {
    const row = document.createElement('ul');
    row.className = `row row-${id}`;
    main.appendChild(row);
    el.map((item) => {
      const btnEl = new Btn({ ...item, isShift: state });
      return row.appendChild(btnEl.generateBtn());
    });
  });
  return main;
};

// eslint-disable-next-line no-undef
window.addEventListener('load', () => {
  console.log('load');
  document.body.append(renderKeyBoard(isShift));
});
