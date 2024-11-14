var a=Object.defineProperty;var u=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var r=(e,t,o)=>u(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const h=({name:e,content:t,title:o})=>`
  <div class="modal" data-modal-target="${e}">
    <div class="modal-overlay" data-modal-overlay="${e}" data-action="close">
      <div class="modal-inner">
        ${m(o)}
        <button data-modal-close="${e}" aria-label="close" class="modal-close-btn" type="button" data-action="close">
          <svg style="stroke: currentColor" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33398 3.33496L15.9993 16.0003M15.9993 16.0003L28.6647 28.6657M15.9993 16.0003L3.33398 28.6657M15.9993 16.0003L28.6647 3.33496" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div data-modal-content>
          ${t}
        </div>
      </div>
    </div>
  </div>
`,m=e=>e!=null&&e.trim()?`<div class="modal-title" data-modal-title>${e}</div>`:"";class p{constructor(t,o,i){r(this,"el",null);r(this,"name","");r(this,"content","");r(this,"title","");this.name=t,this.content=o,this.title=i,this.init()}init(){this.mount(),this.bindEvents()}mount(){const t=document.createElement("div");t.innerHTML=h({name:this.name,content:this.content,title:this.title}),this.el=t.firstElementChild,document.body.appendChild(this.el)}bindEvents(){let t=null;this.closeButton.addEventListener("click",()=>this.close()),document.addEventListener("mousedown",o=>{o.target===this.overlay&&this.close()}),document.addEventListener("mouseup",o=>{o.target===t&&t===o.currentTarget&&this.close()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&this.close()})}open(){var t;(t=this.el)==null||t.classList.add("js-active")}close(){var t;(t=this.el)==null||t.classList.remove("js-active")}setContent(t){console.log(t)}get closeButton(){var t;return(t=this.el)==null?void 0:t.querySelector("[data-modal-close]")}get overlay(){var t;return(t=this.el)==null?void 0:t.querySelector("[data-modal-overlay]")}}const f=e=>{const t=document.createElement("div");t.innerHTML=v(e||{});let o=!1;const i=t.firstElementChild,s={get size(){return i.offsetHeight},get isShown(){return o},get button(){return i},mount(n){return n.appendChild(this.button),s},show(n){setTimeout(()=>{this.button.classList.add("js-active");const{x:l=0,y:d=0}=n||{};this.button.style.left=`${l}px`,this.button.style.top=`${d}px`,o=!0},100)},hide(){setTimeout(()=>{this.button.classList.remove("js-active"),o=!1},100)}};return s},v=({size:e=18})=>`
  <button type="button" class="savx-btn" style="top: 0; left: 0;">
    <svg style="stroke: current;" width="${e}" height="${e}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.23696 12.24C5.27375 13.7612 7.02023 14.76 8.99999 14.76C12.1812 14.76 14.76 12.1812 14.76 8.99999C14.76 5.81883 12.1812 3.23999 8.99999 3.23999C5.81883 3.23999 3.23999 5.81883 3.23999 8.99999V9.71999M8.99999 5.75999V8.99999L11.16 11.16" stroke-width="1.5"/>
      <path d="M5.03994 7.92001L3.23994 9.72001L1.43994 7.92001" stroke-width="1.5"/>
    </svg>
  </button>
`,g=()=>{const e=document.createElement("link");e.href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",e.rel="stylesheet",document.body.appendChild(e)};g();const c=f({size:14}).mount(document.body);c.show();const y=new p("suggestions","asd","Suggestions");c.button.addEventListener("click",()=>{y.open(),console.log("Button click")});
