!function(){function e(){var e=document.querySelector(".background"),t=document.body.offsetHeight,n=document.body.offsetWidth;e.style.height=t+"px";for(var o=0;o<=t-100;o+=40+Math.round(200*Math.random())){var i=document.createElement("div");i.className="circle circle--"+Math.round(2*Math.random()+1),e.append(i);var c=40+Math.round(60*Math.random()),s=Math.round(n*Math.random());i.style.height=c+"px",i.style.top=o+"px",i.style.left=s+"px";var d=n-s-c;i.style.width=d>=0?c+"px":c+d+"px"}}e();var t=document.querySelector(".background");window.addEventListener("resize",(function(){(t=document.querySelector(".background"))&&(document.body.removeChild(t),(t=document.createElement("div")).className="background",document.body.append(t),e())}));var n=document.querySelector(".mob-menu"),o=document.querySelector(".mob-menu__button-open"),i=document.querySelector(".mob-menu__button-close"),c=function(){n.classList.toggle("is-mob-menu-open")};o.addEventListener("click",c),i.addEventListener("click",c),document.querySelectorAll('a[href^="#"').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector(".mob-menu");t.classList.contains("is-mob-menu-open")&&t.classList.toggle("is-mob-menu-open");var n=this.getAttribute("href").substring(1),o=document.getElementById(n).getBoundingClientRect().top-80;window.scrollBy({top:o,behavior:"smooth"})}))}));var s=document.querySelector(".stash-text"),d=document.querySelector(".stash-text-btn");d.addEventListener("click",(function(){s.classList.toggle("invisible"),d.classList.toggle("invisible")})),document.documentElement.clientWidth>=1280&&s.classList.contains("invisible")&&s.classList.toggle("invisible"),window.addEventListener("resize",(function(){document.documentElement.clientWidth>=1280&&s.classList.contains("invisible")&&s.classList.toggle("invisible"),document.documentElement.clientWidth<1280&&(s.classList.contains("invisible")||(s.classList.add("invisible"),d.classList.remove("invisible")))}))}();
//# sourceMappingURL=index.9ee2fb08.js.map
