import { initialPageLoad } from "./pageLoad.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

initialPageLoad(); //Page On Load

//Tab Switching
let tabSwitch  = (function(){


    const menu1 = document.querySelector(".menu");
    menu1.addEventListener("click", menuPage);


    const homePage = document.querySelector(".home");
    homePage.addEventListener("click", initialPageLoad);


    const contact1 = document.querySelector(".contact");
    contact1.addEventListener("click", contactPage);

})(); //Self executing anonymoous function 

