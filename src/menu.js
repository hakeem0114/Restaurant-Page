//Menu Page

function menuPage(){
    //Initialize elements from HTML
    const content = document.querySelector("#content");
    const footer = document.querySelector(".footer");
    const body = document.querySelector("body");

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
     
     
    //Item-left Container 
    const itemContainer = document.createElement("div")
    itemContainer.classList.add("itemContainer")
    content.appendChild(itemContainer);
   //Item1
   const item1 = document.createElement("img");
   item1.classList.add("image");
    item1.src = "../images/menu.avif";
    item1.alt = "menu item";
    itemContainer.appendChild(item1);    
    //Item para
    const item1para = document.createElement("p");
    item1para.classList.add("menu-para");
     item1para.textContent = "STACKED FRIED CHICKEN - $19.00"
     itemContainer.appendChild(item1para);    
   //Item2
   const item2 = document.createElement("img");
   item2.classList.add("image");
    item2.src =  "../images/beef.jpg";
    item2.alt = "menu item";
    itemContainer.appendChild(item2);    
    //Item para
    const item2para = document.createElement("p");
    item2para.classList.add("menu-para");
     item2para.textContent = "FISH & CHIPS - $17.00"
     itemContainer.appendChild(item2para);    

    //Item-Right Container 
    const itemMiddle = document.createElement("div")
    itemMiddle.classList.add("itemContainer")
    itemContainer.appendChild(itemMiddle);
   //Item3
   const item3 = document.createElement("img");
   item3.classList.add("image");
    item3.src = "../images/beef.jpg";
    item3.alt = "menu item";
    itemMiddle.appendChild(item3);    
    //Item para
    const item3para = document.createElement("p");
    item3para.classList.add("menu-para");
     item3para.textContent = "BRAISED BEEF & VEGGIES - $25.00"
     itemMiddle.appendChild(item3para);    
   //Item4
   const item4 = document.createElement("img");
   item4.classList.add("image");
    item4.src =  "../images/beef.jpg";
    item4.alt = "menu item";
    itemMiddle.appendChild(item4);    
    //Item para
    const item4para = document.createElement("p");
    item4para.classList.add("menu-para");
     item4para.textContent = "CHICKEN PARMESAN  - $22.00"
     itemMiddle.appendChild(item4para);    


    //Footer 
    footer.style.backgroundColor = "rgba(88, 66, 66, 0.3)";
    footerImage.classList.add("footerImage");
    footerImage.src = "../images/git.svg";
    footer.appendChild(footerImage);//Makes it a child of the footer div

    footerImage.addEventListener("click", ()=>{
        window.open("https://github.com/hakeem0114/Restaurant-Page","_blank")
    })

}

export{
    menuPage
}