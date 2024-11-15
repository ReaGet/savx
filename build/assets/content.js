var u=Object.defineProperty;var m=(t,e,o)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var s=(t,e,o)=>m(t,typeof e!="symbol"?e+"":e,o);const p=t=>{const e=document.createElement("div");e.innerHTML=h(t||{});let o=!1;const i=e.firstElementChild,l={get size(){return i.offsetHeight},get isShown(){return o},get button(){return i},mount(a){return a.appendChild(this.button),l},show(a){setTimeout(()=>{this.button.classList.add("js-active");const{x:d=0,y:c=0}=a||{};this.button.style.left=`${d}px`,this.button.style.top=`${c}px`,o=!0},100)},hide(){setTimeout(()=>{this.button.classList.remove("js-active"),o=!1},100)}};return l},h=({size:t=18})=>`
  <button type="button" class="savx-btn" style="top: 0; left: 0;">
    <svg style="stroke: current;" width="${t}" height="${t}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.23696 12.24C5.27375 13.7612 7.02023 14.76 8.99999 14.76C12.1812 14.76 14.76 12.1812 14.76 8.99999C14.76 5.81883 12.1812 3.23999 8.99999 3.23999C5.81883 3.23999 3.23999 5.81883 3.23999 8.99999V9.71999M8.99999 5.75999V8.99999L11.16 11.16" stroke-width="1.5"/>
      <path d="M5.03994 7.92001L3.23994 9.72001L1.43994 7.92001" stroke-width="1.5"/>
    </svg>
  </button>
`;function g(t){const e=t==null?void 0:t.getBoundingClientRect();return{x:(e==null?void 0:e.left)||0+document.body.scrollLeft,y:(e==null?void 0:e.top)||0+document.body.scrollTop,width:(t==null?void 0:t.offsetWidth)||0,height:(t==null?void 0:t.offsetHeight)||0}}const f=t=>{if(!t)return!1;switch(t.tagName){case"INPUT":return v(t);case"TEXTAREA":return!0;default:return y(t)}},v=t=>["text"].includes(t.type),y=t=>["textbox"].includes((t==null?void 0:t.role)||"")||t.contentEditable==="true",w=()=>{const t=document.createElement("link");t.href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",t.rel="stylesheet",document.body.appendChild(t)},x=t=>new Intl.DateTimeFormat("ru-RU",{dateStyle:"short",timeStyle:"medium"}).format(new Date(t)),b=({name:t,content:e,title:o})=>`
  <div class="modal" data-modal-target="${t}">
    <div class="modal-overlay" data-modal-overlay="${t}" data-action="close">
      <div class="modal-inner">
        ${C(o)}
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
`,C=t=>t!=null&&t.trim()?`<div class="modal-title" data-modal-title>${t}</div>`:"";class k{constructor(e,o){s(this,"el",null);s(this,"name","");s(this,"content","");s(this,"title","");this.name=e,this.title=o,this.init()}init(){this.mount(),this.bindEvents()}mount(){const e=document.createElement("div");e.innerHTML=b({name:this.name,content:this.content,title:this.title}),this.el=e.firstElementChild,document.body.appendChild(this.el)}bindEvents(){let e=null;this.closeButton.addEventListener("click",()=>this.close()),document.addEventListener("mousedown",o=>{o.target===this.overlay&&this.close()}),document.addEventListener("mouseup",o=>{o.target===e&&e===o.currentTarget&&this.close()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&this.close()})}open(){var e;(e=this.el)==null||e.classList.add("js-active")}close(){var e;(e=this.el)==null||e.classList.remove("js-active")}setContent(e){var i;const o=(i=this.el)==null?void 0:i.querySelector("[data-modal-content]");o&&(o.innerHTML=e)}get closeButton(){var e;return(e=this.el)==null?void 0:e.querySelector("[data-modal-close]")}get overlay(){var e;return(e=this.el)==null?void 0:e.querySelector("[data-modal-overlay]")}}const E=t=>`
  <div class="pr-[5px]">
    <ul class="flex flex-col w-full gap-4 -mr-[5px]">
      ${t.map(L).join(`
`)}
    </ul>  
  </div>
`,L=t=>`
  <li class="flex w-full">
    <div class="flex-1">
      <div class="text-[16px] text-[#212121] leading-[19px] line-clamp-2">${t.text}</div>
      <div class="text-[14px] text-[#B8B8B8]">${x(t.timestamp)}</div>
    </div>
    <button class="flex items-center justify-center shrink-0 w-[32px] h-[32px] cursor-pointer rounded-[5px] hover:bg-[#f0f0f0] transition-all" data-action="savx-copy">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 5.33331C14.0001 4.22875 13.1047 3.33331 12.0001 3.33331H6.66675C5.56218 3.33331 4.66675 4.22875 4.66675 5.33331V13.3333C4.66675 14.4379 5.56218 15.3333 6.66675 15.3333H12.0001C13.1047 15.3333 14.0001 14.4379 14.0001 13.3333V5.33331ZM12.6667 5.33331C12.6667 4.96513 12.3683 4.66665 12.0001 4.66665H6.66675C6.29856 4.66665 6.00008 4.96513 6.00008 5.33331V13.3333C6.00008 13.7015 6.29856 14 6.66675 14H12.0001C12.3683 14 12.6667 13.7015 12.6667 13.3333V5.33331Z" fill="#8B8A8A"/>
        <path d="M4 2.00002H10.6667C11.0349 2.00002 11.3333 1.70154 11.3333 1.33335C11.3333 0.965167 11.0349 0.666687 10.6667 0.666687H4C2.89543 0.666687 2 1.56212 2 2.66669V12C2 12.3682 2.29848 12.6667 2.66667 12.6667C3.03485 12.6667 3.33333 12.3682 3.33333 12V2.66669C3.33333 2.2985 3.63181 2.00002 4 2.00002Z" fill="#8B8A8A"/>
      </svg>
    </button>
  </li>  
`,S=[{id:"123",text:"Intl.DateTimeFormat is a powerful tool for formatting dates and times in JavaScript applications. It allows you to create user-friendly and localized date displays while customizing the format to meet your specific needs. Whether you're building a simple date picker or a complex scheduling application, mastering Intl.DateTimeFormat will help you provide a better user experience and make your code more maintainable.",timestamp:new Date().toString()},{id:"123",text:"make your code more maintainable.",timestamp:new Date().toString()},{id:"123",text:"make your code more maintainable.",timestamp:new Date().toString()},{id:"123",text:"make your code more maintainable.",timestamp:new Date().toString()},{id:"123",text:"make your code more maintainable.",timestamp:new Date().toString()},{id:"123",text:"Intl.DateTimeFormat is a powerful tool for formatting dates and times in JavaScript applications. It allows you to create user-friendly and localized date displays while customizing the format to meet your specific needs. Whether you're building a simple date picker or a complex scheduling application, mastering Intl.DateTimeFormat will help you provide a better user experience and make your code more maintainable.",timestamp:new Date().toString()},{id:"123",text:"make your code more maintainable.",timestamp:new Date().toString()}],T=()=>`
  <div class="min-w-[500px] max-w-[500px]">
    ${E(S)}
  </div>
`;w();const r=new k("suggestions","Suggestions");document.addEventListener("focusin",I);document.addEventListener("focusout",B);document.addEventListener("input",D);const n=p({size:18}).mount(document.body);n.button.addEventListener("click",()=>{r.setContent(T()),r.open(),console.log("Button click")});function I(t){const e=t.target;if(console.log("focusIn",e),!f(e)||!e||e===n.button)return;const o=g(e);n.show({x:o.x+o.width-(n.size+15),y:o.y+(o.height-n.size)/2})}function B(){console.log("focusOut"),n.isShown&&n.hide()}function D(t){const e=t.target;e&&M(e,e.value)}const M=(t,e)=>{const o=$(t);localStorage.setItem(o,e)},$=t=>(t==null?void 0:t.name)||t.id||t.className;
