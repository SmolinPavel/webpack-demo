import _ from 'lodash';

import './style.css';
import Santa from './santa.png';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const santaImg = new Image();
  santaImg.src = Santa;

  element.appendChild(santaImg);

  return element;
}

document.body.appendChild(component());
