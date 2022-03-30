import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(button, navBox, listBox, iconButton, classe) {
    this.button = document.querySelector(button);
    this.nav = document.querySelector(navBox);
    this.list = document.querySelector(listBox);
    this.iconbutton = document.querySelector(iconButton);
    this.classe = classe;

    this.events = ['click', 'touchstart'];
    this.onShowMenu = this.onShowMenu.bind(this);
  }

  // method que add a classe e ativa outsideClick
  onShowMenu() {
    this.list.classList.add(this.classe);
    this.iconbutton.classList.add(this.classe);
    outsideClick(this.nav, () => {
      this.list.classList.remove(this.classe);
      this.iconbutton.classList.remove(this.classe);
    });
  }

  // add events
  addEventButton() {
    this.events.forEach((evento) => {
      this.button.addEventListener(evento, this.onShowMenu);
    });
  }

  init() {
    if (this.button && this.list && this.nav) {
      this.addEventButton();
    }
    return this;
  }
}
