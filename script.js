/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import { keyBase } from './key.js';

// let stateCapsLock = false;
// let isShift = false;
const leng = 'ru';
class Btn {
  constructor({
    code, value, valueShift, keySpecial,
  }) {
    // this.isShift = isShift;
    this.code = code;
    this.value = value;
    this.valueShift = valueShift;
    this.leng = leng;
    this.keySpecial = keySpecial;
  }

  generateBtn() {
    const button = document.createElement('li');
    let template = '';
    button.className = `btn ${this.code}`;
    template += `<span class="">${this.value}</span>`;
    template += `<span class="hide">${this.valueShift}</span>`;
    button.innerHTML = template;
    return button;
  }
}
const clear = () => {
  document.body.innerHTML = '';
};

const renderTextarea = () => {
  const textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  textarea.setAttribute('rows', '15');
  return textarea;
};
const main = document.createElement('main');
const renderKeyBoard = () => {
  clear();
  main.appendChild(renderTextarea());
  keyBase[leng].map((el, id) => {
    const row = document.createElement('ul');
    row.className = `row row-${id}`;
    main.appendChild(row);
    return el.map((item) => {
      const btnEl = new Btn({ ...item });
      return row.appendChild(btnEl.generateBtn());
    });
  });
  return main;
};
// document.body.append(renderKeyBoard(isShift));

const init = () => {
  main.innerHTML = '';
  document.body.append(renderKeyBoard());
  main.insertAdjacentHTML('afterend',
    '<p class="description">Клавиатура создана в операционной системе Windows</p><p class="description">Для переключения языка комбинация: левыe ctrl + alt</p>');
};

init();

window.addEventListener('load', () => {
});


const allBtn = document.querySelectorAll('.btn');
const classActive = (node) => {
  node.classList.add('active');
};
const classRemoveActive = (node) => {
  node.classList.remove('active');
};

allBtn.forEach((el) => {
  el.addEventListener('mousedown', (e) => {
    classActive(e.target);
    if (!e.target.classList.contains('btn')) {
      classActive(e.target.parentElement);
    }
  });
  el.addEventListener('mouseup', () => {
    allBtn.forEach((elMouseup) => {
      classRemoveActive(elMouseup);
    });
  });
});

window.addEventListener('keydown', (e) => {
  allBtn.forEach((el) => {
    classRemoveActive(el);
    if (el.classList.contains(e.code)) {
      classActive(el);
    }
  });
});

window.addEventListener('keyup', () => {
  allBtn.forEach((el) => {
    classRemoveActive(el);
  });
});

// window.addEventListener('mouseup', () => {
//   console.log(allBtn);

// });

// stateCapsLock = e.getModifierState('CapsLock');
// if (stateCapsLock) {
//   isShift = true;
// } else {
//   isShift = false;
// }
