import _ from 'lodash';

import './style.css';
import Santa from './santa.png';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const santaImg = new Image();
  santaImg.src = Santa;

  element.appendChild(santaImg);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
