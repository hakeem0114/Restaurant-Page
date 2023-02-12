
//Home Page On Load

function initialPageLoad(){
    //Initialize elements from HTML
    const content = document.querySelector("#content");
    const footer = document.querySelector(".footer");

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
    para1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut adipisci expedita modi dolores veritatis ea quisquam"
    para1.classList.add("home-para");
    content.appendChild(para1);    
    
    para2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut adipisci expedita modi dolores veritatis ea quisquam"
    para2.classList.add("home-para2");
    content.appendChild(para2); 

    //Footer 
    footer.style.backgroundColor = "rgba(88, 66, 66, 0.3)";
    footerImage.classList.add("footerImage");
    footerImage.src = "../images/git.svg"
    footer.appendChild(footerImage);//Makes it a child of the footer div
}

export{
    initialPageLoad
}