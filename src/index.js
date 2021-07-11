import colors from './bg-colors';
import { randomIntegerFromInterval } from './choose-color';

const startBgColorChangeBtn = document.querySelector('[data-action="start"]');
const stopBgColorChangeBtn = document.querySelector('[data-action="stop"]');
const bodyElement = document.body;
let timerSetElementRandomBgColor = null;

const changeElementBgColor = (element, bgColor) => {
  let elem = element;
  if (!elem instanceof HTMLElement) {
    elem = document.querySelector(elem);
  }
  if (elem) {
    element.style.backgroundColor = bgColor;
  }
};

const setElementRandomBgColor = element => {
  const index = randomIntegerFromInterval(0, colors.length - 1);
  const newBgColor = colors[index];
  changeElementBgColor(element, newBgColor);
};

const onStartBgColorChangeBtnClick = () => {
  timerSetElementRandomBgColor = setInterval(setElementRandomBgColor, 1000, bodyElement);
  activateStopBgColorChangeBtn();
};

const activateStartBgColorChangeBtn = () => {
  startBgColorChangeBtn.addEventListener('click', onStartBgColorChangeBtnClick, { once: true });
};

const onStopBgColorBtnClick = () => {
  clearInterval(timerSetElementRandomBgColor);
  activateStartBgColorChangeBtn();
};

const activateStopBgColorChangeBtn = () => {
  stopBgColorChangeBtn.addEventListener('click', onStopBgColorBtnClick, { once: true });
};

activateStartBgColorChangeBtn();
