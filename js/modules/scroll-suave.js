export default class ScrollSuave {
  constructor(links, scrollOptions) {
    this.links = document.querySelectorAll(links);
    this.scrollOptions = scrollOptions;

    this.events = ['click', 'touchstart'];
    this.onScrollSuave = this.onScrollSuave.bind(this);
  }

  // method que busca a section corresponde ao
  // href do link do click e poe o scroll suave
  onScrollSuave(event) {
    event.preventDefault();
    this.getHref = event.target.getAttribute('href');
    this.section = document.querySelector(this.getHref);
    this.section.scrollIntoView(this.scrollOptions);
  }

  // add events
  addEventLink() {
    this.events.forEach((evento) => {
      this.links.forEach((link) => {
        link.addEventListener(evento, this.onScrollSuave);
      });
    });
  }

  init() {
    if (this.links) {
      this.addEventLink();
    }
    return this;
  }
}
