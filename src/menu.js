//Menu Page

function menuPage(){
    //Initialize elements from HTML
    const content = document.querySelector("#content");
    const footer = document.querySelector(".footer");
    const body = document.querySelector("body");

    //Content
    content.style.gridTemplateColumns = "50px 50px 50px";

    //Background Image
    body.style.backgroundImage = " url(../images/menu.avif)";

    //Remove any exisiting DOM children (Prevent home children from remaining)
    content.replaceChildren(); //Takes no processing time since its not re-calling the DOM. 
                               //So, a better space completexity than a ForEach

    //Header
    const itemMenu= document.createElement("h1");
    itemMenu.classList.add("item-head");
     itemMenu.textContent = "Our Mains"
     content.appendChild(itemMenu);    


   //Item1
   const item1 = document.createElement("img");
   item1.classList.add("image");
    item1.src = "../images/menu.avif";
    item1.alt = "menu item";
    content.appendChild(item1);    
    //Item para
    const item1para = document.createElement("p");
    item1para.classList.add("menu-para");
     item1para.textContent = "STACKED FRIED CHICKEN - $19.00"
     content.appendChild(item1para);    

   //Item2
   const item2 = document.createElement("img");
   item2.classList.add("image");
    item2.src = "../images/menu.avif";
    item2.alt = "menu item";
    content.appendChild(item2);    
    //Item para
    const item2para = document.createElement("p");
    item2para.classList.add("menu-para");
     item2para.textContent = "STACKED FRIED CHICKEN - $19.00"
     content.appendChild(item2para);    



    //Footer 
    footer.style.backgroundColor = "rgba(88, 66, 66, 0.3)";
    footerImage.classList.add("footerImage");
    footerImage.src = "../images/git.svg"
    footer.appendChild(footerImage);//Makes it a child of the footer div

    footerImage.addEventListener("click", ()=>{
        window.open("https://github.com/hakeem0114/Restaurant-Page","_blank")
    })

}

export{
    menuPage
}