var u=Object.defineProperty;var l=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var i=(t,e,n)=>l(t,typeof e!="symbol"?e+"":e,n);const h=t=>{const e=document.createElement("div");e.innerHTML=f(t||{});let n=!1;const s=e.firstElementChild,c={get size(){return s.offsetHeight},get isShown(){return n},get button(){return s},mount(a){return a.appendChild(this.button),c},show(a){setTimeout(()=>{this.button.classList.add("js-active");const{x:r=0,y:d=0}=a||{};this.button.style.left=`${r}px`,this.button.style.top=`${d}px`,n=!0},100)},hide(){setTimeout(()=>{this.button.classList.remove("js-active"),n=!1},100)}};return c},f=({size:t=18})=>`
  <button type="button" class="savx-btn" style="top: 0; left: 0;">
    <svg style="stroke: current;" width="${t}" height="${t}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.23696 12.24C5.27375 13.7612 7.02023 14.76 8.99999 14.76C12.1812 14.76 14.76 12.1812 14.76 8.99999C14.76 5.81883 12.1812 3.23999 8.99999 3.23999C5.81883 3.23999 3.23999 5.81883 3.23999 8.99999V9.71999M8.99999 5.75999V8.99999L11.16 11.16" stroke-width="1.5"/>
      <path d="M5.03994 7.92001L3.23994 9.72001L1.43994 7.92001" stroke-width="1.5"/>
    </svg>
  </button>
`;function v(t){let e=0;for(;t;)isNaN(t.offsetLeft)||(e+=t.offsetLeft),t=t.offsetParent;return e}function g(t){let e=0;for(;t;)isNaN(t.offsetTop)||(e+=t.offsetTop),t=t.offsetParent;return e}function p(t){return{x:v(t),y:g(t),width:(t==null?void 0:t.offsetWidth)||0,height:(t==null?void 0:t.offsetHeight)||0}}const b=t=>{if(!t)return!1;switch(t.tagName){case"INPUT":return w(t);case"TEXTAREA":return!0;default:return y(t)}},w=t=>["text"].includes(t.type),y=t=>["textbox"].includes((t==null?void 0:t.role)||"")||t.contentEditable==="true",L=({name:t,content:e})=>`
  <div class="modal" data-modal-target="${t}">
    <div class="modal-overlay" data-modal-overlay="${t}" data-action="close">
      <div class="modal-inner">
        <button data-modal-close="${t}" aria-label="close" class="modal-close-btn" type="button" data-action="close">
          <svg style="stroke: currentColor" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33398 3.33496L15.9993 16.0003M15.9993 16.0003L28.6647 28.6657M15.9993 16.0003L3.33398 28.6657M15.9993 16.0003L28.6647 3.33496" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div data-modal-content>
          ${e}
        </div>
      </div>
    </div>
  </div>
`;class E{constructor(e,n){i(this,"el",null);i(this,"name","");i(this,"content","");this.name=e,this.content=n,this.init()}init(){this.mount(),this.bindEvents()}mount(){const e=document.createElement("div");e.innerHTML=L({name:this.name,content:this.content}),this.el=e.firstElementChild,document.body.appendChild(this.el)}bindEvents(){this.closeButton.addEventListener("click",()=>this.close()),this.overlay.addEventListener("click",e=>{e.target.closest(".modal-inner")||this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.close()})}open(){var e;(e=this.el)==null||e.classList.add("js-active")}close(){var e;(e=this.el)==null||e.classList.remove("js-active")}get closeButton(){var e;return(e=this.el)==null?void 0:e.querySelector("[data-modal-close]")}get overlay(){var e;return(e=this.el)==null?void 0:e.querySelector("[data-modal-overlay]")}}const m=new E("suggestions","asd");document.addEventListener("focusin",x);document.addEventListener("focusout",k);document.addEventListener("input",T);const o=h({size:18}).mount(document.body);o.button.addEventListener("click",()=>{m.open(),console.log("Button click")});function x(t){console.log("focusIn");const e=t.target;if(!b(e)||!e||e===o.button)return;const n=p(e),s=15;console.log(n),o.show({x:n.x+n.width-(o.size+s),y:n.y+(n.height-o.size)/2})}function k(){console.log("focusOut"),o.isShown&&o.hide()}function T(t){const e=t.target;e&&M(e,e.value)}const M=(t,e)=>{const n=C(t);localStorage.setItem(n,e)},C=t=>(t==null?void 0:t.name)||t.id||t.className;
