(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\r\n    margin:0;\r\n    padding:0;\r\n    font-family:'Roboto', 'arial'\r\n}\r\n\r\nbody {\r\n    display:flex;\r\n    flex-direction:column;\r\n    height:100vh;\r\n}\r\n\r\n.main-header {\r\n    background-color:rgb(187, 187, 187);\r\n    color:blue;\r\n    font-size: 3rem;\r\n    height:10%;\r\n    text-align:center;\r\n    align-items: center;\r\n    padding-top: 1rem;\r\n    padding-bottom:1rem;\r\n}\r\n\r\n.search-box {\r\n    font-size: 1rem;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding:2rem;\r\n    margin-top:1rem;\r\n}\r\n\r\n.card-container {\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding:1rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.card {\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: repeat(7, 1fr);\r\n    border: 1px solid black;\r\n    justify-items: flex-start;\r\n    align-items: center;\r\n    border-radius:7px;\r\n    font-size:16px;\r\n}\r\n\r\n.card > * {\r\n    margin: 1rem;\r\n}\r\n\r\n.legend {\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n    gap:1rem;\r\n}\r\n\r\n#green-zone {\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: green;\r\n}\r\n\r\n#yellow-zone {\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: yellow;\r\n}\r\n\r\n#red-zone {\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: red;\r\n}\r\n\r\n.warnings {\r\n    display:flex;\r\n    justify-content: center;\r\n    gap:2rem;\r\n}\r\n\r\nli {\r\n    padding:.5rem;\r\n}\r\n\r\n.main-container {\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr;\r\n}\r\n\r\nbutton {\r\n    padding: .25rem;\r\n    color:black;\r\n    border: 1px rgb(81, 81, 255) dotted;\r\n    background-color:rgb(207, 215, 253);\r\n    border-radius: 3px;\r\n    font-size:18px;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgb(139, 158, 255);\r\n    border:1px solid blue;\r\n    cursor:pointer;\r\n}\r\n\r\ninput {\r\n    font-size:16px;\r\n    padding:3px;\r\n}\r\n\r\ninput:focus {\r\n    border: 1px solid blue\r\n}\r\n\r\n.city-search {\r\n    font-size: 22px;\r\n}",""]);const l=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],s=r.base?c[0]+r.base:c[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=l,n.splice(l,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=t(a[i]);n[l].references--}for(var c=r(e,o),s=0;s<a.length;s++){var d=t(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"73663a5b1826367bba4b.png",n=t.p+"73292682efac2551f419.png";var r=t(379),o=t.n(r),a=t(795),i=t.n(a),l=t(569),c=t.n(l),s=t(565),d=t.n(s),u=t(216),p=t.n(u),f=t(589),m=t.n(f),g=t(28),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),o()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;const b=document.querySelector(".submit-button"),h=document.querySelector(".query"),x=document.querySelector(".image-holder"),C=document.querySelector(".chart-holder");b.addEventListener("submit",(e=>{e.preventDefault()})),b.addEventListener("click",(async e=>{e.preventDefault(),""!==h.value&&await async function(e){let n=`http://api.openweathermap.org/geo/1.0/zip?zip=${e}&appid=d3293a04fec44f7f2ad2190b9795f011`;try{const t=await fetch(n,{mode:"cors"});if(!t.ok)throw new Error(`${e} not found`);const r=await t.json();!async function(e,n){let t=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&appid=d3293a04fec44f7f2ad2190b9795f011&units=imperial`;try{const e=await fetch(t,{mode:"cors"});if(!e.ok)throw new Error("Weather not found");!function(e){const{name:n,main:{temp:t,feels_like:r,humidity:o},wind:{speed:a}}=e;!function(e){let n=document.querySelector(".city-name"),t=document.querySelector(".temperature"),r=document.querySelector(".feels-like"),o=document.querySelector(".wind"),a=document.querySelector(".humidity");n.textContent=`${e.name}, ${e.sys.country}`,t.textContent=`${e.main.temp} °F`,r.textContent=`${e.main.feels_like} °F`,o.textContent=`${e.wind.speed} MPH`,a.textContent=`${e.main.humidity} %`,function(e){let n=document.querySelector(".card"),t=document.querySelector(".zone"),r=document.querySelector(".warning-label"),o=e.main.temp,a=e.main.humidity,i=e.wind.speed;o<=84&&o>50?(n.style.backgroundColor="#50C878",t.textContent="Green",r.textContent="80° or below is considered comfortable"):o>84&&o<90?a>=65||a<=90?(n.style.backgroundColor="yellow",t.textContent="Yellow - Caution",r="90° is beginning to feel uncomfortable"):a>=90&&(n.style.backgroundColor="red",t.textContent="Red - Danger",r.textContent="90° is beginning to feel uncomfortable"):o>=90&&o<94?a<55?(n.style.backgroundColor="yellow",t.textContent="Yellow - Caution",r.textContent="90° is beginning to feel uncomfortable"):(n.style.backgroundColor="red",t.textContent="Red - Danger",r.textContent="90° is beginning to feel uncomfortable"):o>=94&&o<100?a<50?(n.style.backgroundColor="yellow",t.textContent="Yellow - Caution",r.textContent="100° is uncomfortable and may be hazardous"):(n.style.backgroundColor="red",t.textContent="Red - Danger",r.textContent="100° is uncomfortable and may be hazardous"):o>=100?(n.style.backgroundColor="red",t.textContent="Red - Danger",r.textContent="110° is considered dangerous"):o>40&&o<=50?i<=15?(n.style.backgroundColor="#50C878",t.textContent="Green",r.textContent="30° is chilly and generally uncomfortable"):(n.style.backgroundColor="yellow",t.textContent="Yellow - Caution",r.textContent="30° is chilly and generally uncomfortable"):o>30&&o<=40?(n.style.backgroundColor="yellow",t.textContent="Yellow - Caution",r.textContent="30° is chilly and generally uncomfortable"):o<30&&o>=20?i<=5?(n.style.backgroundColor="yellow",t.textContent="Yellow - Caution",r.textContent="15° to 30° is cold"):(n.style.backgroundColor="red",t.textContent="Red - Danger",r.textContent="20° to 30° is cold"):o<20&&o>0?(n.style.backgroundColor="red",t.textContent="Red - Danger",r.textContent="20° to 0° is bitter cold with significant risk of frostbite"):o<=0?(n.style.backgroundColor="red",t.textContent="Red - Danger",r.textContent="-20° to -60° is extreme cold and frostbite is likely"):(n.style.backgroundColor="white",t.textContent="error")}(e)}(e)}(await e.json())}catch(e){return alert(e),null}}(r[0].lat,r[0].lon)}catch(e){return alert(e),null}}(h.value)}));const v=new Image;v.src=e,v.alt="Information on behavior of children in weather and various hazards",x.appendChild(v);const w=new Image;w.src=n,w.alt="Child Care Aware Weather Chart",C.appendChild(w)})()})();