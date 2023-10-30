!(function(){"use strict";var B=Object.defineProperty;var O=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var A=(s,i,r)=>i in s?B(s,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[i]=r,I=(s,i)=>{for(var r in i||(i={}))$.call(i,r)&&A(s,r,i[r]);if(O)for(var r of O(i))J.call(i,r)&&A(s,r,i[r]);return s};(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[8763],{42617:function(s,i,r){r.r(i),r.d(i,{HiddenText:function(){return E},LiveRegion:function(){return h},useAnnouncement:function(){return f}});var u=r(67294);const g={display:"none"};function E(a){let{id:l,value:m}=a;return u.createElement("div",{id:l,style:g},m)}const d={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};function h(a){let{id:l,announcement:m}=a;return u.createElement("div",{id:l,style:d,role:"status","aria-live":"assertive","aria-atomic":!0},m)}function f(){const[a,l]=(0,u.useState)("");return{announce:(0,u.useCallback)(w=>{w!=null&&l(w)},[]),announcement:a}}},24285:function(s,i,r){r.r(i),r.d(i,{CSS:function(){return S},add:function(){return U},canUseDOM:function(){return E},findFirstFocusableNode:function(){return F},getEventCoordinates:function(){return x},getOwnerDocument:function(){return w},getWindow:function(){return f},hasViewportRelativeCoordinates:function(){return T},isDocument:function(){return a},isHTMLElement:function(){return l},isKeyboardEvent:function(){return Y},isNode:function(){return h},isSVGElement:function(){return m},isTouchEvent:function(){return M},isWindow:function(){return d},subtract:function(){return X},useCombinedRefs:function(){return g},useEvent:function(){return y},useInterval:function(){return V},useIsomorphicLayoutEffect:function(){return b},useLatestValue:function(){return j},useLazyMemo:function(){return H},useNodeRef:function(){return N},usePrevious:function(){return P},useUniqueId:function(){return W}});var u=r(67294);function g(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,u.useMemo)(()=>c=>{e.forEach(o=>o(c))},e)}const E=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined";function d(n){const e=Object.prototype.toString.call(n);return e==="[object Window]"||e==="[object global]"}function h(n){return"nodeType"in n}function f(n){var e,t;return n?d(n)?n:h(n)&&(e=(t=n.ownerDocument)==null?void 0:t.defaultView)!=null?e:window:window}function a(n){const{Document:e}=f(n);return n instanceof e}function l(n){return d(n)?!1:n instanceof f(n).HTMLElement}function m(n){return n instanceof f(n).SVGElement}function w(n){return n?d(n)?n.document:h(n)?a(n)?n:l(n)?n.ownerDocument:document:document:document}const b=E?u.useLayoutEffect:u.useEffect;function y(n){const e=(0,u.useRef)(n);return b(()=>{e.current=n}),(0,u.useCallback)(function(){for(var t=arguments.length,c=new Array(t),o=0;o<t;o++)c[o]=arguments[o];return e.current==null?void 0:e.current(...c)},[])}function V(){const n=(0,u.useRef)(null),e=(0,u.useCallback)((c,o)=>{n.current=setInterval(c,o)},[]),t=(0,u.useCallback)(()=>{n.current!==null&&(clearInterval(n.current),n.current=null)},[]);return[e,t]}function j(n,e){e===void 0&&(e=[n]);const t=(0,u.useRef)(n);return b(()=>{t.current!==n&&(t.current=n)},e),t}function H(n,e){const t=(0,u.useRef)();return(0,u.useMemo)(()=>{const c=n(t.current);return t.current=c,c},[...e])}function N(n){const e=y(n),t=(0,u.useRef)(null),c=(0,u.useCallback)(o=>{o!==t.current&&(e==null||e(o,t.current)),t.current=o},[]);return[t,c]}function P(n){const e=(0,u.useRef)();return(0,u.useEffect)(()=>{e.current=n},[n]),e.current}let R={};function W(n,e){return(0,u.useMemo)(()=>{if(e)return e;const t=R[n]==null?0:R[n]+1;return R[n]=t,n+"-"+t},[n,e])}function C(n){return function(e){for(var t=arguments.length,c=new Array(t>1?t-1:0),o=1;o<t;o++)c[o-1]=arguments[o];return c.reduce((v,K)=>{const z=Object.entries(K);for(const[L,G]of z){const p=v[L];p!=null&&(v[L]=p+n*G)}return v},I({},e))}}const U=C(1),X=C(-1);function T(n){return"clientX"in n&&"clientY"in n}function Y(n){if(!n)return!1;const{KeyboardEvent:e}=f(n.target);return e&&n instanceof e}function M(n){if(!n)return!1;const{TouchEvent:e}=f(n.target);return e&&n instanceof e}function x(n){if(M(n)){if(n.touches&&n.touches.length){const{clientX:e,clientY:t}=n.touches[0];return{x:e,y:t}}else if(n.changedTouches&&n.changedTouches.length){const{clientX:e,clientY:t}=n.changedTouches[0];return{x:e,y:t}}}return T(n)?{x:n.clientX,y:n.clientY}:null}const S=Object.freeze({Translate:{toString(n){if(!n)return;const{x:e,y:t}=n;return"translate3d("+(e?Math.round(e):0)+"px, "+(t?Math.round(t):0)+"px, 0)"}},Scale:{toString(n){if(!n)return;const{scaleX:e,scaleY:t}=n;return"scaleX("+e+") scaleY("+t+")"}},Transform:{toString(n){if(n)return[S.Translate.toString(n),S.Scale.toString(n)].join(" ")}},Transition:{toString(n){let{property:e,duration:t,easing:c}=n;return e+" "+t+"ms "+c}}}),D="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function F(n){return n.matches(D)?n:n.querySelector(D)}}}]);
}());