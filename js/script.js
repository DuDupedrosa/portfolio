import MenuMobile from './modules/menu-mobile.js';
import ScrollSuave from './modules/scroll-suave.js';
import MoreProjectsVisible from './modules/more-projects.js';

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="nav"]',
  '[data-menu="list"]',
  '[data-menu="icon"]',
  'active-menu',
);
menuMobile.init();

const scrollSuave = new ScrollSuave('[data-scroll="suave-link"]', {
  behavior: 'smooth',
  block: 'start',
});
scrollSuave.init();

const moreProjectsVisible = new MoreProjectsVisible(
  '[data-show="more-projects-button-open"]',
  '[data-show="more-projects-itens"]',
  '[data-show="more-projects-button-close"]',
  'active-projects',
);
moreProjectsVisible.inti();
