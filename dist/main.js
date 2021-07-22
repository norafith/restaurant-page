(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n    font-size: 18px;\r\n    background-color: #634832;\r\n    color: #ece0d1;\r\n    margin: 0;\r\n}\r\n\r\n.body-home {\r\n    background-image: url('https://wallpaperaccess.com/full/373974.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: top 70px center;\r\n}\r\n\r\nnav {\r\n    padding: 10px 0;\r\n    position: relative;\r\n    background-color: #38220f;\r\n    background-repeat: no-repeat;\r\n    height: 70px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n#nav-list {\r\n    position: absolute;\r\n    bottom: 0;\r\n    margin: 0;\r\n    padding-left: 0;\r\n    width: inherit;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n#nav-list:first-child {\r\n    border: none;\r\n}\r\n\r\n#nav-list li {\r\n    padding: 8px;\r\n    display: inline-block;\r\n    flex-grow: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-list li:hover {\r\n    background-color: #2b1a0b;\r\n}\r\n\r\n.active-nav-section {\r\n    background-color: #2b1a0b;\r\n    font-weight: 600;\r\n    border-bottom: 1px solid #ece0d1;\r\n}\r\n\r\n#nav-title {\r\n    margin: 0;\r\n    margin-bottom: 5px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n#content {\r\n    margin: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.info-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 500px;\r\n    margin: auto;\r\n    padding: 25px;\r\n    background-color: rgba(56, 34, 15, 0.7);\r\n    border-radius: 25px;\r\n}\r\n\r\n.home-info-secondary-container span {\r\n    display: block;\r\n    margin: 20px;\r\n    font-size: 1.1em;\r\n    font-weight: 600;\r\n}\r\n\r\n.menu-section-list {\r\n    padding: 0;\r\n}\r\n\r\n.menu-section-list li {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 400px;\r\n    height: 400px;\r\n    text-align: center;\r\n    border: 1px solid #ece0d1;\r\n    border-radius: 25px;\r\n    margin: 15px;\r\n}\r\n\r\n.menu-section-list li:hover > .menu-item-description {\r\n    display: block;\r\n    background-color: rgba(56, 34, 15, 0.5);\r\n    color: #ece0d1;\r\n}\r\n\r\n.menu-item-picture {\r\n    border-radius: inherit;\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n\r\n.menu-item-description {\r\n    display: block;\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    transition: 0.2s;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n}\r\n\r\n.menu-item-description span {\r\n    display: block;\r\n    margin: 5px;\r\n    font-weight: 600;\r\n}\r\n\r\n#team-members-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n}\r\n\r\n.team-member {\r\n    display: inline-flex;\r\n    margin: 15px;\r\n    border: 1px solid #ece0d1;\r\n    border-radius: 25px;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n\r\n.team-member-picture {\r\n    border-top-left-radius: inherit;\r\n    border-top-right-radius: inherit;\r\n    width: 300px;\r\n    height: 300px;\r\n    border-bottom: 1px solid #ece0d1;\r\n}\r\n\r\n.team-member span {\r\n    margin-top: 10px;   \r\n}\r\n\r\n.team-position-text {\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    #home-info-container {\r\n        width: fit-content;\r\n    }\r\n\r\n    .menu-section-list li {\r\n        width: 300px;\r\n        height: 300px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n    .menu-section-list li {\r\n        height: 200px;\r\n        width: 200px;\r\n    }\r\n}\r\n",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(n[p].references++,n[p].updater(m)):n.push({identifier:u,updater:i(m,r),references:1}),a.push(u)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var c=r(e,i),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(){function e(e,n){this.label=e,this.value=n}const n=document.querySelector("#content");document.body.classList.add("body-home");const t=document.createElement("div");t.setAttribute("id","heading-text-container"),n.appendChild(t);const r=document.createElement("h1");r.textContent="The best coffee you've ever tasted.";const i=document.createElement("h3");i.textContent="Working since 1979.",t.appendChild(r),t.appendChild(i);const o=document.createElement("div");o.classList.add("info-container"),n.appendChild(o);const a=document.createElement("div");a.classList.add("home-info-secondary-container"),o.appendChild(a);const s=document.createElement("div");s.classList.add("home-info-secondary-container"),o.appendChild(s);const c=[new e("Working hours: ","08:00 - 20:00"),new e("Address: ","221b Baker Street, London"),new e("Email: ","not-exist@site.com")];for(let e of c){let n=document.createElement("span");n.textContent=e.label,a.appendChild(n);let t=document.createElement("span");t.textContent=e.value,s.appendChild(t)}}function n(){function e(e,n){this.heading=e,this.dishes=n}function n(e,n,t){this.name=e,this.price=n,this.picture=t}const t=document.querySelector("#content");document.body.classList.remove("body-home");const r=document.createElement("div");r.setAttribute("id","menu-container"),t.appendChild(r);const i=[new e("Coffee",[new n("Cappucino","4$","https://www.pismenica.rs/wp-content/uploads/2015/10/kapucino.jpg"),new n("Latte","4$","https://sun9-58.userapi.com/impg/dYkrh_rLM5zIz-MiQk861JsADzlyXoA0PxMf3A/Q4mIPcjBNGE.jpg?size=540x540&quality=96&sign=5acb385a5d48273eb0dee7be7886d4eb&type=album"),new n("Americano","3$","https://www.acouplecooks.com/wp-content/uploads/2020/10/How-to-make-an-Americano-004.jpg")]),new e("Tea",[new n("Black","2$","https://media.istockphoto.com/photos/transparent-glass-cup-of-black-tea-isolated-picture-id1018445646?k=6&m=1018445646&s=612x612&w=0&h=vJISDoLi4DlEarqNnLo7FW_id596H_c5xETzkCm9c6w="),new n("Green","2$","https://www.verywellfit.com/thmb/7ViWi5n1cTaoGRculFnbyyxdcoA=/1989x1507/filters:fill(FFDB5D,1)/greentea-3cba398ca5fb481b972d247c7833a720.jpg")]),new e("Bakery",[new n("Croissant","3$","https://www.corman.pro/uploads/cache/400x400/uploads/recip/recipe/2283/dsc4113.png"),new n("Chocolate Cupcake","3$","https://handletheheat.com/wp-content/uploads/2016/02/best-chocolate-cupcakes-recipe-SQUARE.jpg"),new n("Apple Turnover","3$","https://www.marcellinaincucina.com/wp-content/uploads/2020/02/Apple-Turnovers-9.jpg")]),new e("Sandwich",[new n("Ham","3$","https://indianakitchen.com/wp-content/uploads/2015/03/Ham-Sandwich.jpg"),new n("Veg","3$","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F12%2F06%2F2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg&q=85"),new n("Cheese","3$","https://crumblejack.com/wp-content/uploads/2018/03/demo-sandwich.jpg")])];for(let e of i){const n=document.createElement("div");n.classList.add("menu-section"),n.classList.add(e.heading.toLowerCase()),r.appendChild(n);const t=document.createElement("h3");t.textContent=e.heading,n.appendChild(t);const i=document.createElement("ul");i.classList.add("menu-section-list");for(let n of e.dishes){const e=document.createElement("li"),t=document.createElement("span");t.classList.add("menu-item-description");const r=document.createElement("img");r.classList.add("menu-item-picture"),r.src=n.picture;for(let e in n)if("picture"!=e){let r=document.createElement("span");r.classList.add(`${e}-description-text`),r.textContent=n[e],t.appendChild(r)}i.appendChild(e),e.appendChild(r),e.appendChild(t)}n.appendChild(i)}}function r(){function e(e,n,t,r){this.name=e,this.icon=n,this.phoneNumber=t,this.position=r}const n=document.querySelector("#content");document.body.classList.remove("body-home");const t=document.createElement("h3");t.textContent="Our team",t.classList.add("content-heading-text"),n.appendChild(t);const r=document.createElement("div");r.setAttribute("id","team-members-container"),n.appendChild(r);const i=[new e("Helen","https://image.flaticon.com/icons/png/512/2922/2922743.png","123-456-7890","Manager"),new e("Mark","https://image.flaticon.com/icons/png/512/2922/2922722.png","123-456-7890","Barista"),new e("John","https://image.flaticon.com/icons/png/512/2922/2922539.png","123-456-7890","Owner"),new e("Ann","https://image.flaticon.com/icons/png/512/2922/2922753.png","123-456-7890","Barista")];for(let e of i){const n=document.createElement("div");n.classList.add("team-member"),r.appendChild(n);const t=document.createElement("img");t.classList.add("team-member-picture"),t.src=e.icon,n.appendChild(t);const i=document.createElement("span");i.classList.add("team-member-name"),i.textContent=e.name,n.appendChild(i);const o=document.createElement("span");o.classList.add("team-member-phone"),o.textContent=e.phoneNumber,n.appendChild(o);const a=document.createElement("span");a.classList.add("team-position-text"),a.textContent=e.position,n.appendChild(a)}const o=document.createElement("h3");o.textContent="About Us",n.appendChild(o);const a=document.createElement("p");a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius. Nisl vel pretium lectus quam id. Sed blandit libero volutpat sed cras ornare arcu. Nisi est sit amet facilisis magna etiam tempor orci eu. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Viverra vitae congue eu consequat ac. Odio ut sem nulla pharetra diam sit amet nisl. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Vulputate odio ut enim blandit. Pretium fusce id velit ut tortor pretium viverra suspendisse. Nibh cras pulvinar mattis nunc sed blandit libero. In fermentum et sollicitudin ac orci phasellus. Arcu cursus euismod quis viverra nibh cras. Nisi lacus sed viverra tellus in hac habitasse. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Posuere morbi leo urna molestie at elementum eu facilisis. Tellus molestie nunc non blandit massa enim nec dui. Vitae et leo duis ut diam. Enim tortor at auctor urna nunc id cursus. Morbi tempus iaculis urna id volutpat. Varius morbi enim nunc faucibus a pellentesque sit. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eu volutpat odio facilisis mauris sit amet massa. Cras sed felis eget velit aliquet sagittis id. A lacus vestibulum sed arcu non odio euismod. Lectus mauris ultrices eros in. Purus in massa tempor nec feugiat nisl pretium fusce id.",n.appendChild(a)}var i=t(379),o=t.n(i),a=t(795),s=t.n(a),c=t(569),d=t.n(c),l=t(565),u=t.n(l),p=t(216),m=t.n(p),h=t(589),f=t.n(h),b=t(424),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),o()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals,function(){const t=document.querySelector("#content");document.body.classList.remove("body-home");const i=document.createElement("nav");document.body.insertBefore(i,t);const o=["Home","Menu","About"],a=document.createElement("ul");a.setAttribute("id","nav-list");const s=document.createElement("h1");s.textContent="Saturn Coffee",s.setAttribute("id","nav-title"),i.appendChild(s),i.appendChild(a);for(let s of o){let o=document.createElement("li");o.addEventListener("click",(e=>{t.querySelectorAll("*").forEach((e=>{try{t.removeChild(e)}catch(e){}}))})),o.addEventListener("click",(e=>{i.querySelectorAll("li").forEach((e=>{e.classList.remove("active-nav-section")})),e.target.classList.add("active-nav-section")})),"Home"==s?o.addEventListener("click",e):"Menu"==s?o.addEventListener("click",n):"About"==s&&o.addEventListener("click",r),o.textContent=s,o.classList.add("nav-section"),o.classList.add(`${s.toLowerCase()}-nav-section`),a.appendChild(o)}i.querySelector(".home-nav-section").click()}()})()})();