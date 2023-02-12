
//Home Page On Load

function initialPageLoad(){
    //Initialize elements from HTML
    const content = document.querySelector("#content");

    //Creates elements for DOM
    const heading = document.createElement("h1");
    let homeImage = document.createElement("img");
    const para1 = document.createElement("p");
    

    //Header
    heading.textContent = "Autumn's Canteen";
    heading.classList.add("main-title"); //Creates a class in h1 tag for css
    content.appendChild(heading); //Makes heading a child of content div

    //Home-Image
    homeImage.classList.add("background-img");
    
    homeImage.src = "../images/background.avif";
    homeImage.alt = "Bearded waiter hands food to table with people";
    
    content.appendChild(homeImage);//Makes it a child of the content div
    

    //Paragraph
    para1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut adipisci \n expedita modi dolores veritatis ea quisquam, molestiae voluptatem sapiente harum vero velit officiis quidem, nostrum quae minima repellendus ipsa."
    para1.classList.add("home-para");

    content.appendChild(para1);    
    
}

export{
    initialPageLoad
}