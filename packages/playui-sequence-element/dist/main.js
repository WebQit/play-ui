!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i=function(t){return!Array.isArray(t)&&"object"==typeof t&&t};function r(t,...e){globalThis.WebQitInternalsRegistry||(globalThis.WebQitInternalsRegistry=new Map);var n,i,r=globalThis.WebQitInternalsRegistry.get(t);if(!r){if(r=new Map,!1===e[0])return r;globalThis.WebQitInternalsRegistry.set(t,r)}for(;n=e.shift();)if((i=r)&&!(r=r.get(n))){if(r=new Map,!1===e[0])return r;i.set(n,r)}return r}var s=function(t){return Array.isArray(t)},a=function(t){return"function"==typeof t},o=function(t){return null===t||""===t},l=function(t){return arguments.length&&(void 0===t||void 0===t)},c=function(t){return Array.isArray(t)||"object"==typeof t&&t||a(t)},h=function(t){return o(t)||l(t)||!1===t||0===t||c(t)&&!Object.keys(t).length},u=function(t){return a(t)||t&&"[object function]"==={}.toString.call(t)},d=function(t){return t instanceof Number||"number"==typeof t},f=function(t){return d(t)||!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)},p=function(t){return t instanceof String||"string"==typeof t&&null!==t},m=function(t,e=1){var n=0;t.forEach(t=>{n++});var i=t.slice(t.length-n,e);return arguments.length>1?i:i[0]},y=function(t,e=1){return arguments.length>1?m(t.slice().reverse(),e).reverse():m(t.slice().reverse())},g=function(t,...e){return e.forEach(e=>{t.indexOf(e)<0&&t.push(e)}),t},v=function(t,e){var n=[];return function(t,e){e=(e=e||Object.prototype)&&!s(e)?[e]:e;var n=[];for(t=t;t&&(!e||e.indexOf(t)<0)&&"default"!==t.name;)n.push(t),t=t?Object.getPrototypeOf(t):null;return n}(t,e).forEach(t=>{g(n,...Object.getOwnPropertyNames(t))}),n};function w(t,e,n=!1,r=!1,a=!1){var o=0,l=t.shift();if((f(l)||!0===l||!1===l)&&(o=l,l=t.shift()),!t.length)throw new Error("_merge() requires two or more array/objects.");return t.forEach((t,h)=>{(c(t)||u(t))&&(n?v(t):Object.getOwnPropertyNames(t)).forEach(c=>{if(e(c,l,t,h)){var u=l[c],d=t[c];if((s(u)&&s(d)||i(u)&&i(d))&&(!0===o||o>0))l[c]=s(u)&&s(d)?[]:{},w([f(o)?o-1:o,l[c],u,d],e,n,r,a);else if(s(l)&&s(t))r?l[c]=d:l.push(d);else try{a?Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(t,c)):l[c]=t[c]}catch(t){}}})}),l}var b=function(t,e){var n=void 0;return c(t)&&Object.keys(t).forEach((i,r)=>{!1!==n&&(n=e(f(i)?parseFloat(i):i,t[i],r))}),n};new Map;var $=function(...t){return w(t,(t,e,n)=>!0,!1,!1,!1)};var C=function(t,e=!0){return s(t)?t:!e&&i(t)?[t]:!1!==t&&0!==t&&h(t)?[]:function(t){return!p(t)&&!l(t.length)}(t)?Array.prototype.slice.call(t):i(t)?Object.values(t):[t]};var E=function(t,e,n=!1){for(var i=t.indexOf(e);i>-1&&(n||!1===n);)t.splice(i,1),n>0&&n--,i=t.indexOf(e);return t};var O=function(t,e=null){var n={};return 2===arguments.length&&(s(t)&&s(e)?t.forEach((t,i)=>n[t]=e[i]):n[t]=e),n};class S{constructor(t,e,n={}){this.el=t,this.$={el:t,readyCallbacks:[],finishCallbacks:[],cancelCallbacks:[],params:{...n},callFinish(){this.finishCallbacks.forEach(t=>{t(this.el)})},callCancel(){this.cancelCallbacks.forEach(t=>{t(this.el)})}},this.$.params.delay=d(this.$.params.delay)?this.$.params.delay:0,this.$.params.duration=d(this.$.params.duration)?this.$.params.duration:400,this.$.params.endDelay=d(this.$.params.endDelay)?this.$.params.endDelay:0}get anim(){return this.$.anim}onfinish(t){if(!u(t))throw new Error("Onfinish() accepts only a function.");return this.$.finishCallbacks.push(t),this}oncancel(t){if(!u(t))throw new Error("Oncancel() accepts only a function.");return this.$.cancelCallbacks.push(t),this}progress(){return this.$.anim?this.$.anim.currentTime/this.$.anim.effect.duration:0}seek(t){if(!d(t))throw new Error("Seek() accepts only a numeric value.");return this.ready((e,n)=>{var i=n.duration+(n.delay||0)+(n.endDelay||0);e.currentTime=Math.max(0,Math.min(t*i,i))}),this}reverse(){return this.ready(t=>t.reverse()),this}play(){return new Promise((t,e)=>{this.ready(n=>{n.play(),this.onfinish(()=>t(this)),this.oncancel(()=>e(this))},e)})}pause(){return this.ready(t=>t.pause()),this}finish(){return this.ready(t=>t.finish()),this}cancel(){return this.ready(t=>t.cancel()),this}}var k=class{constructor(t=[],e={}){this.$={animations:[],finishCallbacks:[],cancelCallbacks:[],params:e},t.forEach(t=>{this.add(t)})}add(t){if(!(t instanceof S))throw new Error("Argument#1 must be an animation AnimationAPI instance!");switch(this.$.animations.push(t),this.$.addCallback&&this.$.addCallback(t),this.$.playState){case"paused":t.pause();break;case"cancelled":t.cancel();break;case"finished":t.finish()}return this.$.reversed&&t.reverse(),this}remove(t){if(!(t instanceof S))throw new Error("Argument#1 must be an animation AnimationAPI instance!");return E(this.$.animations,t),this.$.removeCallback&&this.$.removeCallback(t),this}onfinish(t){if(!u(t))throw new Error("Onfinish() accepts only a function.");return this.$.finishCallbacks.push(t),this}oncancel(t){if(!u(t))throw new Error("Oncancel() accepts only a function.");return this.$.cancelCallbacks.push(t),this}progress(){return this.$.animations.reduce((t,e)=>t.progress()+e.progress(),0)/this.$.animations.length}play(){return this.$.playState="playing",new Promise((t,e)=>{var n,i,r=()=>{n||(n=!0,this.$.finishCallbacks.forEach(t=>t()),t(this))},s=t=>{i||(i=!0,this.$.cancelCallbacks.forEach(t=>t()),e(t))},a=this.$.animations.length;this.$.animations.forEach(t=>{t.play().then(()=>{!--a>0&&r()}).catch(s)}),this.$.addCallback=t=>{"playing"===this.$.playState&&(a++,t.play().then(()=>{!--a>0&&r()}).catch(s))},this.$.removeCallback=t=>{a--}})}seek(t,e=[]){return this.each(e=>e.seek(t),e)}reverse(t=[]){return this.$.reversed=!this.$.reversed,this.each(t=>t.reverse(),t)}pause(t=[]){return this.$.playState="paused",this.each(t=>t.pause(),t)}finish(t=[]){return this.$.playState="finished",this.each(t=>t.finish(),t)}cancel(t=[]){return this.$.playState="cancelled",this.each(t=>t.cancel(),t)}clear(t=[]){return this.$.animations=this.$.animations.filter(e=>{if(!t||!C(t,!1).includes(e.el))return!1}),this}each(t,e=[]){return this.$.animations.forEach(n=>{e&&C(e,!1).includes(n.el)||t(n)}),this}},M=function(t,e){return function(t,e,n=!1){if(""==e)return t;var i=n?t.lastIndexOf(e):t.indexOf(e);return-1===i?t:t.substr(0,i)}(t,e,!0)},A=function(t,e){return void 0===t?"":t.split(/(?=[A-Z])/).join(e||" ")},x=function(t,e){return"string"!=typeof t?t:t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+(void 0!==typeof e&&e?t.substr(1).toLowerCase():t.substr(1))}))},P=function(t,e){return t=x(t.replace(/-/g," ")).replace(/ /g,""),e?t:t[0].toLowerCase()+t.substr(1)},j=function(t){return t instanceof String||"string"==typeof t&&null!==t},T=function(t){return Array.isArray(t)},I=function(t){return arguments.length&&(void 0===t||void 0===t)},_=function(t){return null===t||""===t},D=function(t){return"function"==typeof t},R=function(t){return Array.isArray(t)||"object"==typeof t&&t||D(t)},q=function(t){return!Array.isArray(t)&&"object"==typeof t&&t},N=function(t,e=!0){return T(t)?t:!e&&q(t)?[t]:!1!==t&&0!==t&&function(t){return _(t)||I(t)||!1===t||0===t||R(t)&&!Object.keys(t).length}(t)?[]:function(t){return!j(t)&&!I(t.length)}(t)?Array.prototype.slice.call(t):q(t)?Object.values(t):[t]};var W=function(){if(!(q(this)&&this.window||"undefined"!=typeof window))throw new Error("A window context is required.");const t=q(this)&&this.window?this.window:window;if(t.WebQit||(t.WebQit={}),!t.WebQit.window){let e,n;Object.defineProperty(t.WebQit,"window",{get:()=>t}),Object.defineProperty(t.WebQit,"vendor",{value:{getName:()=>(e||(e=function(t){if(void 0!==t.InstallTrigger)return"firefox";if(/constructor/i.test(t.HTMLElement)||"[object SafariRemoteNotification]"===(!t.safari||void 0!==t.safari&&t.safari.pushNotification).toString())return"safari";var e=!(!t.chrome||!t.chrome.webstore&&!t.chrome.runtime),n=e&&-1!=t.navigator.userAgent.indexOf("Edg"),i=!!t.opr&&!!t.opr.addons||!!t.opera||t.navigator.userAgent.indexOf(" OPR/")>=0,r=!!t.document.documentMode,s=!r&&!!t.StyleMedia;return(e||i)&&t.CSS,s?"edge":r?"ie":i?"opera":n?"ie-chromium":e?"chrome":"unknown"}(t)),e),getPrefix:()=>(n||(n=function(t){var e=t.getComputedStyle(t.document.documentElement,""),n=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+n+")","i"))||[])[1],prefix:n,css:"-"+n+"-"}}(t)),n)}})}return t.WebQit};function L(t,e=null,n=!1){const i=W.call(this);if(j(t)){var r;if(t.trim().startsWith("<")){var s=i.window.document.createElement("div");s.innerHTML=t,r=n?N(s.children):s.firstChild}else r=n?N(Q.call(this,t,e)):F.call(this,t,e);return r}return t instanceof i.window.Element?n?[t]:t:n?N(t):t}function U(t,e=null){return L.call(this,t,e,!0)}function F(t,e=null,n=!1){const i=W.call(this);e=e||i.window.document;var r,s=n?"querySelectorAll":"querySelector";try{r=e[s](t)}catch(n){try{r=e[s](t.replace(/\:is\(/g,":matches("))}catch(n){try{r=e[s](t.replace(/\:is\(/g,":-webkit-any("))}catch(n){try{r=e[s](t.replace(/\:is\(/g,":-moz-any("))}catch(t){throw t}}}}return r}function Q(t,e=null){return F.call(this,t,e,!0)}var z=function(t){return function(t){return t instanceof Number||"number"==typeof t}(t)||!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)};class B{constructor(t,e=!0){this.window=t,this.async=e,this.readCallbacks=[],this.writeCallbacks=[],this._run()}_run(){this.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((t,e)=>{t&&!t()&&(this.readCallbacks[e]=null)}),this.writeCallbacks.forEach((t,e)=>{t&&!t()&&(this.writeCallbacks[e]=null)}),this._run()})}onread(t,e=!1){if(e)return new Promise((e,n)=>{!1===this.async?t(e,n):this.readCallbacks.push(()=>{t(e,n)})});!1===this.async?t():this.readCallbacks.push(t)}onwrite(t,e=!1){if(e)return new Promise((e,n)=>{!1===this.async?t(e,n):this.writeCallbacks.push(()=>{t(e,n)})});!1===this.async?t():this.writeCallbacks.push(t)}cycle(t,e,n){this.onread(()=>{var i=t(n);if(i){var r=i=>{this.onwrite(()=>{var r=e(i,n);if(r){var s=n=>{this.cycle(t,e,n)};r instanceof Promise?r.then(s):s()}})};i instanceof Promise?i.then(r):r()}})}}var H=function(t){const e=W.call(this);e.DOM.isDOMReady||"complete"===e.window.document.readyState?t(e.window):(e.window.domReadyCallbacks||(e.window.domReadyCallbacks=[],e.window.document.addEventListener("DOMContentLoaded",()=>{e.DOM.isDOMReady=!0,e.window.domReadyCallbacks.splice(0).forEach(t=>t(e.window))},!1)),e.window.domReadyCallbacks.push(t))};class K{constructor(t){this.window=t}onAdded(t,e,n={}){return n.on="added",this.onPresenceChange(t,(t,n,i,r,s)=>{e(t,n,i,r,s)},n)}onRemoved(t,e,n={}){return n.on="removed",this.onPresenceChange(t,(t,n,i,r,s)=>{e(t,n,i,r,s)},n)}onPresent(t,e,n={}){H.call(this.window,()=>{this.window.MutationObserver&&this.onAdded(t,(t,n)=>{t.forEach(t=>e(t,n))},n),j(t)?N(this.window.document.querySelectorAll(t)).forEach(t=>e(t,1)):t.parentNode&&e(t,1)})}onAbsent(t,e,n={}){H.call(this.window,()=>{this.window.MutationObserver&&onRemoved(t,(t,n)=>{t.forEach(t=>e(t,n))},n),j(t)?0===N(this.window.document.querySelectorAll(t)).length&&e(null,0):t.parentNode||e(t,0)})}onPresenceChange(t,e,n={}){t=N(t,!1);var i=(t,e)=>(e.$$searchCache||(e.$$searchCache=new Map),t.reduce((t,i)=>{var r;return e.$$searchCache.has(i)?r=e.$$searchCache.get(i):(r=((t,e)=>{if(e=e.filter(t=>t.matches),j(t)){var i=e.filter(e=>e.matches(t));if(!1!==n.observeIndirectMutation&&(i=e.reduce((e,n)=>e.concat(N(n.querySelectorAll(t))),i)).length)return i}else{if(e.includes(t))return[t];if(!1!==n.observeIndirectMutation&&e.length)for(var r=t;r=r.parentNode;)if(e.includes(r))return[t]}})(i,e,j(i))||[],e.$$searchCache.set(i,r)),t.concat(r)},[])),r=new Set,s=new Set,a=(a,o,l)=>{o&&"removed"===n.on||!o&&"added"===n.on||(a=i(t,a)).length&&(n.maintainCallState?(a.forEach(t=>{o?(r.add(t),s.delete(t)):(r.delete(t),s.add(t))}),e(a,o,l,r,s)):e(a,o,l))},o=n.context||this.window.document.documentElement;return this._observe(o,(t,e,i,r)=>{n.ignoreTransients||(a(t,0,!0),a(t.concat(e),1,!0),a(e,0,!0)),a(r,0),a(i,1)})}onAttrChange(t,e,n=[]){var i=new this.window.MutationObserver(e),r={attributes:!0,attributeOldValue:!0};return n&&(r.attributeFilter=n),i.observe(t,r),i}onTreeChange(t,e,n=!1){var i=new this.window.MutationObserver(e),r={childList:!0,subtree:n};return i.observe(t,r),i}onMutation(t,e,n){var i=new this.window.MutationObserver(e);return i.observe(t,n),i}_observe(t,e){if(!V.has(t)){const e=new Set,n=new this.window.MutationObserver(t=>{if(e.size){var n=t.reduce((t,e)=>t.concat(N(e.addedNodes)),[]),i=t.reduce((t,e)=>t.concat(N(e.removedNodes)),[]),r=[],s=[];n=new Set(n),i=new Set(i),n.forEach(t=>{i.has(t)&&(i.delete(t),n.delete(t),t.isConnected?r.push(t):s.push(t))}),n=[...n],i=[...i],e.forEach(t=>t(r,s,n,i))}});n.observe(t,{childList:!0,subtree:!0}),V.set(t,{callbacks:e,observer:n})}const n=V.get(t);return n.callbacks.add(e),{disconnect(){n.callbacks.delete(e)},reconnect(){n.callbacks.add(e)}}}}const V=new Map;var Y=function(t){!function(t){t.CSS||(t.CSS={});t.CSS.escape||(t.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}(t),function(t){"isConnected"in t.Node.prototype||Object.defineProperty(t.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(t),function(t){t.Element.prototype.matches||(t.Element.prototype.matches=t.Element.prototype.matchesSelector||t.Element.prototype.mozMatchesSelector||t.Element.prototype.msMatchesSelector||t.Element.prototype.oMatchesSelector||t.Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1})}(t)};var Z=function(t){return D(t)||t&&"[object function]"==={}.toString.call(t)};var G=function(t,e,n={},i={}){e=N(e).slice();for(var r=t;!I(r)&&!_(r)&&e.length;){var s=e.shift();if(!(n.get?n.get(r,s):R(r)?s in r:r[s]))return void(i.exists=!1);r=n.get?n.get(r,s):r[s]}return i.exists=!0,r},J=function(t,e,n,i={},r={}){const s=(t,n,i)=>r.set?r.set(t,n,i):(z(e[o])&&T(t)?t.push(i):t[n]=i,!0);e=N(e);for(var a=t,o=0;o<e.length;o++){if(!(o<e.length-1))return s(a,e[o],n);if(!a||!R(a)&&!Z(a))return!1;var l=G(a,e[o],r);if(!R(l)){if(!1===r.buildTree)return!1;if(l=Z(r.buildTree)?r.buildTree(o):z(e[o+1])?[]:{},!s(a,e[o],l))return!1}a=l}},X=function(t,e,n=!1,i={}){e=N(e);var r=!1;do{var s=""===(s=e.pop())?0:s,a=t;e.length&&(a=G(t,e,{},i)),(R(a)||Z(a))&&(i.has?i.has(a,s):s in a)&&(i.deleteProperty?r=i.deleteProperty(a,s):i.del?r=i.del(a,s):(delete a[s],r=!0))}while(r&&n&&e.length&&(R(a)||Z(a))&&!(i.keys?i.keys(a):Object.keys(a)).length);return r};function tt(t,e=!1){const n=W.call(this);var i={};return!(i.el=n.window.document.head.querySelector('meta[name="oohtml"]'))&&e&&(i.el=n.window.document.createElement("meta"),i.el.setAttribute("name",t),n.window.document.head.append(i.el)),i.el&&(i.vars=(i.el.getAttribute("content")||"").split(";").filter(t=>t).reduce((t,e)=>{var n=e.split("=").map(t=>t.trim());return J(t,n[0].split("."),"true"===n[1]||"false"!==n[1]&&(z(n[1])?parseInt(n[1]):n[1])),t},{})),i.get=function(t){return G(this.vars,t.split("."))},i.set=function(t,n=null,i=!1){var r=q(t)?t:{[t]:!0===n?"true":n};if(i=arguments.length<3?n:i,Object.keys(r).forEach(t=>{if(!1===r[t])X(this.vars,t.split("."));else if(q(r[t]))Object.keys(r[t]).forEach(e=>{var n=(t+"."+e).split(".");i&&G(this.vars,n)||J(this.vars,n,r[t][e])});else{var e=t.split(".");i&&G(this.vars,e)||J(this.vars,e,r[t])}}),e){const t=(e,n)=>Object.keys(n).reduce((i,r)=>{var s=(e?e+".":"")+r;return q(n[r])?i.push(...t(s,n[r])):i.push(s+"="+n[r]),i},[]);this.el.setAttribute("content",t("",this.vars).join(";"))}return!0},i.defaults=function(t,e=null){return this.set(t,e,!0)},i}var et=function(){const t=W.call(this);return t.DOM||(t.DOM={},Y(t.window),t.DOM.reflow=new B(t.window),t.DOM.mutations=new K(t.window),t.DOM.meta=tt.bind(t.window),t.DOM.query=L.bind(t.window),t.DOM.queryAll=U.bind(t.window),t.DOM.ready=H.bind(t.window)),t};function nt(t,e=null){return i(t)&&t.toArray?t.toArray():U.call(this,t,e)}function it(t){const e=et.call(this);if(!t)return e;if(e[t])return e[t];if(e.DOM&&e.DOM[t])return e.DOM[t];throw new Error(`Play UI: ${t} not found in scope.`)}const rt=["width","height","top","left","right","bottom","padding","padding-top","padding-left","padding-right","padding-bottom","margin","margin-top","margin-left","margin-right","margin-bottom","border-width","border-top-width","border-left-width","border-right-width","border-bottom-width","outline-width","outline-top-width","outline-left-width","outline-right-width","outline-bottom-width"].reduce((t,e)=>t.concat(e,P(e)),[]);var st=0,at=()=>+new Date+st++;function ot(t,e){if(!t.id&&e.autoId&&(t.id=at()),t.id)return"#"+t.id;var n=t.getAttribute("playui-uuid");if(n||!1===e.autoUuid||(n=at(),t.setAttribute("playui-uuid",n)),!n)throw new Error("All strategies to derive a selector for element has been disabled.");return`[playui-uuid="${n}"]`}function lt(t,e=!0){const n=it.call(this,"window"),i=it.call(this,"vendor").getPrefix();return C(t).reduce((t,r)=>{var s=P(r,!0);return i.api+s in n.document.body.style&&(t.push(r.includes("-")?i.css+A(r,"-").toLowerCase():i.api+s),!e)?t:t.concat(r)},[])}function ct(t,e=null){const n=it.call(this,"window");t=t.indexOf("-")?t:A(t,"-");return n.getComputedStyle(e||n.document.body).getPropertyValue("--"+t)}function ht(t,e,n=!0){const i=it.call(this,"window"),r=it.call(this,"prefix").getPrefix();var a=s(t)?t.join("|"):t;if(!e&&ft[a])return ft[a];var o=[];return ut.call(this,e=>{if((e.type===i.CSSRule.KEYFRAMES_RULE||e.type===i.CSSRule[r.api.toUpperCase()+"_KEYFRAMES_RULE"])&&(s(t)?t:[t]).indexOf(e.name)>-1)return o=o.concat(o,function(t){for(var e=[],i=0;i<t.cssRules.length;i++){var r=t.cssRules[i],s=CSSRule.parse(r.cssText.replace(r.keyText,"").replace("{","").replace("}","").trim()),a=(r.keyText||" ").split(",").map(t=>"from"===t?0:"to"===t?1:parseInt(t)/100);if(n)for(dt(s,["animation-","transition-"]);a.length;){var o=_copyPlain(s);o.offset=a.shift(),e.push(o)}else s.offset=a.length>1?a:a[0],e.push(s)}return e.sort((t,e)=>t.offset===e.offset?0:t.offset>e.offset?1:-1)}(e)),!0},!0),ft[a]=o,o}function ut(t,e=!1){var n=it.call(this,"window").document.styleSheets,i=function(e){try{for(var n=0;n<e.cssRules.length;n++){var i=e.cssRules[n];if(!0===t(i))return!0}}catch(t){}};if(e){for(var r=n.length-1;r>=0;r--)if(!0===i(n[r]))return!0}else for(r=0;r<n.length;r++)if(!0===i(n[r]))return!0}const dt=function(t,e,n=""){s(n)?n.forEach(e=>dt(t,e)):(t[n+"timing-function"]&&(t.easing=t[n+"timing-function"],delete t[n+"timing-function"]),t[n+"fill-mode"]&&(t.fill=t[n+"fill-mode"],delete t[n+"fill-mode"]),t[n+"iteration-count"]&&(t.iterations=t[n+"iteration-count"],delete t[n+"iteration-count"],"infinite"===t.iterations&&(t.iterations=1/0)))},ft={};class pt{constructor(t,e,n,i){this.el=t,this.props=C(e),this.readCallback=n,this.writeCallback=i,this.$savepoints=[]}savepoint(){var t=this.readCallback(this.el,this.props);return t instanceof Promise?t.then(t=>(i(t)&&this.$savepoints.push(t),t)):i(t)?(this.$savepoints.push(t),t):void 0}apply(t){return this.writeCallback(this.el,t)}commit(t=0){for(var e=0;e<=t&&t<this.$savepoints.length;e++)this.$savepoints[e]=null;return this}rollback(t=0,e=!1){if(!f(t))throw new Error("A valid transaction ID transaction must be provided!");var n=n=>{var i=this.$savepoints.splice(t),r=i.shift();if(!r)return{};var s=i.pop(),a={};return this.props.forEach(t=>{e&&s&&n[t]!==s[t]||n[t]!==r[t]&&(a[t]=r[t])}),a},i=e?this.readCallback(this.el,this.props):{};return i instanceof Promise?i.then(t=>this.apply(n(t))):this.apply(n(i))}get length(){return this.$savepoints.length}}class mt{constructor(t){"none"===t?this.isNone=!0:b(t,(t,e)=>{if(["rotate","scale","skew","translate"].includes(t)){var n=x(t);this[n]=s(e)?new mt[n](...e):new mt[n](e)}})}toString(){return this.stringify()}stringify(t={}){return this.isNone?"none":["rotate","scale","skew","translate"].reduce((t,e)=>{var n=x(e);return t+(this[n]&&this[n].length?" "+this[n]:"")},"").trim()}static parse(t,e=null){if("none"===t)return new this(t);if(!["translate","scale","rotate"].reduce((e,n)=>e||t.startsWith(n),!1))return this.parseMatrix(t,e);for(var n={},i=/(\w+)\((.+?)\)/g,r=null;r=i.exec(t);)n[r[1]]=r[2].indexOf(",")>-1?r[2].replace(" ","").split(","):r[2];return new this(n)}static parseMatrix(t,e=null){if("none"===t)return new this(t);const n=it(e);var i=function(t){return Math.round(100*t)/100},r=function(t){var e=180*t/Math.PI;return i(e)},s=function(t){var e=[];if(n.WebKitCSSMatrix)return[(e=new n.WebKitCSSMatrix(t)).a,e.b,e.c,e.d,e.e,e.f];for(var i,r=/[\d\.\-]+/g;i=r.exec(t);)e.push(+i);return e}(t),a=s[0],o=s[1],l=s[2],c=s[3];if(a*c==o*l)throw new Error("Dramatic.parseTransform: matrix is singular");var h=Math.sqrt(a*a+o*o),u=(a/=h)*l+(o/=h)*c;l-=a*u,c-=o*u;var d=Math.sqrt(l*l+c*c);return u/=d,a*(c/=d)<o*(l/=d)&&(a=-a,o=-o,u=-u,h=-h),new this({translate:[s[4],s[5]],scale:[i(h),i(d)],rotate:r(Math.atan2(o,a)),skew:r(Math.atan(u))})}}mt.Rotate=class extends Array{toString(){return"rotate("+this.map(t=>f(t)?t+"deg":t).join(", ")+")"}},mt.Scale=class extends Array{toString(){return"scale("+this.join(", ")+")"}},mt.Skew=class extends Array{toString(){return"skew("+this.map(t=>f(t)?t+"deg":t).join(", ")+")"}},mt.Translate=class extends Array{toString(){return"translate("+this.map(t=>f(t)?t+"px":t).join(", ")+")"}};class yt{constructor(t){_each(t,(t,e)=>{Object.defineProperty(this,t,{value:e,enumerable:!0})})}toString(){return this.stringify()}stringify(t={}){return this.constructor.props.map(t=>this[t]).filter(t=>t).join(" ")}static parse(t){return new this(t.split(" ").filter(t=>t).reduce((t,e,n)=>(t[this.props[n]]=e,t),{}))}}yt.props=["top","right","bottom","left"];class gt{constructor(t,e=null){this.val=t,this.unit=e}get unitType(){return this.constructor.absUnits.includes(this.unit)?"absolute":this.constructor.relUnits.includes(this.unit)?"relative":null}valueOf(){return this.stringify()}toString(){return this.stringify()}stringify(t={}){return this.val+(this.unit?this.unit:"")}static parse(t){var e;if(p(t)&&(e=this.absUnits.concat(this.relUnits).reduce((e,n)=>e||(t.endsWith(n)?n:null),null))){var n=M(t,e);f(n)&&(t=n)}return new this(t,e)}}gt.absUnits=["cm","mm","Q","in","pc","pt","px"],gt.relUnits=["em","ex","ch","rem","lh","vw","vh","vmin","vmax"];class vt{constructor(t,e){this.name=t,this.value=e}toString(){return this.stringify()}stringify(t={}){var e=this.name,n=this.value;return i(n)&&(n=!yt.props.includes(e)||n instanceof yt?"transform"!==e||n instanceof mt?n instanceof gt?n.stringify(t):n.toString():new mt(n):new yt(n)),n}static parse(t,e,n=null){return yt.props.includes(t)?e=yt.parse(e,n):"transform"===t?e=mt.parse(e,n):(e=gt.parse(e),rt.includes(t)&&f(e.val)&&!e.unit&&(e.unit="px")),new this(t,e)}}class wt{constructor(t){b(t,(t,e)=>{Object.defineProperty(this,t,{value:e,enumerable:!0})})}toString(){return this.stringify()}stringify(t={}){var e=[];return b(this.stringifyEach(t),(t,n)=>{e.push(`${t}: ${n}`)}),e.join("; ")}stringifyEach(t={}){var e={};return b(this,(n,i)=>{i instanceof vt?i=i.stringify(t):_isObject(i)&&(i=i.toString()),e[n]=i}),e}static parse(t,e=null){return this.parseEach(t.split(";").filter(t=>t).reduce((t,e)=>(t[e[0].trim()]=e[1].trim(),t),{}),e)}static parseEach(t,e=null){var n={};return b(t,(t,i)=>{n[t]=vt.parse(t,i,e)}),new this(n)}}var bt=function(t,...e){return e.length>1&&p(e[0])||i(e[0])?St.call(this,t,...e):$t.call(this,t,...e)};function $t(t,e,n={}){const i=it.call(this,"window"),r=nt.call(this,t)[0];if("global"===(n=n||{}).scope)return Et.call(this,t,e,n);if("inline"===n.scope){if(n.pseudo)throw new Error(`Cannot read inline styles for pseudo element ${n.pseudo}. Invalid operation. Consider omitting the 'inline' flag.`);return Ct.call(this,t,e)}var a=i.getComputedStyle(r,n.pseudo),o=C(e).reduce((t,e)=>(t[e]=a.getPropertyValue(n.vendorize?lt.call(this,e)[0]:e),t),{});return s(e)?o:o[e]}function Ct(t,e,n={}){n=n||{};var i=nt.call(this,t)[0].getAttribute("style");"all"===e&&(e=i.split(";").map(t=>t.split(":")[0]));var r=(n.vendorize?lt.call(this,e):C(e)).reduce((t,e)=>{var n=new RegExp(";[ ]*?"+e+":([^;]+);?","g");return t[e]=(n.exec(";"+i)||["",""])[1].trim(),t},{});return s(e)?r:r[e]}function Et(t,e,n={}){const i=it.call(this,"window"),r=nt.call(this,t)[0];n=n||{};var a=s(e)?e.join("|"):e;if(!n.noCache&&Ot[a]&&Ot[a].el===r){var o=Ot[a].slice();return delete o.el,o}var l=[];return ut.call(this,t=>{var s=t.selectorText;if(n.pseudo){var a=n.pseudo.startsWith(":")&&!n.pseudo.startsWith("::")?":"+n.pseudo:n.pseudo;if(!t.selectorText.endsWith(a))return;s=M(t.selectorText,a)}if(t.type===i.CSSRule.STYLE_RULE&&r.matches(s)){var o=C(e);if(!e){o=[];for(var c=0;c<t.style.length;c++)o.push(t.style[c])}l.push((n.vendorize?lt.call(this,o):o).reduce((e,n)=>(e[n]=t.style[n],e),{}))}}),Ot||(Ot={}),Ot[a]=l.slice(),Ot[a].el=r,n.all?l:l.reduce((t,e)=>$(t,e),{})}const Ot={};function St(t,e,n=null,r={}){r=(i(e)?n:r)||{};var s=(e=i(e)?e:O(e,n))instanceof wt?e.stringifyEach():wt.parseEach(e,this).stringifyEach();if("global"===r.scope)return Mt.call(this,t,s,r);if(r.pseudo)throw new Error(`Cannot write inline styles for pseudo element ${r.pseudo}. Invalid operation. Consider adding the 'global' flag.`);it.call(this,"window");const a=nt.call(this,t);var o;return("inline"===r.scope||r.prepend)&&(o=Object.keys(s).map(t=>`${r.vendorize?lt.call(this,t)[0]:t}: ${s[t]}`).join(";")),a.forEach(t=>{if("inline"===r.scope||r.prepend){var e=t.getAttribute("style")||"";r.prepend||e.trim().endsWith(";")||(e+=";"),t.setAttribute("style",r.prepend?o+e:e+o)}else{e=t.style;b(s,(t,n)=>{e.setProperty(r.vendorize?lt.call(this,t)[0]:t,n)})}}),this}var kt;function Mt(t,e,n=null,r={}){const s=it.call(this,"window"),a=nt.call(this,t);var o;if(r=(i(e)?n:r)||{},e=i(e)?e:O(e,n),r.noScratchPad&&!(o=C(s.document.styleSheets).reduce((t,e)=>{try{if(e.cssRules,"Play-UI-Scratch-Pad"!==e.ownerNode.id)return e}catch(t){}return t},null)))throw new Error('No editable stylesheet in document. Consider allowing to use a "scratchpad" stylesheet.');o||(kt||(kt=s.document.createElement("style"),s.document.head.appendChild(kt),kt.id="Play-UI-Scratch-Pad"),o=kt.sheet);var l=Object.keys(e).map(t=>`${r.vendorize?lt.call(this,t)[0]:t}: ${e[t]}`).join(";");return a.forEach(t=>{var e=ot.call(this,t,r);r.pseudo&&(e=`${e}${r.pseudo}`),o.insertRule(`${e} {${l}}`,r.prepend?0:o.cssRules.length)}),this}var At=function(t,...e){return it.call(this,"reflow")[e.length>1&&p(e[0])||i(e[0])?"onwrite":"onread"]((n,i)=>{n(bt.call(this,t,...e))},!0)},xt=function(t,e,n=!1){const i=nt.call(this,t),r=n?At:bt;return new pt(i[0],e,(t,e)=>Ct.call(this,t,e),(t,e)=>r.call(this,t,e))};const Pt={};class jt extends S{constructor(t,e,n={},r=null){super(t,e,n),WebQit=it.call(r),this.$.params.fill=this.$.params.fill||"forwards","duration"in this.$.params||(this.$.params.duration=400),this.$.params.easing&&-1===["ease-in","ease-out","ease-in-out"].indexOf(this.$.params.easing)&&-1===this.$.params.easing.indexOf("(")&&(this.$.params.easing=ct.call(WebQit,this.$.params.easing)||this.$.params.easing);const a=t=>{t=t.slice();var n={},r={};t=t.map(t=>(t=wt.parseEach(t).stringifyEach(),function(t,...e){return e.forEach(e=>E(t,e)),t}(Object.keys(t),"offset","easing").forEach(e=>{n[e]=void 0===n[e]?t[e]:n[e],r[e]=t[e]}),t));var a=s(e)?y(e):i(e)?e:r;try{var o=this.el.animate(t,this.$.params)}catch(t){return void(this.$.error=t)}this.$.params.reverse&&o.reverse(),o.effect||(o.effect={}),o.effect.duration||(o.effect.duration=this.$.params.duration),o.onfinish=()=>{this.$.params.cancelForCss&&(o.cancel(),"forwards"!==this.$.params.fill&&"both"!==this.$.params.fill||bt.call(WebQit,this.el,a)),this.$.callFinish()},o.oncancel=()=>this.$.callCancel(),this.$.anim=o,this.$.firstFrame=n,this.$.lastFrame=r,this.$.readyCallbacks.length&&this.$.readyCallbacks.forEach(t=>t(o,this.$.params,n,r))};u(e)?e(t,a):jt.createCallback(t,e,a,t=>{this.$.error=t},this.$.params.animNameNoCache,WebQit)}ready(t,e){return this.$.error?e&&e(this.$.error):this.$.anim?t(this.$.anim,this.$.params,this.$.firstFrame,this.$.lastFrame):this.$.readyCallbacks.push(t),this}static createCallback(t,e,n,r,a,o){var l=i(e)&&!Object.values(e).filter(t=>s(t)).length,c=s(e)&&e.length>1&&h(e[0]);if(l||c)o.DOM.reflow.onread(()=>{c?(e.shift(),this.createCallback(t,[bt.call(o,t,Object.keys(e[0])),...e],n,r,a,o)):this.createCallback(t,[bt.call(o,t,Object.keys(e)),{...e}],n,r,a,o)});else{if(p(e)&&(Pt[e]&&Pt[e].length&&!a||(Pt[e]=ht.call(o,e),!Pt[e].length&&r&&r('Animation name "'+e+'" not found in any stylesheet!')),e=Pt[e]),s(e)){var u=[],d={};if(b(e,(t,e)=>{"auto"===e.height&&(d.height="auto",g(u,t)),"auto"===e.width&&(d.width="auto",g(u,t))}),u.length){var f=Object.keys(d),m=xt.call(o,t,f);m.savepoint(),m.apply(d);var y=t.getBoundingClientRect(),v=f.reduce((t,e)=>(t[e]=y[e],t),{});return m.rollback(),e=e.map(t=>({...t})),u.forEach(t=>{"auto"===e[t].width&&(e[t].width=v.width+"px"),"auto"===e[t].height&&(e[t].height=v.height+"px")}),void n(e)}}n(e)}}}class Tt extends S{constructor(t,e,n={}){super(t,e,n);const i=this;this.$.anim={el:t,timing:{currentTime:0,delay:i.$.params.delay,duration:i.$.params.duration,endDelay:i.$.params.endDelay,calculate(){var t="playing"===this.state||"paused"===this.state,e=t?this.delay:i.$.params.delay,n=t?this.duration:i.$.params.duration,r=t?this.endDelay:i.$.params.endDelay,s=e,a=s+n,o=a+r;this.delay=Math.max(0,Math.min(e,this.currentTime>=s?0:s-this.currentTime)),this.duration=Math.max(0,Math.min(n,this.currentTime>=a?0:a-this.currentTime)),this.endDelay=Math.max(0,Math.min(r,this.currentTime>=o?0:o-this.currentTime))},start(t){r(i.$.anim.el,"play-ui").has("anim")&&r(i.$.anim.el,"play-ui").get("anim").finish(),r(i.$.anim.el,"play-ui").get("anim",i.$.anim),this.state="playing",this.calculate(),this.delay||t(0),this.interval=setInterval(()=>{this.currentTime++,this.currentTime===this.delay&&t(0),this.currentTime===this.delay+this.duration&&t(1),this.currentTime===this.delay+this.duration+this.endDelay&&(this.state="finished",this.stop(),t(2),this.currentTime=0)},1)},stop(){clearInterval(this.interval)}},set currentTime(t){this.timing.currentTime=t,"playing"===this.timing.state&&(this.timing.stop(),this.play())},get currentTime(){return this.timing.currentTime},_callBegin(){return e(this.el,"begin",this.reversed,this.currentTime)},_callPause(){return e(this.el,"pause",this.reversed,this.currentTime)},_callEnd(){return e(this.el,"end",this.reversed,this.currentTime)},play(){this.timing.start(t=>{0===t?this._callBegin():1===t?this._callEnd():2===t&&i.$.callFinish()})},reverse(){this.reversed=!this.reversed,"playing"===this.timing.state&&(this.timing.stop(),this.play())},pause(){!1!==this._callPause()&&(this.timing.state="paused",this.timing.stop())},finish(){this.timing.state="finished",this.timing.stop(),this._callEnd(),i.$.callFinish()},cancel(){this.timing.state="cancelled",this.timing.stop(),i.$.callCancel()}},this.$.anim.effect||(this.$.anim.effect={}),this.$.anim.effect.duration||(this.$.anim.effect.duration=this.$.params.delay+this.$.params.duration+this.$.params.endDelay)}ready(t,e){t(this.$.anim,this.$.params)}}var It=class{constructor(t=[],e={}){this.$={},this.$.entries=[],this.$.params=e,this.nowPlaying=new k,t.forEach(t=>{this.add(t,e.timing)}),this.queue=[]}add(t,e={},n={},i=null,r=null){if(!this.$.entries.filter(e=>e.el===t).length){var s={el:t,effect:e,params:n,onfinish:i,oncancel:r};this.$.entries.push(s),this.nowPlayingAdd(s)}}remove(t){this.$.entries=this.$.entries.filter(e=>e.el!==t)}nowPlayingAdd(t){if(this.nowPlayingEffect){var e=(t,e,n,i)=>{var r=new(u(n)?Tt:jt)(e.el,n,i);t.add(r),i.always&&r.onfinish(()=>{t.remove(r),this.remove(e.el)}),e.onfinish&&r.onfinish(e.onfinish),e.oncancel&&r.oncancel(e.oncancel)},n=(t,i)=>{var r=i[0],s=h(r.effect)?this.nowPlayingEffect:r.effect,a=$({},this.nowPlayingParams,r.params);if(a.delay=a.delay||0,d(a.lag)||d(a.endLag)){var o=y(t.$.animations);if(o)return void o.ready((o,l)=>{d(a.lag)?a.delay+=l.delay+a.lag:a.delay+=l.delay+parseFloat(l.endDelay)+l.duration+a.endLag,a.delay-=d(o.currentTime)?o.currentTime:0,e(t,r,s,a),i.shift(),i.length&&n(t,i)})}e(t,r,s,a),i.shift(),i.length&&n(t,i)};this.queue.push(t),1===this.queue.length&&n(this.nowPlaying,this.queue)}}play(t={},e={}){return this.nowPlayingEffect&&(this.nowPlaying=new k,this.queue=[]),this.nowPlayingEffect=t,this.nowPlayingParams=e,(e.reverseList?this.$.entries.slice().reverse():this.$.entries).forEach(t=>{e.except&&C(e.except,!1).includes(t.el)||e.only&&!C(e.only,!1).includes(t.el)||this.nowPlayingAdd(t)}),this.nowPlaying.play()}};function _t(t,e,n={}){var i=u(e)?Tt:jt;return Promise.all(nt.call(this,t).map(t=>new i(t,e,n,this).play().then(()=>this)))}const Dt=new Map,Rt=(t,e,n)=>{if(!Dt.has(e)){const t=new Map;Dt.set(e,{o:new window.IntersectionObserver(e=>{e.forEach(e=>{t.get(e.target)(e)})},{rootMargin:e}),c:t})}var i=Dt.get(e);i.c.set(t,n),i.o.observe(t)},qt=t=>(t.getAttribute("play-seq")||"").split(";").map(t=>t.trim()).filter(t=>t).reduce((t,e)=>{var[n,i]=e.split(":").map(t=>t.trim());return t[n]=["duration","lag","always","autoOffStateReverse"].includes(n)?parseInt(i):i,t},{lag:100,rootMargin:"0px",duration:200,animIn:"",animInAlt:"",always:!0,fill:"forwards",easing:"ease-out",cancelForCss:!1,autoOffStateReverse:!1});!function(t){const{ul:e,li:n,div:i}=function(t){return{ul:class extends t.HTMLUListElement{connectedCallback(){this._params=qt(this),this._params.animIn&&(this._sequenceA=new It,this._sequenceA.play(this._params.animIn,this._params)),this._params.animInAlt&&(this._sequenceB=new It,this._sequenceB.play(this._params.animInAlt,this._params))}sequenceAdd(t){Rt(t,this._params.rootMargin,t=>{t.isIntersecting&&(t.boundingClientRect.top<0?this._params.animInAlt&&this._sequenceB.add(t.target):this._params.animIn&&this._sequenceA.add(t.target))})}},li:class extends t.HTMLLIElement{connectedCallback(){this.parentNode.sequenceAdd&&this.parentNode.sequenceAdd(this)}},div:class extends t.HTMLDivElement{connectedCallback(){var t,e,n,i,r=qt(this),s={...r};s.reverse=!s.reverse,s.fill="forwards"===s.fill?"backwards":"forwards",Rt(this,r.rootMargin,a=>{a.isIntersecting?a.boundingClientRect.top<0?r.animInAlt&&!e&&(e=!0,_t(a.target,r.animInAlt,{...r}).then(()=>{e=!1})):r.animIn&&!t&&(t=!0,_t(a.target,r.animIn,{...r}).then(()=>{t=!1})):r.autoOffStateReverse&&(a.boundingClientRect.top<0?!s.animInAlt||e||i||(i=!0,_t(a.target,s.animInAlt,{...s}).then(()=>{i=!1})):!s.animIn||t||n||(n=!0,_t(a.target,s.animIn,{...s}).then(()=>{n=!1})))})}}}}(t);t.customElements.define("playui-sequence-ul",e,{extends:"ul"}),t.customElements.define("playui-sequence-li",n,{extends:"li"}),t.customElements.define("playui-sequence-div",i,{extends:"div"})}(window)}]);
//# sourceMappingURL=main.js.map