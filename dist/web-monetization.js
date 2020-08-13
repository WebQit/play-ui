!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}({0:function(e,t,r){"use strict";var n=function(e){return Array.isArray(e)},i=function(e){return e instanceof String||"string"==typeof e&&null!==e},a=function(e){return arguments.length&&(void 0===e||void 0===e)},o=function(e){return null===e||""===e},s=function(e){return"function"==typeof e},u=function(e){return Array.isArray(e)||"object"==typeof e&&e||s(e)},l=function(e){return!Array.isArray(e)&&"object"==typeof e&&e},c=function(e,t=!0){return n(e)?e:!t&&l(e)?[e]:!1!==e&&0!==e&&function(e){return o(e)||a(e)||!1===e||0===e||u(e)&&!Object.keys(e).length}(e)?[]:function(e){return!i(e)&&!a(e.length)}(e)?Array.prototype.slice.call(e):l(e)?Object.values(e):[e]},f=function(e){return s(e)||e&&"[object function]"==={}.toString.call(e)},h=function(e){return typeof e},p=function(e,t,r=null){if(!u(e))throw new Error('Object must be of type subject; "'+h(e)+'" given!');var n;return!(n=e[t])&&r&&(n=new r(e),Object.defineProperty(e,t,{get:()=>n,set:e=>{if(e!==n)throw new Error('Attempt to overwrite the "'+t+'" special property!')},enumerable:!1})),n},d=function(e,t,r=null){return n(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1!==t.indexOf(e)):[]},b=class{constructor(e){this.subject=e,this.fireables=[],this.currentlyFiring=[]}add(e){return this.fireables.push(e),e}forget(e){this.filter(e).forEach(e=>{this.fireables=this.fireables.filter(t=>t!==e)})}filter(e){return this.fireables.filter(t=>{var r=c(t.filter),n=c((t.params||{}).tags),i=c(e.filter),a=c((e.params||{}).tags);return!(e.originalHandler&&t.handler!==e.originalHandler||i.length&&(i.length!==r.length||d(r,i).length!==i.length)||a.length&&(a.length!==n.length||d(n,a).length!==a.length))})}},m=function(e,...t){return t.forEach(t=>{e.indexOf(t)<0&&e.push(t)}),e},g=function(e,t,r=!1){if(""==t)return e;var n=r?e.lastIndexOf(t):e.indexOf(t);return-1===n?"":e.substr(n+t.length)},y=function(e,t,r={},n={}){t=c(t).slice();for(var i=e;!a(i)&&!o(i)&&t.length;){var s=t.shift();if(!(r.get?r.get(i,s):u(i)?s in i:i[s]))return void(n.exists=!1);i=r.get?r.get(i,s):i[s]}return n.exists=!0,i},v=function(e,t=null){var r={};return 2===arguments.length&&(n(e)&&n(t)?e.forEach((e,n)=>r[e]=t[n]):r[e]=t),r},w=function(e){return!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)},j=function(e){return s(e)&&/^class\s?/.test(Function.prototype.toString.call(e))},O=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!n(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{m(r,...Object.getOwnPropertyNames(e))}),r};function E(e,t,r=!1,i=!1,a=!0){var o=0,s=e.shift();if((w(s)||!0===s||!1===s)&&(o=s,s=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,c)=>{(u(e)||f(e))&&(r?O(e):Object.getOwnPropertyNames(e)).forEach(u=>{var f=s[u],h=e[u];if((n(f)&&n(h)||l(f)&&l(h))&&(!0===o||o>0))s[u]=n(f)&&n(h)?[]:{},E([w(o)?o-1:o,s[u],f,h],t,r,i,a);else if(t(u,s,e,c))if(n(s)&&n(e))i?s[u]=h:s.push(h);else try{a?Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(e,u)):s[u]=e[u]}catch(e){}})}),s}var x=function(e,t=[],r=!0){var i=0;return w(arguments[0])&&u(arguments[1])&&(i=arguments[0],e=arguments[1],t=arguments[2]||[]),E([i,{},e],(e,r,i)=>f(t)?t(e):!n(t)||!t.length||t.indexOf(e)>-1,!1,!1,r)},P=function(e,t,r=null,n={}){if(!e||!u(e))throw new Error('Object must be of type subject; "'+h(e)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),r&&!f(r))throw new Error('Handler must be a function; "'+h(r)+'" given!');var i;if(i=K(e,!1))return i.forget({filter:t,originalHandler:r,params:n})},S=function(e,t){var r=void 0;return u(e)&&Object.keys(e).forEach((n,i)=>{!1!==r&&(r=t(w(n)?parseFloat(n):n,e[n],i))}),r},A=class{constructor(e,t){this.subject=e,this.handler=t.handler,this.filter=t.filter,this.params=t.params}disconnect(){this.disconnected=!0}},W=class extends A{fire(e,t,r){return this.disconnected||this.filter&&this.filter!==e.type?t(...Array.prototype.slice.call(arguments,2)):this.handler(e,r,t)}},k=class{constructor(e,t){if(this.subject=e,!t.type)throw new Error("Action type must be given in definition!");S(t,(e,t)=>{Object.defineProperty(this,e,{value:t,enumerable:!0})}),Object.seal(this)}},T=class extends b{add(e){return super.add(new W(this.subject,e))}fire(e,t=null){if(e instanceof k||(e=new k(this.subject,e)),this.currentlyFiring.filter(t=>t.type===e.type&&t.name===e.name).length)return t?t():void 0;this.currentlyFiring.push(e);const r=(n,...i)=>{var a=this.fireables[n];return a?a.fire(e,(...e)=>r(n+1,...e),...i):t?t(...i):i[0]};var n=r(0);return this.currentlyFiring.pop(),n}},z=function(e,t=!0){return p(e,".interceptors",t?T:null)},F=function(e,t){if(!t||!u(t))throw new Error("Target must be of type object!");var r,n=function(r){return arguments.length?r:e?Object.getOwnPropertyNames(t):Object.keys(t)};return(r=z(t,!1))?r.fire({type:e?"ownKeys":"keys"},n):n()},M=function(e){return F(!1,...arguments)};function N(e,t=null,r=!1){if(!e||!u(e))throw new Error("Target must be of type object!");var n=K(e);if(!n.build){n.build=!0;var i=!(t=c(t)).length||t.filter(e=>e.startsWith(".")).length?M(e).filter(e=>-1===e.indexOf(".")):t.map(e=>function(e,t,r=!1){if(""==t)return e;var n=r?e.lastIndexOf(t):e.indexOf(t);return-1===n?e:e.substr(0,n)}(e,".")),a=t.length?t.map(e=>g(e,".")):null;i.forEach(t=>{var n=I(e,t);u(n)&&(D(e,t,n),(a||r)&&N(n,a,r))})}}var C=function(e,t,r=null,n={}){if(!e||!u(e))throw new Error('Object must be of type subject; "'+h(r)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),!f(r))throw new Error('Callback must be a function; "'+h(r)+'" given!');var i={filter:t,handler:r,params:n};(i.filter||i.params.subtree)&&N(e,i.filter,i.params.subtree);var a,o=K(e);return i.params.unique&&(a=o.filter({filter:t,params:n})).length?a[0]:o.add(i)},V=class{constructor(e,t){if(this.subject=e,t.originalSubject||(this.originalSubject=e),!("type"in t))throw new Error("Delta type must be given in definition!");if(!("name"in t))throw new Error("Property name must be given in definition!");S(t,(e,t)=>{Object.defineProperty(this,e,{value:t,enumerable:!0})}),this.path||Object.defineProperty(this,"path",{value:t.name,enumerable:!0}),Object.seal(this)}},D=function(e,t,r){var n;C(r,r=>{if(n=K(e,!1)){var i=r.map(r=>{var n={};return S(r,(e,t)=>{"subject"!==e&&"name"!==e&&"path"!==e&&(n[e]=t)}),n.name=t,n.path=t+"."+r.path,n.originalSubject=r.originalSubject,new V(e,n)});return n.fire(i)}},{subtree:!0,unique:!0,tags:[_,t,e]})};const _={};var q=function(e,t,r){P(r,null,null,{tags:[_,t,e]})},H=function(e,...t){var r=t.map(e=>{if(!u(e))throw new Error("Target must be of type object!");return{subject:e,subjectCopy:n(e)?e.slice(0):x(e)}}),i=e(...t);return r.map(e=>{var t,r,i=Object.keys(e.subjectCopy),a=Object.keys(e.subject),o=[],s=(t=i.concat(a),t.filter((e,t,r)=>r.indexOf(e)===t)).map(t=>{if((!n(e.subject)||"length"!==t&&".observer"!==t)&&e.subjectCopy[t]!==e.subject[t]){o.push(t);var r={name:t,related:o,buffered:!0};return a.includes(t)?(r.type="set",r.value=e.subject[t],i.includes(t)&&(r.isUpdate=!0)):r.type="del",i.includes(t)&&(r.oldValue=e.subjectCopy[t]),u(e.subjectCopy[t])&&q(e.subject,t,e.subjectCopy[t]),u(e.subject[t])&&D(e.subject,t,e.subject[t]),r}}).filter(e=>e);if(s.length&&(r=K(e.subject,!1)))return r.fire(s)}),i},I=function(e,t,r=!1){if(!e||!u(e))throw new Error("Target must be of type object!");var i,a,o=function(r){return arguments.length?r:n(t)?v(t,e):e[t]};return i=(a=z(e))?a.fire({type:"get",name:t},o):o(),r&&n(e)&&!w(t)&&f(i)&&!j(i)?function(...t){return H(()=>i.apply(e,t),e)}:i},L=class extends A{constructor(e,t){if(super(e,t),this.filterArray=c(this.filter),this.isDynamicFilter=this.filterArray.filter(e=>i(e)&&(e.indexOf("..")>-1||e.startsWith(".")||e.endsWith("."))).length,this.isDynamicFilter&&this.filterArray.length>1)throw new Error('Only one "Dynamic Filter" must be observed at a time! "'+this.filterArray.join(", ")+'" have been bound together.')}fire(e){var t,r;if(!(this.disconnected||this.params.type&&(t=e,r=e=>this.params.type===e.type,!t.reduce((e,t)=>e||r(t),!1))))if(this.filterArray.length){var a=[];this.filterArray.filter((t,r)=>(t=i(t)?t.replace(/`/g,""):t,a[r]=[],e.filter(e=>{var n=e.path.split("."),i=this.isDynamicFilter?t.split(".").map((e,t)=>e||n[t]||"").join("."):t;return m(a[r],i),(i===e.name||!1!==this.params.suptree&&(i+".").startsWith(e.path+".")||this.params.subtree&&(e.path+".").startsWith(i+"."))&&(!this.isDynamicFilter||!i.split(".").filter(e=>!e).length)}).length)).length&&function(e){return e.reduce((e,t)=>{var r=[];return e.forEach(e=>{c(t).forEach(t=>{var n=e.slice();n.push(t),r.push(n)})}),r},[[]])}(a).forEach(t=>{var r=this.formatChanges(t,e);this.handler(n(this.filter)?r:r[0])})}else this.filter||!this.params.subtree&&e.filter(e=>e.path===e.name).length!==e.length||this.handler(e)}formatChanges(e,t){return!1===this.params.data?[]:e.map(e=>{var r=t.reduce((t,r)=>{if(t)return t;if(e+""==r.path+"")return r;if((e+".").startsWith(r.path+".")){var n=i(e)?g(e,r.path+".").split("."):e;t=new V(r.subject,{type:r.type,name:e});return("del"===r.type||r.isUpdate)&&(t.oldValue=y(r.oldValue,n,{get:I})),"del"!==r.type&&(t.value=y(r.value,n,{get:I})),t}},null);return r||(r=new V(this.subject,{type:"get",name:e,value:y(this.subject,i(e)?e.split("."):e,{get:I})})),r})}},U=class extends b{add(e){return super.add(new L(this.subject,e))}fire(e){return e=c(e,!1).map(e=>e instanceof V?e:new V(this.subject,e)),!this.currentlyFiring.filter(t=>e.filter(e=>t.type===e.type&&t.name===e.name).length).length&&(this.currentlyFiring.push(...e),this.fireables.forEach(t=>{if(e.propagationStopped)return!1;t.fire(e)}),e.forEach(e=>function(e,t,r=!1){for(var n=e.indexOf(t);n>-1&&(r||!1===r);)e.splice(n,1),r>0&&r--,n=e.indexOf(t);return e}(this.currentlyFiring,e)),!0)}},K=function(e,t=!0){return p(e,".observers",t?U:null)},R=function(e,t){if(!e||!u(e))throw new Error("Target must be of type object!");var r,n=function(r){return arguments.length?r:t in e};return(r=z(e,!1))?r.fire({type:"has",name:t},n):n()},Y=function(e,t,r,a=null,o=null){if(!t||!u(t))throw new Error("Target must be of type object!");l(r)&&(o=a,a=null);var s=z(t,!1),f=K(t,!1);const h=(r,n,a,o)=>{if(i(r)&&-1!==r.indexOf("."))throw new Error("Property names with a dot are not supported!");var l,c="set";e&&(c="def",n=(l=n||{}).value);var h={name:r,type:c,value:n,related:a,detail:o};R(t,r)&&(h.isUpdate=!0,h.oldValue=I(t,r));var p=function(e){return arguments.length?e:(l?Object.defineProperty(t,r,l):t[r]=n,!0)};if(s){var d=l?{type:"def",name:r,descriptor:l,related:a,detail:o}:{type:"set",name:r,value:n,related:a,detail:o};h.success=s.fire(d,p)}else h.success=p();return h.success&&h.value!==h.oldValue&&(u(h.oldValue)&&q(t,r,h.oldValue),u(h.value)&&(D(t,r,h.value),f&&f.build&&N(h.value,null,!0))),h};var p,d,b=[];n(r)||(i(r)||((d=r)instanceof Number||"number"==typeof d))&&(p=c(r))?b=p.map(e=>h(e,a,p,o)):l(r)&&(p=Object.keys(r))&&(b=p.map(e=>h(e,r[e],p,o)));var m=b.filter(e=>e.success);return f&&f.fire(m),m.length>0},B=function(e,t,r=null,n=null){return Y(!1,...arguments)},G=function(e,t,r=null){if(!e||!u(e))throw new Error("Target must be of type object!");var n,a=(t=c(t)).map(n=>{if(i(n)&&-1!==n.indexOf("."))throw new Error("Property names with a dot are not supported!");var a={name:n,type:"del",related:t,detail:r};R(e,n)&&(a.oldValue=I(e,n));var o,s=function(t){return arguments.length?t:(delete e[n],!0)};return(o=z(e,!1))?a.success=o.fire({type:"del",name:n,related:t},s):a.success=s(),a.success&&u(a.oldValue)&&q(e,n,a.oldValue),a}).filter(e=>e.success);return(n=K(e,!1))&&n.fire(a),a.length>0},J=function(e,t,r=null,n=null){return Y(!0,...arguments)},Q=function(e){return F(!0,...arguments)};const X=G,Z=J;t.a={set:B,get:I,has:R,deleteProperty:G,del:X,defineProperty:J,def:Z,keys:M,ownKeys:Q,intercept:function(e,t,r,n={}){if(!u(e))throw new Error('Object must be of type subject; "'+h(r)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),!f(r))throw new Error('Callback must be a function; "'+h(r)+'" given!');var i,a=z(e),o={filter:t,handler:r,params:n};return o.params.unique&&(i=a.filter(o)).length?i[0]:a.add(o)},unintercept:function(e,t,r=null,n={}){if(!e||!u(e))throw new Error('Object must be of type subject; "'+h(e)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),r&&!f(r))throw new Error('Handler must be a function; "'+h(r)+'" given!');var i;if(i=z(e,!1))return i.forget({filter:t,originalHandler:r,params:n})},proxy:function(e){if(!u(e))throw new Error('Object must be of type subject; "'+h(e)+'" given!');var t=new Proxy(e,{get:(e,r)=>{var n=I(e,r);return f(n)&&!j(n)?n.bind(t):n},set:B,has:R,deleteProperty:G,defineProperty:J,ownKeys:Q});return t},observe:C,unobserve:P,closure:H,init:function(e,t){c(t).forEach(t=>{var r,n,i=e[t],a=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!(t in e)};"value"in a&&delete a.value,"writable"in a&&delete a.writable,a.get=()=>{if(r)return i;r=!0;var n=I(e,t);return r=!1,n},a.set=r=>{if(n)return i=r,!0;n=!0;B(e,t,r);return n=!1,!0},Object.defineProperty(e,t,a)})},build:N,link:D,unlink:q}},16:function(e,t,r){"use strict";const n={params:{}};var i;i=window,n.detect=function(){if(!i)return"";if(void 0!==i.InstallTrigger)return"firefox";if(/constructor/i.test(i.HTMLElement)||"[object SafariRemoteNotification]"===(!i.safari||void 0!==i.safari&&i.safari.pushNotification).toString())return"safari";var e=!(!i.chrome||!i.chrome.webstore&&!i.chrome.runtime),t=e&&-1!=i.navigator.userAgent.indexOf("Edg"),r=!!i.opr&&!!i.opr.addons||!!i.opera||i.navigator.userAgent.indexOf(" OPR/")>=0,n=!!i.document.documentMode,a=!n&&!!i.StyleMedia;return(e||r)&&i.CSS,a?"edge":n?"ie":r?"opera":t?"ie-chromium":e?"chrome":"unknown"},t.a=n},17:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),i=r(16);class a{constructor(e,t={}){if(this.paymentPointer=e,this.params=t,this.assertSupport(this.getTag()&&this.params.prompt)){var r=window.document.monetization;n.a.set(this,"state",r.state),r.addEventListener("monetizationpending",e=>{n.a.set(this,{state:"pending"},e.detail)}),r.addEventListener("monetizationstart",e=>{a=0,n.a.set(this,{state:"started"},e.detail)}),r.addEventListener("monetizationstop",e=>{n.a.set(this,{state:"stopped"},e.detail)});var i,a=0,o=0;r.addEventListener("monetizationprogress",e=>{0===o&&(i=e.detail.assetScale);var t=Number(e.detail.amount);a+=t,o+=t,n.a.set(this,{progress:{currentTotal:{amount:a,value:(a*Math.pow(10,-i)).toFixed(i)},sessionTotal:{amount:o,value:(o*Math.pow(10,-i)).toFixed(i)}},currency:i},e.detail)})}}start(){var e;this.getTag(this.paymentPointer)||((e=this.getTag())&&e.remove(),(e=window.document.createElement("meta")).setAttribute("name","monetization"),e.setAttribute("content",this.paymentPointer),window.document.querySelector("head").appendChild(e));return this.assertSupport(this.params.prompt),this}stop(){return(monetizationMeta=this.getTag())&&monetizationMeta.remove(),this}getTag(e=null){return window.document.querySelector('meta[name="monetization"]'+(e?'[content="'+e+'"]':""))}assertSupport(e){window.document.querySelector("head");if(!window.document.monetization){if(e){var t,r=i.a.detect();r.startsWith("ie")?t="https://microsoftedge.microsoft.com/addons/detail/ljionajlbinlfkdnpkloejeoogfgkojm":"firefox"===r?t="https://addons.mozilla.org/en-US/firefox/addon/coil/":"chrome"!==r&&"brave"!==r||(t="https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca"),t?window.confirm("This version of "+r+" does not support the Web WebMonetization API! \r\nWould you like to add the Web WebMonetization extension?")&&window.open(t,"_blank"):window.alert("Your browser does not support the Web WebMonetization API.")}return!1}return!0}static init(e,t={}){return a.instances[e]||(a.instances[e]=new a(e,t)),a.instances[e]}}a.instances={}},20:function(e,t,r){"use strict";r.r(t);var n=r(17);window.WebNative||(window.WebNative={}),window.WebNative.WebMonetization=n.a,window.WN||(window.WN={}),window.WN.WebMonetization=n.a}});
//# sourceMappingURL=web-monetization.js.map