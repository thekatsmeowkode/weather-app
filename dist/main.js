(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"73663a5b1826367bba4b.png",n=e.p+"73292682efac2551f419.png",o=document.querySelector(".submit-button"),r=document.querySelector(".query"),l=document.querySelector(".image-holder"),a=document.querySelector(".chart-holder"),i=`${rgb(0,190,0)}`;o.addEventListener("submit",(e=>{e.preventDefault()})),o.addEventListener("click",(async e=>{e.preventDefault(),""!==r.value&&await async function(e){let t=`http://api.openweathermap.org/geo/1.0/direct?q=${e}}&limit=1&appid=d3293a04fec44f7f2ad2190b9795f011`;try{const n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error(`${e} not found`);const o=await n.json();!async function(e,t){let n=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=d3293a04fec44f7f2ad2190b9795f011&units=imperial`;try{const e=await fetch(n,{mode:"cors"});if(!e.ok)throw new Error("Weather not found");!function(e){const{name:t,main:{temp:n,feels_like:o,humidity:r},wind:{speed:l}}=e;!function(e){let t=document.querySelector(".city-name"),n=document.querySelector(".temperature"),o=document.querySelector(".feels-like"),r=document.querySelector(".wind"),l=document.querySelector(".humidity");t.textContent=e.name,n.textContent=`${e.main.temp} °F`,o.textContent=`${e.main.feels_like} °F`,r.textContent=`${e.wind.speed} MPH`,l.textContent=`${e.main.humidity} %`,function(e){let t=document.querySelector(".card"),n=document.querySelector(".zone"),o=document.querySelector(".warning-label"),r=e.main.temp,l=e.main.humidity,a=e.wind.speed;r<=84&&r>50?(t.style.backgroundColor=i,n.textContent="Green",o.textContent="80° or below is considered comfortable"):r>84&&r<90?l>=65||l<=90?(t.style.backgroundColor="yellow",n.textContent="Yellow - Caution",o="90° is beginning to feel uncomfortable"):l>=90&&(t.style.backgroundColor="red",n.textContent="Red - Danger",o.textContent="90° is beginning to feel uncomfortable"):r>=90&&r<94?l<55?(t.style.backgroundColor="yellow",n.textContent="Yellow - Caution",o.textContent="90° is beginning to feel uncomfortable"):(t.style.backgroundColor="red",n.textContent="Red - Danger",o.textContent="90° is beginning to feel uncomfortable"):r>=94&&r<100?l<50?(t.style.backgroundColor="yellow",n.textContent="Yellow - Caution",o.textContent="100° is uncomfortable and may be hazardous"):(t.style.backgroundColor="red",n.textContent="Red - Danger",o.textContent="100° is uncomfortable and may be hazardous"):r>=100?(t.style.backgroundColor="red",n.textContent="Red - Danger",o.textContent="110° is considered dangerous"):r>40&&r<=50?a<=15?(t.style.backgroundColor=i,n.textContent="Green",o.textContent="30° is chilly and generally uncomfortable"):(t.style.backgroundColor="yellow",n.textContent="Yellow - Caution",o.textContent="30° is chilly and generally uncomfortable"):r>30&&r<=40?(t.style.backgroundColor="yellow",n.textContent="Yellow - Caution",o.textContent="30° is chilly and generally uncomfortable"):r<30&&r>=20?a<=5?(t.style.backgroundColor="yellow",n.textContent="Yellow - Caution",o.textContent="15° to 30° is cold"):(t.style.backgroundColor="red",n.textContent="Red - Danger",o.textContent="20° to 30° is cold"):r<20&&r>0?(t.style.backgroundColor="red",n.textContent="Red - Danger",o.textContent="20° to 0° is bitter cold with significant risk of frostbite"):r<=0?(t.style.backgroundColor="red",n.textContent="Red - Danger",o.textContent="-20° to -60° is extreme cold and frostbite is likely"):(t.style.backgroundColor="white",n.textContent="error")}(e)}(e)}(await e.json())}catch(e){return alert(e),null}}(o[0].lat,o[0].lon)}catch(e){return alert(e),null}}(r.value)}));const c=new Image;c.src=t,c.alt="Information on behavior of children in weather and various hazards",l.appendChild(c);const d=new Image;d.src=n,d.alt="Child Care Aware Weather Chart",a.appendChild(d)})();