import { initialPageLoad } from "./pageLoad.js";
import { menuPage } from "./menu.js";

initialPageLoad(); //Page On Load

//Tab Switching
let tabSwitch  = (function(){


    const menu1 = document.querySelector(".menu");
    menu1.addEventListener("click", menuPage);


    const homePage = document.querySelector(".home");
    homePage.addEventListener("click", initialPageLoad);


    const contactPage = document.querySelector(".contact");
    homePage.addEventListener("click", initialPageLoad);

})(); //Self executing anonymoous function 

