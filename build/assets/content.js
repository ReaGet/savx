var r=Object.defineProperty;var u=(t,e,o)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var i=(t,e,o)=>u(t,typeof e!="symbol"?e+"":e,o);const h=t=>{const e=document.createElement("div");e.innerHTML=g(t||{});let o=!1;const s=e.firstElementChild,c={get size(){return s.offsetHeight},get isShown(){return o},get button(){return s},mount(d){return d.appendChild(this.button),c},show(d){setTimeout(()=>{this.button.classList.add("js-active");const{x:a=0,y:l=0}=d||{};this.button.style.left=`${a}px`,this.button.style.top=`${l}px`,o=!0},100)},hide(){setTimeout(()=>{this.button.classList.remove("js-active"),o=!1},100)}};return c},g=({size:t=18})=>`
  <button type="button" class="savx-btn" style="top: 0; left: 0;">
    <svg style="stroke: current;" width="${t}" height="${t}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.23696 12.24C5.27375 13.7612 7.02023 14.76 8.99999 14.76C12.1812 14.76 14.76 12.1812 14.76 8.99999C14.76 5.81883 12.1812 3.23999 8.99999 3.23999C5.81883 3.23999 3.23999 5.81883 3.23999 8.99999V9.71999M8.99999 5.75999V8.99999L11.16 11.16" stroke-width="1.5"/>
      <path d="M5.03994 7.92001L3.23994 9.72001L1.43994 7.92001" stroke-width="1.5"/>
    </svg>
  </button>
`;function v(t){const e=t==null?void 0:t.getBoundingClientRect();return{x:(e==null?void 0:e.left)||0+document.body.scrollLeft,y:(e==null?void 0:e.top)||0+document.body.scrollTop,width:(t==null?void 0:t.offsetWidth)||0,height:(t==null?void 0:t.offsetHeight)||0}}const p=t=>{if(!t)return!1;switch(t.tagName){case"INPUT":return f(t);case"TEXTAREA":return!0;default:return m(t)}},f=t=>["text"].includes(t.type),m=t=>["textbox"].includes((t==null?void 0:t.role)||"")||t.contentEditable==="true",y=()=>{const t=document.createElement("link");t.href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",t.rel="stylesheet",document.body.appendChild(t)},b=({name:t,content:e,title:o})=>`
  <div class="modal" data-modal-target="${t}">
    <div class="modal-overlay" data-modal-overlay="${t}" data-action="close">
      <div class="modal-inner">
        ${w(o)}
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
`,w=t=>t!=null&&t.trim()?`<div class="modal-title" data-modal-title>${t}</div>`:"";class E{constructor(e,o,s){i(this,"el",null);i(this,"name","");i(this,"content","");i(this,"title","");this.name=e,this.content=o,this.title=s,this.init()}init(){this.mount(),this.bindEvents()}mount(){const e=document.createElement("div");e.innerHTML=b({name:this.name,content:this.content,title:this.title}),this.el=e.firstElementChild,document.body.appendChild(this.el)}bindEvents(){let e=null;this.closeButton.addEventListener("click",()=>this.close()),document.addEventListener("mousedown",o=>{o.target===this.overlay&&this.close()}),document.addEventListener("mouseup",o=>{o.target===e&&e===o.currentTarget&&this.close()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&this.close()})}open(){var e;(e=this.el)==null||e.classList.add("js-active")}close(){var e;(e=this.el)==null||e.classList.remove("js-active")}setContent(e){console.log(e)}get closeButton(){var e;return(e=this.el)==null?void 0:e.querySelector("[data-modal-close]")}get overlay(){var e;return(e=this.el)==null?void 0:e.querySelector("[data-modal-overlay]")}}y();const L=new E("suggestions","asd","Suggestions");document.addEventListener("focusin",k);document.addEventListener("focusout",x);document.addEventListener("input",C);const n=h({size:18}).mount(document.body);n.button.addEventListener("click",()=>{L.open(),console.log("Button click")});function k(t){const e=t.target;if(console.log("focusIn",e),!p(e)||!e||e===n.button)return;const o=v(e),s=15;console.log(o),n.show({x:o.x+o.width-(n.size+s),y:o.y+(o.height-n.size)/2})}function x(){console.log("focusOut"),n.isShown&&n.hide()}function C(t){const e=t.target;e&&T(e,e.value)}const T=(t,e)=>{const o=M(t);localStorage.setItem(o,e)},M=t=>(t==null?void 0:t.name)||t.id||t.className;
