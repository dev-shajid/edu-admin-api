import{r as v,R as F,u as Re,p as Ie,o as ft,d as tr,q as rr,a as Z,B as nr}from"./index-86bc1542.js";import{a as ae,T as or,g as ir}from"./Transition-77243987.js";import{r as ar,a as sr,u as lr,b as cr}from"./use-uncontrolled-fc6128b1.js";import{c as fr}from"./Basic-c25be6a5.js";function ur(e){const t=v.createContext(null);return[({children:o,value:i})=>F.createElement(t.Provider,{value:i},o),()=>{const o=v.useContext(t);if(o===null)throw new Error(e);return o}]}const dr=()=>{};function pr(e,t={active:!0}){return typeof e!="function"||!t.active?t.onKeyDown||dr:r=>{var n;r.key==="Escape"&&(e(r),(n=t.onTrigger)==null||n.call(t))}}function ut(e){return Array.isArray(e)||e===null?!1:typeof e=="object"?e.type!==F.Fragment:!1}const We=["mousedown","touchstart"];function mr(e,t,r){const n=v.useRef();return v.useEffect(()=>{const o=i=>{const{target:s}=i??{};if(Array.isArray(r)){const l=(s==null?void 0:s.hasAttribute("data-ignore-outside-clicks"))||!document.body.contains(s)&&s.tagName!=="HTML";r.every(c=>!!c&&!i.composedPath().includes(c))&&!l&&e()}else n.current&&!n.current.contains(s)&&e()};return(t||We).forEach(i=>document.addEventListener(i,o)),()=>{(t||We).forEach(i=>document.removeEventListener(i,o))}},[n,e,r]),n}function gr({opened:e,shouldReturnFocus:t=!0}){const r=v.useRef(),n=()=>{var o;r.current&&"focus"in r.current&&typeof r.current.focus=="function"&&((o=r.current)==null||o.focus({preventScroll:!0}))};return ae(()=>{let o=-1;const i=s=>{s.key==="Tab"&&window.clearTimeout(o)};return document.addEventListener("keydown",i),e?r.current=document.activeElement:t&&(o=window.setTimeout(n,10)),()=>{window.clearTimeout(o),document.removeEventListener("keydown",i)}},[e,t]),n}const hr=/input|select|textarea|button|object/,dt="a, input, select, textarea, button, object, [tabindex]";function yr(e){return e.style.display==="none"}function wr(e){if(e.getAttribute("aria-hidden")||e.getAttribute("hidden")||e.getAttribute("type")==="hidden")return!1;let r=e;for(;r&&!(r===document.body||r.nodeType===11);){if(yr(r))return!1;r=r.parentNode}return!0}function pt(e){let t=e.getAttribute("tabindex");return t===null&&(t=void 0),parseInt(t,10)}function De(e){const t=e.nodeName.toLowerCase(),r=!Number.isNaN(pt(e));return(hr.test(t)&&!e.disabled||e instanceof HTMLAnchorElement&&e.href||r)&&wr(e)}function mt(e){const t=pt(e);return(Number.isNaN(t)||t>=0)&&De(e)}function vr(e){return Array.from(e.querySelectorAll(dt)).filter(mt)}function br(e,t){const r=vr(e);if(!r.length){t.preventDefault();return}const n=r[t.shiftKey?0:r.length-1],o=e.getRootNode();if(!(n===o.activeElement||e===o.activeElement))return;t.preventDefault();const s=r[t.shiftKey?r.length-1:0];s&&s.focus()}function xr(e,t="body > :not(script)"){const r=ar(),n=Array.from(document.querySelectorAll(t)).map(o=>{var i;if((i=o==null?void 0:o.shadowRoot)!=null&&i.contains(e)||o.contains(e))return;const s=o.getAttribute("aria-hidden"),l=o.getAttribute("data-hidden"),a=o.getAttribute("data-focus-id");return o.setAttribute("data-focus-id",r),s===null||s==="false"?o.setAttribute("aria-hidden","true"):!l&&!a&&o.setAttribute("data-hidden",s),{node:o,ariaHidden:l||null}});return()=>{n.forEach(o=>{!o||r!==o.node.getAttribute("data-focus-id")||(o.ariaHidden===null?o.node.removeAttribute("aria-hidden"):o.node.setAttribute("aria-hidden",o.ariaHidden),o.node.removeAttribute("data-focus-id"),o.node.removeAttribute("data-hidden"))})}}function Pr(e=!0){const t=v.useRef(),r=v.useRef(null),n=i=>{let s=i.querySelector("[data-autofocus]");if(!s){const l=Array.from(i.querySelectorAll(dt));s=l.find(mt)||l.find(De)||null,!s&&De(i)&&(s=i)}s&&s.focus({preventScroll:!0})},o=v.useCallback(i=>{if(e){if(i===null){r.current&&(r.current(),r.current=null);return}r.current=xr(i),t.current!==i&&(i?(setTimeout(()=>{i.getRootNode()&&n(i)}),t.current=i):t.current=null)}},[e]);return v.useEffect(()=>{if(!e)return;t.current&&setTimeout(()=>n(t.current));const i=s=>{s.key==="Tab"&&t.current&&br(t.current,s)};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i),r.current&&r.current()}},[e]),o}function _r(e,t){typeof e=="function"?e(t):typeof e=="object"&&e!==null&&"current"in e&&(e.current=t)}function Or(...e){return t=>{e.forEach(r=>_r(r,t))}}function gt(...e){return v.useCallback(Or(...e),e)}var Rr=Object.defineProperty,Er=Object.defineProperties,$r=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,ht=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,qe=(e,t,r)=>t in e?Rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Tr=(e,t)=>{for(var r in t||(t={}))ht.call(t,r)&&qe(e,r,t[r]);if(he)for(var r of he(t))yt.call(t,r)&&qe(e,r,t[r]);return e},Cr=(e,t)=>Er(e,$r(t)),Sr=(e,t)=>{var r={};for(var n in e)ht.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&he)for(var n of he(e))t.indexOf(n)<0&&yt.call(e,n)&&(r[n]=e[n]);return r};function wt(e){const t=Re("Portal",{},e),{children:r,target:n,className:o,innerRef:i}=t,s=Sr(t,["children","target","className","innerRef"]),l=Ie(),[a,c]=v.useState(!1),p=v.useRef();return sr(()=>(c(!0),p.current=n?typeof n=="string"?document.querySelector(n):n:document.createElement("div"),n||document.body.appendChild(p.current),()=>{!n&&document.body.removeChild(p.current)}),[n]),a?ft.createPortal(F.createElement("div",Cr(Tr({className:o,dir:l.dir},s),{ref:i}),r),p.current):null}wt.displayName="@mantine/core/Portal";var Ar=Object.defineProperty,ye=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,Ke=(e,t,r)=>t in e?Ar(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Dr=(e,t)=>{for(var r in t||(t={}))vt.call(t,r)&&Ke(e,r,t[r]);if(ye)for(var r of ye(t))bt.call(t,r)&&Ke(e,r,t[r]);return e},Nr=(e,t)=>{var r={};for(var n in e)vt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ye)for(var n of ye(e))t.indexOf(n)<0&&bt.call(e,n)&&(r[n]=e[n]);return r};function xt(e){var t=e,{withinPortal:r=!0,children:n}=t,o=Nr(t,["withinPortal","children"]);return r?F.createElement(wt,Dr({},o),n):F.createElement(F.Fragment,null,n)}xt.displayName="@mantine/core/OptionalPortal";function oe(e){return e.split("-")[1]}function ke(e){return e==="y"?"height":"width"}function k(e){return e.split("-")[0]}function Y(e){return["top","bottom"].includes(k(e))?"x":"y"}function Ue(e,t,r){let{reference:n,floating:o}=e;const i=n.x+n.width/2-o.width/2,s=n.y+n.height/2-o.height/2,l=Y(t),a=ke(l),c=n[a]/2-o[a]/2,p=l==="x";let f;switch(k(t)){case"top":f={x:i,y:n.y-o.height};break;case"bottom":f={x:i,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:s};break;case"left":f={x:n.x-o.width,y:s};break;default:f={x:n.x,y:n.y}}switch(oe(t)){case"start":f[l]-=c*(r&&p?-1:1);break;case"end":f[l]+=c*(r&&p?-1:1)}return f}const Lr=async(e,t,r)=>{const{placement:n="bottom",strategy:o="absolute",middleware:i=[],platform:s}=r,l=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:f}=Ue(c,n,a),m=n,d={},g=0;for(let u=0;u<l.length;u++){const{name:h,fn:y}=l[u],{x:w,y:b,data:P,reset:x}=await y({x:p,y:f,initialPlacement:n,placement:m,strategy:o,middlewareData:d,rects:c,platform:s,elements:{reference:e,floating:t}});p=w??p,f=b??f,d={...d,[h]:{...d[h],...P}},x&&g<=50&&(g++,typeof x=="object"&&(x.placement&&(m=x.placement),x.rects&&(c=x.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:p,y:f}=Ue(c,m,a)),u=-1)}return{x:p,y:f,placement:m,strategy:o,middlewareData:d}};function q(e,t){return typeof e=="function"?e(t):e}function je(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function re(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function Me(e,t){var r;t===void 0&&(t={});const{x:n,y:o,platform:i,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:f="floating",altBoundary:m=!1,padding:d=0}=q(t,e),g=je(d),u=l[m?f==="floating"?"reference":"floating":f],h=re(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(u)))==null||r?u:u.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:p,strategy:a})),y=f==="floating"?{...s.floating,x:n,y:o}:s.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),b=await(i.isElement==null?void 0:i.isElement(w))&&await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1},P=re(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:a}):y);return{top:(h.top-P.top+g.top)/b.y,bottom:(P.bottom-h.bottom+g.bottom)/b.y,left:(h.left-P.left+g.left)/b.x,right:(P.right-h.right+g.right)/b.x}}const U=Math.min,B=Math.max;function Ne(e,t,r){return B(e,U(t,r))}const Xe=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:o,rects:i,platform:s,elements:l}=t,{element:a,padding:c=0}=q(e,t)||{};if(a==null)return{};const p=je(c),f={x:r,y:n},m=Y(o),d=ke(m),g=await s.getDimensions(a),u=m==="y",h=u?"top":"left",y=u?"bottom":"right",w=u?"clientHeight":"clientWidth",b=i.reference[d]+i.reference[m]-f[m]-i.floating[d],P=f[m]-i.reference[m],x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let _=x?x[w]:0;_&&await(s.isElement==null?void 0:s.isElement(x))||(_=l.floating[w]||i.floating[d]);const E=b/2-P/2,$=_/2-g[d]/2-1,C=U(p[h],$),O=U(p[y],$),R=C,T=_-g[d]-O,S=_/2-g[d]/2+E,D=Ne(R,S,T),N=oe(o)!=null&&S!=D&&i.reference[d]/2-(S<R?C:O)-g[d]/2<0?S<R?R-S:T-S:0;return{[m]:f[m]-N,data:{[m]:D,centerOffset:S-D+N}}}}),Fr=["top","right","bottom","left"];Fr.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const Ir={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,t=>Ir[t])}function kr(e,t,r){r===void 0&&(r=!1);const n=oe(e),o=Y(e),i=ke(o);let s=o==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=we(s)),{main:s,cross:we(s)}}const jr={start:"end",end:"start"};function Ae(e){return e.replace(/start|end/g,t=>jr[t])}const Mr=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:n,middlewareData:o,rects:i,initialPlacement:s,platform:l,elements:a}=t,{mainAxis:c=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:g=!0,...u}=q(e,t),h=k(n),y=k(s)===s,w=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=f||(y||!g?[we(s)]:function(R){const T=we(R);return[Ae(R),T,Ae(T)]}(s));f||d==="none"||b.push(...function(R,T,S,D){const N=oe(R);let A=function(H,V,Te){const le=["left","right"],ce=["right","left"],Ce=["top","bottom"],Se=["bottom","top"];switch(H){case"top":case"bottom":return Te?V?ce:le:V?le:ce;case"left":case"right":return V?Ce:Se;default:return[]}}(k(R),S==="start",D);return N&&(A=A.map(H=>H+"-"+N),T&&(A=A.concat(A.map(Ae)))),A}(s,g,d,w));const P=[s,...b],x=await Me(t,u),_=[];let E=((r=o.flip)==null?void 0:r.overflows)||[];if(c&&_.push(x[h]),p){const{main:R,cross:T}=kr(n,i,w);_.push(x[R],x[T])}if(E=[...E,{placement:n,overflows:_}],!_.every(R=>R<=0)){var $,C;const R=((($=o.flip)==null?void 0:$.index)||0)+1,T=P[R];if(T)return{data:{index:R,overflows:E},reset:{placement:T}};let S=(C=E.filter(D=>D.overflows[0]<=0).sort((D,N)=>D.overflows[1]-N.overflows[1])[0])==null?void 0:C.placement;if(!S)switch(m){case"bestFit":{var O;const D=(O=E.map(N=>[N.placement,N.overflows.filter(A=>A>0).reduce((A,H)=>A+H,0)]).sort((N,A)=>N[1]-A[1])[0])==null?void 0:O[0];D&&(S=D);break}case"initialPlacement":S=s}if(n!==S)return{reset:{placement:S}}}return{}}}};function Ye(e){const t=U(...e.map(n=>n.left)),r=U(...e.map(n=>n.top));return{x:t,y:r,width:B(...e.map(n=>n.right))-t,height:B(...e.map(n=>n.bottom))-r}}const Br=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:r,elements:n,rects:o,platform:i,strategy:s}=t,{padding:l=2,x:a,y:c}=q(e,t),p=Array.from(await(i.getClientRects==null?void 0:i.getClientRects(n.reference))||[]),f=function(u){const h=u.slice().sort((b,P)=>b.y-P.y),y=[];let w=null;for(let b=0;b<h.length;b++){const P=h[b];!w||P.y-w.y>w.height/2?y.push([P]):y[y.length-1].push(P),w=P}return y.map(b=>re(Ye(b)))}(p),m=re(Ye(p)),d=je(l),g=await i.getElementRects({reference:{getBoundingClientRect:function(){if(f.length===2&&f[0].left>f[1].right&&a!=null&&c!=null)return f.find(u=>a>u.left-d.left&&a<u.right+d.right&&c>u.top-d.top&&c<u.bottom+d.bottom)||m;if(f.length>=2){if(Y(r)==="x"){const x=f[0],_=f[f.length-1],E=k(r)==="top",$=x.top,C=_.bottom,O=E?x.left:_.left,R=E?x.right:_.right;return{top:$,bottom:C,left:O,right:R,width:R-O,height:C-$,x:O,y:$}}const u=k(r)==="left",h=B(...f.map(x=>x.right)),y=U(...f.map(x=>x.left)),w=f.filter(x=>u?x.left===y:x.right===h),b=w[0].top,P=w[w.length-1].bottom;return{top:b,bottom:P,left:y,right:h,width:h-y,height:P-b,x:y,y:b}}return m}},floating:n.floating,strategy:s});return o.reference.x!==g.reference.x||o.reference.y!==g.reference.y||o.reference.width!==g.reference.width||o.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}},Hr=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:n}=t,o=await async function(i,s){const{placement:l,platform:a,elements:c}=i,p=await(a.isRTL==null?void 0:a.isRTL(c.floating)),f=k(l),m=oe(l),d=Y(l)==="x",g=["left","top"].includes(f)?-1:1,u=p&&d?-1:1,h=q(s,i);let{mainAxis:y,crossAxis:w,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return m&&typeof b=="number"&&(w=m==="end"?-1*b:b),d?{x:w*u,y:y*g}:{x:y*g,y:w*u}}(t,e);return{x:r+o.x,y:n+o.y,data:o}}}};function Pt(e){return e==="x"?"y":"x"}const Vr=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:h=>{let{x:y,y:w}=h;return{x:y,y:w}}},...a}=q(e,t),c={x:r,y:n},p=await Me(t,a),f=Y(k(o)),m=Pt(f);let d=c[f],g=c[m];if(i){const h=f==="y"?"bottom":"right";d=Ne(d+p[f==="y"?"top":"left"],d,d-p[h])}if(s){const h=m==="y"?"bottom":"right";g=Ne(g+p[m==="y"?"top":"left"],g,g-p[h])}const u=l.fn({...t,[f]:d,[m]:g});return{...u,data:{x:u.x-r,y:u.y-n}}}}},zr=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:r,y:n,placement:o,rects:i,middlewareData:s}=t,{offset:l=0,mainAxis:a=!0,crossAxis:c=!0}=q(e,t),p={x:r,y:n},f=Y(o),m=Pt(f);let d=p[f],g=p[m];const u=q(l,t),h=typeof u=="number"?{mainAxis:u,crossAxis:0}:{mainAxis:0,crossAxis:0,...u};if(a){const b=f==="y"?"height":"width",P=i.reference[f]-i.floating[b]+h.mainAxis,x=i.reference[f]+i.reference[b]-h.mainAxis;d<P?d=P:d>x&&(d=x)}if(c){var y,w;const b=f==="y"?"width":"height",P=["top","left"].includes(k(o)),x=i.reference[m]-i.floating[b]+(P&&((y=s.offset)==null?void 0:y[m])||0)+(P?0:h.crossAxis),_=i.reference[m]+i.reference[b]+(P?0:((w=s.offset)==null?void 0:w[m])||0)-(P?h.crossAxis:0);g<x?g=x:g>_&&(g=_)}return{[f]:d,[m]:g}}}},Wr=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:o,elements:i}=t,{apply:s=()=>{},...l}=q(e,t),a=await Me(t,l),c=k(r),p=oe(r),f=Y(r)==="x",{width:m,height:d}=n.floating;let g,u;c==="top"||c==="bottom"?(g=c,u=p===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(u=c,g=p==="end"?"top":"bottom");const h=d-a[g],y=m-a[u],w=!t.middlewareData.shift;let b=h,P=y;if(f){const _=m-a.left-a.right;P=p||w?U(y,_):_}else{const _=d-a.top-a.bottom;b=p||w?U(h,_):_}if(w&&!p){const _=B(a.left,0),E=B(a.right,0),$=B(a.top,0),C=B(a.bottom,0);f?P=m-2*(_!==0||E!==0?_+E:B(a.left,a.right)):b=d-2*($!==0||C!==0?$+C:B(a.top,a.bottom))}await s({...t,availableWidth:P,availableHeight:b});const x=await o.getDimensions(i.floating);return m!==x.width||d!==x.height?{reset:{rects:!0}}:{}}}};function I(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function j(e){return I(e).getComputedStyle(e)}function _t(e){return e instanceof I(e).Node}function X(e){return _t(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){return e instanceof I(e).HTMLElement}function z(e){return e instanceof I(e).Element}function Ze(e){return typeof ShadowRoot<"u"&&(e instanceof I(e).ShadowRoot||e instanceof ShadowRoot)}function se(e){const{overflow:t,overflowX:r,overflowY:n,display:o}=j(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(o)}function qr(e){return["table","td","th"].includes(X(e))}function Le(e){const t=Be(),r=j(e);return r.transform!=="none"||r.perspective!=="none"||!t&&!!r.backdropFilter&&r.backdropFilter!=="none"||!t&&!!r.filter&&r.filter!=="none"||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Be(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ee(e){return["html","body","#document"].includes(X(e))}const Fe=Math.min,ee=Math.max,ve=Math.round,fe=Math.floor,G=e=>({x:e,y:e});function Ot(e){const t=j(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=M(e),i=o?e.offsetWidth:r,s=o?e.offsetHeight:n,l=ve(r)!==i||ve(n)!==s;return l&&(r=i,n=s),{width:r,height:n,$:l}}function He(e){return z(e)?e:e.contextElement}function te(e){const t=He(e);if(!M(t))return G(1);const r=t.getBoundingClientRect(),{width:n,height:o,$:i}=Ot(t);let s=(i?ve(r.width):r.width)/n,l=(i?ve(r.height):r.height)/o;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}const Ge=G(0);function Rt(e,t,r){var n,o;if(t===void 0&&(t=!0),!Be())return Ge;const i=e?I(e):window;return!r||t&&r!==i?Ge:{x:((n=i.visualViewport)==null?void 0:n.offsetLeft)||0,y:((o=i.visualViewport)==null?void 0:o.offsetTop)||0}}function J(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const o=e.getBoundingClientRect(),i=He(e);let s=G(1);t&&(n?z(n)&&(s=te(n)):s=te(e));const l=Rt(i,r,n);let a=(o.left+l.x)/s.x,c=(o.top+l.y)/s.y,p=o.width/s.x,f=o.height/s.y;if(i){const m=I(i),d=n&&z(n)?I(n):n;let g=m.frameElement;for(;g&&n&&d!==m;){const u=te(g),h=g.getBoundingClientRect(),y=getComputedStyle(g),w=h.left+(g.clientLeft+parseFloat(y.paddingLeft))*u.x,b=h.top+(g.clientTop+parseFloat(y.paddingTop))*u.y;a*=u.x,c*=u.y,p*=u.x,f*=u.y,a+=w,c+=b,g=I(g).frameElement}}return re({width:p,height:f,x:a,y:c})}function W(e){return((_t(e)?e.ownerDocument:e.document)||window.document).documentElement}function $e(e){return z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Et(e){return J(W(e)).left+$e(e).scrollLeft}function ne(e){if(X(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ze(e)&&e.host||W(e);return Ze(t)?t.host:t}function $t(e){const t=ne(e);return Ee(t)?e.ownerDocument?e.ownerDocument.body:e.body:M(t)&&se(t)?t:$t(t)}function be(e,t){var r;t===void 0&&(t=[]);const n=$t(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=I(n);return o?t.concat(i,i.visualViewport||[],se(n)?n:[]):t.concat(n,be(n))}function Je(e,t,r){let n;if(t==="viewport")n=function(o,i){const s=I(o),l=W(o),a=s.visualViewport;let c=l.clientWidth,p=l.clientHeight,f=0,m=0;if(a){c=a.width,p=a.height;const d=Be();(!d||d&&i==="fixed")&&(f=a.offsetLeft,m=a.offsetTop)}return{width:c,height:p,x:f,y:m}}(e,r);else if(t==="document")n=function(o){const i=W(o),s=$e(o),l=o.ownerDocument.body,a=ee(i.scrollWidth,i.clientWidth,l.scrollWidth,l.clientWidth),c=ee(i.scrollHeight,i.clientHeight,l.scrollHeight,l.clientHeight);let p=-s.scrollLeft+Et(o);const f=-s.scrollTop;return j(l).direction==="rtl"&&(p+=ee(i.clientWidth,l.clientWidth)-a),{width:a,height:c,x:p,y:f}}(W(e));else if(z(t))n=function(o,i){const s=J(o,!0,i==="fixed"),l=s.top+o.clientTop,a=s.left+o.clientLeft,c=M(o)?te(o):G(1);return{width:o.clientWidth*c.x,height:o.clientHeight*c.y,x:a*c.x,y:l*c.y}}(t,r);else{const o=Rt(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return re(n)}function Tt(e,t){const r=ne(e);return!(r===t||!z(r)||Ee(r))&&(j(r).position==="fixed"||Tt(r,t))}function Qe(e,t){return M(e)&&j(e).position!=="fixed"?t?t(e):e.offsetParent:null}function et(e,t){const r=I(e);if(!M(e))return r;let n=Qe(e,t);for(;n&&qr(n)&&j(n).position==="static";)n=Qe(n,t);return n&&(X(n)==="html"||X(n)==="body"&&j(n).position==="static"&&!Le(n))?r:n||function(o){let i=ne(o);for(;M(i)&&!Ee(i);){if(Le(i))return i;i=ne(i)}return null}(e)||r}function Kr(e,t,r){const n=M(t),o=W(t),i=r==="fixed",s=J(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const a=G(0);if(n||!n&&!i)if((X(t)!=="body"||se(o))&&(l=$e(t)),M(t)){const c=J(t,!0,i,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else o&&(a.x=Et(o));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}const Ur={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:n,strategy:o}=e;const i=r==="clippingAncestors"?function(c,p){const f=p.get(c);if(f)return f;let m=be(c).filter(h=>z(h)&&X(h)!=="body"),d=null;const g=j(c).position==="fixed";let u=g?ne(c):c;for(;z(u)&&!Ee(u);){const h=j(u),y=Le(u);y||h.position!=="fixed"||(d=null),(g?!y&&!d:!y&&h.position==="static"&&d&&["absolute","fixed"].includes(d.position)||se(u)&&!y&&Tt(c,u))?m=m.filter(w=>w!==u):d=h,u=ne(u)}return p.set(c,m),m}(t,this._c):[].concat(r),s=[...i,n],l=s[0],a=s.reduce((c,p)=>{const f=Je(t,p,o);return c.top=ee(f.top,c.top),c.right=Fe(f.right,c.right),c.bottom=Fe(f.bottom,c.bottom),c.left=ee(f.left,c.left),c},Je(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:n}=e;const o=M(r),i=W(r);if(r===i)return t;let s={scrollLeft:0,scrollTop:0},l=G(1);const a=G(0);if((o||!o&&n!=="fixed")&&((X(r)!=="body"||se(i))&&(s=$e(r)),M(r))){const c=J(r);l=te(r),a.x=c.x+r.clientLeft,a.y=c.y+r.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-s.scrollLeft*l.x+a.x,y:t.y*l.y-s.scrollTop*l.y+a.y}},isElement:z,getDimensions:function(e){return Ot(e)},getOffsetParent:et,getDocumentElement:W,getScale:te,async getElementRects(e){let{reference:t,floating:r,strategy:n}=e;const o=this.getOffsetParent||et,i=this.getDimensions;return{reference:Kr(t,await o(r),n),floating:{x:0,y:0,...await i(r)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>j(e).direction==="rtl"};function Xr(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=!0,layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,c=He(e),p=o||i?[...c?be(c):[],...be(t)]:[];p.forEach(u=>{o&&u.addEventListener("scroll",r,{passive:!0}),i&&u.addEventListener("resize",r)});const f=c&&l?function(u,h){let y,w=null;const b=W(u);function P(){clearTimeout(y),w&&w.disconnect(),w=null}return function x(_,E){_===void 0&&(_=!1),E===void 0&&(E=1),P();const{left:$,top:C,width:O,height:R}=u.getBoundingClientRect();if(_||h(),!O||!R)return;const T=fe(C),S=fe(b.clientWidth-($+O)),D=fe(b.clientHeight-(C+R)),N=fe($);let A=!0;w=new IntersectionObserver(H=>{const V=H[0].intersectionRatio;if(V!==E){if(!A)return x();V?x(!1,V):y=setTimeout(()=>{x(!1,1e-7)},100)}A=!1},{rootMargin:-T+"px "+-S+"px "+-D+"px "+-N+"px",threshold:ee(0,Fe(1,E))||1}),w.observe(u)}(!0),P}(c,r):null;let m,d=null;s&&(d=new ResizeObserver(r),c&&!a&&d.observe(c),d.observe(t));let g=a?J(e):null;return a&&function u(){const h=J(e);!g||h.x===g.x&&h.y===g.y&&h.width===g.width&&h.height===g.height||r(),g=h,m=requestAnimationFrame(u)}(),r(),()=>{p.forEach(u=>{o&&u.removeEventListener("scroll",r),i&&u.removeEventListener("resize",r)}),f&&f(),d&&d.disconnect(),d=null,a&&cancelAnimationFrame(m)}}const Yr=(e,t,r)=>{const n=new Map,o={platform:Ur,...r},i={...o.platform,_c:n};return Lr(e,t,{...o,platform:i})},Zr=e=>{const{element:t,padding:r}=e;function n(o){return Object.prototype.hasOwnProperty.call(o,"current")}return{name:"arrow",options:e,fn(o){return n(t)?t.current!=null?Xe({element:t.current,padding:r}).fn(o):{}:t?Xe({element:t,padding:r}).fn(o):{}}}};var ge=typeof document<"u"?v.useLayoutEffect:v.useEffect;function xe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!xe(e[n],t[n]))return!1;return!0}if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;for(n=r;n--!==0;){const i=o[n];if(!(i==="_owner"&&e.$$typeof)&&!xe(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function tt(e){const t=v.useRef(e);return ge(()=>{t.current=e}),t}function Gr(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:o,whileElementsMounted:i,open:s}=e,[l,a]=v.useState({x:null,y:null,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[c,p]=v.useState(n);xe(c,n)||p(n);const f=v.useRef(null),m=v.useRef(null),d=v.useRef(l),g=tt(i),u=tt(o),[h,y]=v.useState(null),[w,b]=v.useState(null),P=v.useCallback(O=>{f.current!==O&&(f.current=O,y(O))},[]),x=v.useCallback(O=>{m.current!==O&&(m.current=O,b(O))},[]),_=v.useCallback(()=>{if(!f.current||!m.current)return;const O={placement:t,strategy:r,middleware:c};u.current&&(O.platform=u.current),Yr(f.current,m.current,O).then(R=>{const T={...R,isPositioned:!0};E.current&&!xe(d.current,T)&&(d.current=T,ft.flushSync(()=>{a(T)}))})},[c,t,r,u]);ge(()=>{s===!1&&d.current.isPositioned&&(d.current.isPositioned=!1,a(O=>({...O,isPositioned:!1})))},[s]);const E=v.useRef(!1);ge(()=>(E.current=!0,()=>{E.current=!1}),[]),ge(()=>{if(h&&w){if(g.current)return g.current(h,w,_);_()}},[h,w,_,g]);const $=v.useMemo(()=>({reference:f,floating:m,setReference:P,setFloating:x}),[P,x]),C=v.useMemo(()=>({reference:h,floating:w}),[h,w]);return v.useMemo(()=>({...l,update:_,refs:$,elements:C,reference:P,floating:x}),[l,_,$,C,P,x])}var Jr=typeof document<"u"?v.useLayoutEffect:v.useEffect;function Qr(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(o=>o(r))},on(t,r){e.set(t,[...e.get(t)||[],r])},off(t,r){e.set(t,(e.get(t)||[]).filter(n=>n!==r))}}}const en=v.createContext(null),tn=()=>v.useContext(en);function rn(e){return(e==null?void 0:e.ownerDocument)||document}function nn(e){return rn(e).defaultView||window}function ue(e){return e?e instanceof nn(e).Element:!1}const on=tr["useInsertionEffect".toString()],an=on||(e=>e());function sn(e){const t=v.useRef(()=>{});return an(()=>{t.current=e}),v.useCallback(function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.current==null?void 0:t.current(...n)},[])}function ln(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:r,nodeId:n}=e,o=Gr(e),i=tn(),s=v.useRef(null),l=v.useRef({}),a=v.useState(()=>Qr())[0],[c,p]=v.useState(null),f=v.useCallback(y=>{const w=ue(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;o.refs.setReference(w)},[o.refs]),m=v.useCallback(y=>{(ue(y)||y===null)&&(s.current=y,p(y)),(ue(o.refs.reference.current)||o.refs.reference.current===null||y!==null&&!ue(y))&&o.refs.setReference(y)},[o.refs]),d=v.useMemo(()=>({...o.refs,setReference:m,setPositionReference:f,domReference:s}),[o.refs,m,f]),g=v.useMemo(()=>({...o.elements,domReference:c}),[o.elements,c]),u=sn(r),h=v.useMemo(()=>({...o,refs:d,elements:g,dataRef:l,nodeId:n,events:a,open:t,onOpenChange:u}),[o,n,a,t,u,d,g]);return Jr(()=>{const y=i==null?void 0:i.nodesRef.current.find(w=>w.id===n);y&&(y.context=h)}),v.useMemo(()=>({...o,context:h,refs:d,reference:m,positionReference:f}),[o,d,h,m,f])}function cn({opened:e,floating:t,position:r,positionDependencies:n}){const[o,i]=v.useState(0);v.useEffect(()=>{if(t.refs.reference.current&&t.refs.floating.current)return Xr(t.refs.reference.current,t.refs.floating.current,t.update)},[t.refs.reference.current,t.refs.floating.current,e,o,r]),ae(()=>{t.update()},n),ae(()=>{i(s=>s+1)},[e])}function fn(e){const t=[Hr(e.offset)];return e.middlewares.shift&&t.push(Vr({limiter:zr()})),e.middlewares.flip&&t.push(Mr()),e.middlewares.inline&&t.push(Br()),t.push(Zr({element:e.arrowRef,padding:e.arrowOffset})),t}function un(e){const[t,r]=lr({value:e.opened,defaultValue:e.defaultOpened,finalValue:!1,onChange:e.onChange}),n=()=>{var s;(s=e.onClose)==null||s.call(e),r(!1)},o=()=>{var s,l;t?((s=e.onClose)==null||s.call(e),r(!1)):((l=e.onOpen)==null||l.call(e),r(!0))},i=ln({placement:e.position,middleware:[...fn(e),...e.width==="target"?[Wr({apply({rects:s}){var l,a;Object.assign((a=(l=i.refs.floating.current)==null?void 0:l.style)!=null?a:{},{width:`${s.reference.width}px`})}})]:[]]});return cn({opened:e.opened,position:e.position,positionDependencies:e.positionDependencies,floating:i}),ae(()=>{var s;(s=e.onPositionChange)==null||s.call(e,i.placement)},[i.placement]),ae(()=>{var s,l;e.opened?(l=e.onOpen)==null||l.call(e):(s=e.onClose)==null||s.call(e)},[e.opened]),{floating:i,controlled:typeof e.opened=="boolean",opened:t,onClose:n,onToggle:o}}const Ct={context:"Popover component was not found in the tree",children:"Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"},[dn,St]=ur(Ct.context);var pn=Object.defineProperty,mn=Object.defineProperties,gn=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable,rt=(e,t,r)=>t in e?pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,de=(e,t)=>{for(var r in t||(t={}))At.call(t,r)&&rt(e,r,t[r]);if(Pe)for(var r of Pe(t))Dt.call(t,r)&&rt(e,r,t[r]);return e},hn=(e,t)=>mn(e,gn(t)),yn=(e,t)=>{var r={};for(var n in e)At.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Pe)for(var n of Pe(e))t.indexOf(n)<0&&Dt.call(e,n)&&(r[n]=e[n]);return r};const wn={refProp:"ref",popupType:"dialog"},Nt=v.forwardRef((e,t)=>{const r=Re("PopoverTarget",wn,e),{children:n,refProp:o,popupType:i}=r,s=yn(r,["children","refProp","popupType"]);if(!ut(n))throw new Error(Ct.children);const l=s,a=St(),c=gt(a.reference,n.ref,t),p=a.withRoles?{"aria-haspopup":i,"aria-expanded":a.opened,"aria-controls":a.getDropdownId(),id:a.getTargetId()}:{};return v.cloneElement(n,de(hn(de(de(de({},l),p),a.targetProps),{className:rr(a.targetProps.className,l.className,n.props.className),[o]:c}),a.controlled?null:{onClick:a.onToggle}))});Nt.displayName="@mantine/core/PopoverTarget";var vn=fr((e,{radius:t,shadow:r})=>({dropdown:{position:"absolute",backgroundColor:e.white,background:e.colorScheme==="dark"?e.colors.dark[6]:e.white,border:`${Z(1)} solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2]}`,padding:`${e.spacing.sm} ${e.spacing.md}`,boxShadow:e.shadows[r]||r||"none",borderRadius:e.fn.radius(t),"&:focus":{outline:0}},arrow:{backgroundColor:"inherit",border:`${Z(1)} solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2]}`,zIndex:1}}));const bn=vn;function Lt({children:e,active:t=!0,refProp:r="ref"}){const n=Pr(t),o=gt(n,e==null?void 0:e.ref);return ut(e)?v.cloneElement(e,{[r]:o}):e}Lt.displayName="@mantine/core/FocusTrap";var xn=Object.defineProperty,Pn=Object.defineProperties,_n=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertySymbols,On=Object.prototype.hasOwnProperty,Rn=Object.prototype.propertyIsEnumerable,ot=(e,t,r)=>t in e?xn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))On.call(t,r)&&ot(e,r,t[r]);if(nt)for(var r of nt(t))Rn.call(t,r)&&ot(e,r,t[r]);return e},pe=(e,t)=>Pn(e,_n(t));function it(e,t,r,n){return e==="center"||n==="center"?{top:t}:e==="end"?{bottom:r}:e==="start"?{top:r}:{}}function at(e,t,r,n,o){return e==="center"||n==="center"?{left:t}:e==="end"?{[o==="ltr"?"right":"left"]:r}:e==="start"?{[o==="ltr"?"left":"right"]:r}:{}}const En={bottom:"borderTopLeftRadius",left:"borderTopRightRadius",right:"borderBottomLeftRadius",top:"borderBottomRightRadius"};function $n({position:e,arrowSize:t,arrowOffset:r,arrowRadius:n,arrowPosition:o,arrowX:i,arrowY:s,dir:l}){const[a,c="center"]=e.split("-"),p={width:Z(t),height:Z(t),transform:"rotate(45deg)",position:"absolute",[En[a]]:Z(n)},f=Z(-t/2);return a==="left"?pe(K(K({},p),it(c,s,r,o)),{right:f,borderLeftColor:"transparent",borderBottomColor:"transparent"}):a==="right"?pe(K(K({},p),it(c,s,r,o)),{left:f,borderRightColor:"transparent",borderTopColor:"transparent"}):a==="top"?pe(K(K({},p),at(c,i,r,o,l)),{bottom:f,borderTopColor:"transparent",borderLeftColor:"transparent"}):a==="bottom"?pe(K(K({},p),at(c,i,r,o,l)),{top:f,borderBottomColor:"transparent",borderRightColor:"transparent"}):{}}var Tn=Object.defineProperty,Cn=Object.defineProperties,Sn=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,st=(e,t,r)=>t in e?Tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,An=(e,t)=>{for(var r in t||(t={}))Ft.call(t,r)&&st(e,r,t[r]);if(_e)for(var r of _e(t))It.call(t,r)&&st(e,r,t[r]);return e},Dn=(e,t)=>Cn(e,Sn(t)),Nn=(e,t)=>{var r={};for(var n in e)Ft.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&_e)for(var n of _e(e))t.indexOf(n)<0&&It.call(e,n)&&(r[n]=e[n]);return r};const kt=v.forwardRef((e,t)=>{var r=e,{position:n,arrowSize:o,arrowOffset:i,arrowRadius:s,arrowPosition:l,visible:a,arrowX:c,arrowY:p}=r,f=Nn(r,["position","arrowSize","arrowOffset","arrowRadius","arrowPosition","visible","arrowX","arrowY"]);const m=Ie();return a?F.createElement("div",Dn(An({},f),{ref:t,style:$n({position:n,arrowSize:o,arrowOffset:i,arrowRadius:s,arrowPosition:l,dir:m.dir,arrowX:c,arrowY:p})})):null});kt.displayName="@mantine/core/FloatingArrow";var Ln=Object.defineProperty,Fn=Object.defineProperties,In=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,lt=(e,t,r)=>t in e?Ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))jt.call(t,r)&&lt(e,r,t[r]);if(Oe)for(var r of Oe(t))Mt.call(t,r)&&lt(e,r,t[r]);return e},me=(e,t)=>Fn(e,In(t)),kn=(e,t)=>{var r={};for(var n in e)jt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Oe)for(var n of Oe(e))t.indexOf(n)<0&&Mt.call(e,n)&&(r[n]=e[n]);return r};const jn={};function Bt(e){var t;const r=Re("PopoverDropdown",jn,e),{style:n,className:o,children:i,onKeyDownCapture:s}=r,l=kn(r,["style","className","children","onKeyDownCapture"]),a=St(),{classes:c,cx:p}=bn({radius:a.radius,shadow:a.shadow},{name:a.__staticSelector,classNames:a.classNames,styles:a.styles,unstyled:a.unstyled,variant:a.variant}),f=gr({opened:a.opened,shouldReturnFocus:a.returnFocus}),m=a.withRoles?{"aria-labelledby":a.getTargetId(),id:a.getDropdownId(),role:"dialog"}:{};return a.disabled?null:F.createElement(xt,me(Q({},a.portalProps),{withinPortal:a.withinPortal}),F.createElement(or,me(Q({mounted:a.opened},a.transitionProps),{transition:a.transitionProps.transition||"fade",duration:(t=a.transitionProps.duration)!=null?t:150,keepMounted:a.keepMounted,exitDuration:typeof a.transitionProps.exitDuration=="number"?a.transitionProps.exitDuration:a.transitionProps.duration}),d=>{var g,u;return F.createElement(Lt,{active:a.trapFocus},F.createElement(nr,Q(me(Q({},m),{tabIndex:-1,ref:a.floating,style:me(Q(Q({},n),d),{zIndex:a.zIndex,top:(g=a.y)!=null?g:0,left:(u=a.x)!=null?u:0,width:a.width==="target"?void 0:Z(a.width)}),className:p(c.dropdown,o),onKeyDownCapture:pr(a.onClose,{active:a.closeOnEscape,onTrigger:f,onKeyDown:s}),"data-position":a.placement}),l),i,F.createElement(kt,{ref:a.arrowRef,arrowX:a.arrowX,arrowY:a.arrowY,visible:a.withArrow,position:a.placement,arrowSize:a.arrowSize,arrowRadius:a.arrowRadius,arrowOffset:a.arrowOffset,arrowPosition:a.arrowPosition,className:c.arrow})))}))}Bt.displayName="@mantine/core/PopoverDropdown";function Mn(e,t){if(e==="rtl"&&(t.includes("right")||t.includes("left"))){const[r,n]=t.split("-"),o=r==="right"?"left":"right";return n===void 0?o:`${o}-${n}`}return t}var ct=Object.getOwnPropertySymbols,Bn=Object.prototype.hasOwnProperty,Hn=Object.prototype.propertyIsEnumerable,Vn=(e,t)=>{var r={};for(var n in e)Bn.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ct)for(var n of ct(e))t.indexOf(n)<0&&Hn.call(e,n)&&(r[n]=e[n]);return r};const zn={position:"bottom",offset:8,positionDependencies:[],transitionProps:{transition:"fade",duration:150},middlewares:{flip:!0,shift:!0,inline:!1},arrowSize:7,arrowOffset:5,arrowRadius:0,arrowPosition:"side",closeOnClickOutside:!0,withinPortal:!1,closeOnEscape:!0,trapFocus:!1,withRoles:!0,returnFocus:!1,clickOutsideEvents:["mousedown","touchstart"],zIndex:ir("popover"),__staticSelector:"Popover",width:"max-content"};function Ve(e){var t,r,n,o,i,s;const l=v.useRef(null),a=Re("Popover",zn,e),{children:c,position:p,offset:f,onPositionChange:m,positionDependencies:d,opened:g,transitionProps:u,width:h,middlewares:y,withArrow:w,arrowSize:b,arrowOffset:P,arrowRadius:x,arrowPosition:_,unstyled:E,classNames:$,styles:C,closeOnClickOutside:O,withinPortal:R,portalProps:T,closeOnEscape:S,clickOutsideEvents:D,trapFocus:N,onClose:A,onOpen:H,onChange:V,zIndex:Te,radius:le,shadow:ce,id:Ce,defaultOpened:Se,__staticSelector:Ht,withRoles:Vt,disabled:zt,returnFocus:Wt,variant:qt,keepMounted:Kt}=a,Ut=Vn(a,["children","position","offset","onPositionChange","positionDependencies","opened","transitionProps","width","middlewares","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","unstyled","classNames","styles","closeOnClickOutside","withinPortal","portalProps","closeOnEscape","clickOutsideEvents","trapFocus","onClose","onOpen","onChange","zIndex","radius","shadow","id","defaultOpened","__staticSelector","withRoles","disabled","returnFocus","variant","keepMounted"]),[Xt,Yt]=v.useState(null),[Zt,Gt]=v.useState(null),ze=cr(Ce),Jt=Ie(),L=un({middlewares:y,width:h,position:Mn(Jt.dir,p),offset:typeof f=="number"?f+(w?b/2:0):f,arrowRef:l,arrowOffset:P,onPositionChange:m,positionDependencies:d,opened:g,defaultOpened:Se,onChange:V,onOpen:H,onClose:A});mr(()=>L.opened&&O&&L.onClose(),D,[Xt,Zt]);const Qt=v.useCallback(ie=>{Yt(ie),L.floating.reference(ie)},[L.floating.reference]),er=v.useCallback(ie=>{Gt(ie),L.floating.floating(ie)},[L.floating.floating]);return F.createElement(dn,{value:{returnFocus:Wt,disabled:zt,controlled:L.controlled,reference:Qt,floating:er,x:L.floating.x,y:L.floating.y,arrowX:(n=(r=(t=L.floating)==null?void 0:t.middlewareData)==null?void 0:r.arrow)==null?void 0:n.x,arrowY:(s=(i=(o=L.floating)==null?void 0:o.middlewareData)==null?void 0:i.arrow)==null?void 0:s.y,opened:L.opened,arrowRef:l,transitionProps:u,width:h,withArrow:w,arrowSize:b,arrowOffset:P,arrowRadius:x,arrowPosition:_,placement:L.floating.placement,trapFocus:N,withinPortal:R,portalProps:T,zIndex:Te,radius:le,shadow:ce,closeOnEscape:S,onClose:L.onClose,onToggle:L.onToggle,getTargetId:()=>`${ze}-target`,getDropdownId:()=>`${ze}-dropdown`,withRoles:Vt,targetProps:Ut,__staticSelector:Ht,classNames:$,styles:C,unstyled:E,variant:qt,keepMounted:Kt}},c)}Ve.Target=Nt;Ve.Dropdown=Bt;Ve.displayName="@mantine/core/Popover";export{Ve as P,ur as c,ut as i,gt as u};