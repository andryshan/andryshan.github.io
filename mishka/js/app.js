var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(n,a){a=a||window;for(var e=0;e<this.length;e++)n.call(a,this[e],e,this)});var modals=document.querySelectorAll(".js-modal"),popupSize=document.querySelector(".modal");function modalOpen(n){n.addEventListener("click",function(n){n.preventDefault(),popupSize.classList.add("modal--show")})}modals.forEach(function(n){modalOpen(n)}),window.addEventListener("keydown",function(n){27===n.keyCode&&(n.preventDefault(),popupSize.classList.contains("modal--show")&&popupSize.classList.remove("modal--show"))});