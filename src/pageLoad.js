
//Home Page On Load

function initialPageLoad(){
    //Initialize elements from HTML
    const content = document.querySelector("#content");
    const footer = document.querySelector(".footer");

     //Remove any exisiting DOM children (Prevent home children from remaining)
    content.replaceChildren();
    footer.replaceChildren(); 


    //Creates elements for DOM
    const heading = document.createElement("h1");
    const homeBack = document.createElement("div")
    let homeImage = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const footerImage =  document.createElement("img");
    

   //Home-Image-Backdrop
   homeBack.style.backgroundColor = "rgba(88, 66, 66, 0.3)";
   homeBack.classList.add("homeBack");
   content.appendChild(homeBack);

    //Header
    heading.textContent = "Autumn's Canteen";
    heading.classList.add("main-title"); //Creates a class in h1 tag for css
    homeBack.appendChild(heading); //Makes heading a child of content div

    //Home-Image
    homeImage.classList.add("background-img");
    content.appendChild(homeImage);//Makes it a child of the content div


    //Paragraph
    para1.innerHTML = "We're in the business of feeding people, and we're out to change what that means by connecting the neighborhood <br /> to a dining experience similar to ingredients get combined with food."
    para1.classList.add("home-para");
    content.appendChild(para1);    
    
    para2.textContent = "Feel free to try our main dishes & enjoy the free wifi on us!"
    para2.classList.add("home-para2");
    content.appendChild(para2); 

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
    initialPageLoad
}