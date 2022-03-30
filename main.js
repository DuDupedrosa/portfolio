(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=function(){function e(n,o,s,i,r){t(this,e),this.button=document.querySelector(n),this.nav=document.querySelector(o),this.list=document.querySelector(s),this.iconbutton=document.querySelector(i),this.classe=r,this.events=["click","touchstart"],this.onShowMenu=this.onShowMenu.bind(this)}return n(e,[{key:"onShowMenu",value:function(){var t=this;this.list.classList.add(this.classe),this.iconbutton.classList.add(this.classe),function(e,n){var o=document.documentElement,s="data-outside",i=["click","touchstart"];function r(n){e.contains(n.target)||(e.removeAttribute(s),i.forEach((function(t){o.removeEventListener(t,r)})),t.list.classList.remove(t.classe),t.iconbutton.classList.remove(t.classe))}e.hasAttribute(s)||(e.setAttribute(s,""),i.forEach((function(t){o.addEventListener(t,r)})))}(this.nav)}},{key:"addEventButton",value:function(){var t=this;this.events.forEach((function(e){t.button.addEventListener(e,t.onShowMenu)}))}},{key:"init",value:function(){return this.button&&this.list&&this.nav&&this.addEventButton(),this}}]),e}(),s=function(){function e(n,o){t(this,e),this.links=document.querySelectorAll(n),this.scrollOptions=o,this.events=["click","touchstart"],this.onScrollSuave=this.onScrollSuave.bind(this)}return n(e,[{key:"onScrollSuave",value:function(t){t.preventDefault(),this.getHref=t.target.getAttribute("href"),this.section=document.querySelector(this.getHref),this.section.scrollIntoView(this.scrollOptions)}},{key:"addEventLink",value:function(){var t=this;this.events.forEach((function(e){t.links.forEach((function(n){n.addEventListener(e,t.onScrollSuave)}))}))}},{key:"init",value:function(){return this.links&&this.addEventLink(),this}}]),e}(),i=function(){function e(n,o,s,i){t(this,e),this.buttonOpen=document.querySelector(n),this.moreProjectsItens=document.querySelector(o),this.buttonFechar=document.querySelector(s),this.classe=i,this.events=["click","touchstart"],this.onShowMoreProjects=this.onShowMoreProjects.bind(this),this.offShowMoreProjects=this.offShowMoreProjects.bind(this)}return n(e,[{key:"offShowMoreProjects",value:function(t){t.preventDefault(),this.moreProjectsItens.classList.remove(this.classe)}},{key:"onShowMoreProjects",value:function(t){t.preventDefault(),this.moreProjectsItens.classList.add(this.classe)}},{key:"addEventButton",value:function(){var t=this;this.events.forEach((function(e){t.buttonOpen.addEventListener(e,t.onShowMoreProjects)})),this.events.forEach((function(e){t.buttonFechar.addEventListener(e,t.offShowMoreProjects)}))}},{key:"inti",value:function(){return this.buttonOpen&&this.moreProjectsItens&&this.buttonFechar&&this.addEventButton(),this}}]),e}();new o('[data-menu="button"]','[data-menu="nav"]','[data-menu="list"]','[data-menu="icon"]',"active-menu").init(),new s('[data-scroll="suave-link"]',{behavior:"smooth",block:"start"}).init(),new i('[data-show="more-projects-button-open"]','[data-show="more-projects-itens"]','[data-show="more-projects-button-close"]',"active-projects").inti()})();