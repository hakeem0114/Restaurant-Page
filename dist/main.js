(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.querySelector(".footer");e.replaceChildren(),t.replaceChildren();const n=document.createElement("h1"),a=document.createElement("div");let d=document.createElement("img");const o=document.createElement("p"),c=document.createElement("p"),s=document.createElement("img");a.style.backgroundColor="rgba(88, 66, 66, 0.3)",a.classList.add("homeBack"),e.appendChild(a),n.textContent="Autumn's Canteen",n.classList.add("main-title"),a.appendChild(n),d.classList.add("background-img"),e.appendChild(d),o.innerHTML="We're in the business of feeding people, and we're out to change what that means by connecting the neighborhood <br /> to a dining experience similar to ingredients get combined with food.",o.classList.add("home-para"),e.appendChild(o),c.textContent="Feel free to try our main dishes & enjoy the free wifi on us!",c.classList.add("home-para2"),e.appendChild(c),t.style.backgroundColor="rgba(88, 66, 66, 0.3)",s.classList.add("footerImage"),s.src="../images/git.svg",t.appendChild(s),s.addEventListener("click",(()=>{window.open("https://github.com/hakeem0114/Restaurant-Page","_blank")}))}function t(){const e=document.querySelector("#content"),t=document.querySelector(".footer");document.querySelector("body").style.backgroundImage=" url(../images/menu.avif)",e.replaceChildren();const n=document.createElement("h1");n.classList.add("item-head"),n.textContent="Our Mains",e.appendChild(n);const a=document.createElement("div");a.classList.add("itemContainer"),e.appendChild(a);const d=document.createElement("img");d.classList.add("image"),d.src="../images/menu.avif",d.alt="menu item",a.appendChild(d);const o=document.createElement("p");o.classList.add("menu-para"),o.textContent="STACKED FRIED CHICKEN - $19.00",a.appendChild(o);const c=document.createElement("img");c.classList.add("image"),c.src="../images/beef.jpg",c.alt="menu item",a.appendChild(c);const s=document.createElement("p");s.classList.add("menu-para"),s.textContent="FISH & CHIPS - $17.00",a.appendChild(s);const i=document.createElement("div");i.classList.add("itemContainer"),a.appendChild(i);const r=document.createElement("img");r.classList.add("image"),r.src="../images/beef.jpg",r.alt="menu item",i.appendChild(r);const m=document.createElement("p");m.classList.add("menu-para"),m.textContent="BRAISED BEEF & VEGGIES - $25.00",i.appendChild(m);const l=document.createElement("img");l.classList.add("image"),l.src="../images/beef.jpg",l.alt="menu item",i.appendChild(l);const u=document.createElement("p");u.classList.add("menu-para"),u.textContent="CHICKEN PARMESAN  - $22.00",i.appendChild(u),t.style.backgroundColor="rgba(88, 66, 66, 0.3)",footerImage.classList.add("footerImage"),footerImage.src="../images/git.svg",t.appendChild(footerImage),footerImage.addEventListener("click",(()=>{window.open("https://github.com/hakeem0114/Restaurant-Page","_blank")}))}function n(){const e=document.querySelector("#content"),t=document.querySelector(".footer");document.querySelector("body").style.backgroundImage=" url(../images/contact.avif)",e.replaceChildren();const n=document.createElement("h3");n.classList.add("location"),n.innerHTML="Address: 825 Britannia Rd W, Mississauga, ON L5V 2X8. <br /> <br /> Hours: Mondays-Sundays from 2pm to 12am ",e.appendChild(n);const a=document.createElement("div");a.classList.add("orderContainer"),e.appendChild(a);const d=document.createElement("h2");d.classList.add("orderHead"),d.textContent="ORDER NOW",a.appendChild(d);const o=document.createElement("img");o.classList.add("uber"),o.src="../images/uber.png",o.alt="Uber Logo",a.appendChild(o),o.addEventListener("click",(()=>{window.open("https://www.ubereats.com/ca/near-me","_blank")}));const c=document.createElement("img");c.classList.add("doordash"),c.src="../images/doordash.png",c.alt="Uber Logo",a.appendChild(c),c.addEventListener("click",(()=>{window.open("https://www.doordash.com/restaurants-near-me/","_blank")})),t.style.backgroundColor="rgba(88, 66, 66, 0.3)",footerImage.classList.add("footerImage"),footerImage.src="../images/git.svg",t.appendChild(footerImage),footerImage.addEventListener("click",(()=>{window.open("https://github.com/hakeem0114/Restaurant-Page","_blank")}))}e(),document.querySelector(".menu").addEventListener("click",t),document.querySelector(".home").addEventListener("click",e),document.querySelector(".contact").addEventListener("click",n)})();