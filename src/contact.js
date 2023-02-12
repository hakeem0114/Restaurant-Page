//Contact Page

function contactPage(){
    //Initialize elements from HTML
    const content = document.querySelector("#content");
    const footer = document.querySelector(".footer");
    const body = document.querySelector("body");

    //Background Image
    body.style.backgroundImage = " url(../images/contact.avif)";

    //Remove any exisiting DOM children (Prevent home children from remaining)
    content.replaceChildren(); //Takes no processing time since its not re-calling the DOM. 
                               //So, a better space completexity than a ForEach

              
    //Contact
    const location= document.createElement("h3");
    location.classList.add("location");
     location.innerHTML = "Address: 825 Britannia Rd W, Mississauga, ON L5V 2X8. <br /> <br /> Hours: Mondays-Sundays from 2pm to 12am "
     content.appendChild(location);   
 
    
      //Online Delivery
    const orderContainer = document.createElement("div")
    orderContainer.classList.add("orderContainer")
    content.appendChild(orderContainer);

    //Head
    const orderHead= document.createElement("h2");
    orderHead.classList.add("orderHead");
     orderHead.textContent = "ORDER NOW"
     orderContainer.appendChild(orderHead);   

   //Images
   const uber= document.createElement("img");
   uber.classList.add("uber");
    uber.src = "../images/uber.png";
    uber.alt = "Uber Logo";
    orderContainer.appendChild(uber); 
    uber.addEventListener("click", ()=>{
        window.open("https://www.ubereats.com/ca/near-me","_blank")
    })

   

    const doordash= document.createElement("img");
    doordash.classList.add("doordash");
     doordash.src = "../images/doordash.png";
     doordash.alt = "Uber Logo";
     orderContainer.appendChild(doordash);   
     doordash.addEventListener("click", ()=>{
        window.open("https://www.doordash.com/restaurants-near-me/","_blank")
    })



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
    contactPage
}