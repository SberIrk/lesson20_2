(()=>{"use strict";var t={314:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,':root {\n\t--background: #007af7;\n\t--white-text: #fff;\n\t--hover-text: #222;\n\t--button-background: #fff;\n\t--button-background-hover: #000;\n\t--button-text: #007af7;\t\n}\n\n*, *::after, *::before {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;\n}\n\n.cookie-consent {\n\tdisplay: flex;\n\talign-content: center;\n\talign-items: center;\n\tpadding: 1rem 2rem;\n\tbackground: var(--background);\n\tcolor: var(--white-text);\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tfont-size: 1rem;\n\tgap: 2rem;\n\topacity: 1;\n\tvisibility: visible;\n\tflex-wrap: wrap;\n}\n\n.cookie-consent.hide {\n\topacity: 0;\n\tvisibility: hidden;\n}\n\n.cookie-consent a {\n\tcolor: var(--white-color);\n}\n\n.cookie-consent a:hover {\n\tcolor: var(--hover-text);\n}\n\n.cookie-consent__text {\n\tflex: 8 768px;\n}\n\n.cookie-consent__button {\n\tdisplay: block;\n\tflex: 1 150px;\n\tbackground: var(--button-background);\n\tcolor: var(--button-text);\n\tborder: none;\n\tpadding: 0.4rem 1.2rem;\n\tcursor: pointer;\n\tborder-radius: 20px;\n\tfont-size: 1rem;\n}\n\n.cookie-consent__button:hover {\n\tbackground: var(--button-background-hover);\n\t\tcolor: var(--white-text);\n}',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var p=n(f),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var v=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:v,references:1})}i.push(f)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var l=n(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),l=n.n(u),f=n(589),p=n.n(f),d=n(314),v={};function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function m(t,e){y(t,e),e.add(t)}function y(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,w(t,e,"get"))}function w(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function x(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(d.Z,v),d.Z&&d.Z.locals&&d.Z.locals;var k=new WeakMap,S=new WeakSet,T=new WeakSet,C=new WeakSet,E=new WeakSet;function _(){var t,e,n;t=this,e=k,n=document.querySelector(".cookie-consent"),function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,w(t,e,"set"),n),g(this,k).addEventListener("click",x(this,T,I).bind(this)),g(this,k).style.display=x(this,E,j).call(this)}function I(t){t.target.closest(".cookie-consent__button")&&(x(this,C,M).call(this),g(this,k).style.display="none")}function M(){localStorage.setItem("winCacheSiteOK","1")}function j(){return"1"===localStorage.getItem("winCacheSiteOK")?"none":"flex"}new(b((function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,E),m(this,C),m(this,T),m(this,S),n={writable:!0,value:void 0},y(this,e=k),e.set(this,n),x(this,S,_).call(this)})))})()})();