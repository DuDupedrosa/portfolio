export default class MoreProjectsVisible {
  constructor(buttonOpen, box, buttonCLose, classe) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.moreProjectsItens = document.querySelector(box);
    this.buttonFechar = document.querySelector(buttonCLose);
    this.classe = classe;

    this.events = ['click', 'touchstart'];
    this.onShowMoreProjects = this.onShowMoreProjects.bind(this);
    this.offShowMoreProjects = this.offShowMoreProjects.bind(this);
  }

  // method que fecha a classe
  offShowMoreProjects(event) {
    event.preventDefault();
    this.moreProjectsItens.classList.remove(this.classe);
  }

  // method que abre a caixa
  onShowMoreProjects(event) {
    event.preventDefault();
    this.moreProjectsItens.classList.add(this.classe);
  }

  // method que add os events ao button de abrir
  // e também ao de fechar a caixa
  addEventButton() {
    this.events.forEach((evento) => {
      this.buttonOpen.addEventListener(evento, this.onShowMoreProjects);
    });
    this.events.forEach((evento) => {
      this.buttonFechar.addEventListener(evento, this.offShowMoreProjects);
    });
  }

  inti() {
    if (this.buttonOpen && this.moreProjectsItens && this.buttonFechar) {
      this.addEventButton();
    }
    return this;
  }
}
