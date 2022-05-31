//Import the content from style.css
import './style.css';

//Import all the different content for the site
import contactContent from "./Contact";
import landingContent from "./Landing-page";
import menuContent from "./Contact";


//Creates the header for the site
function createHeader() {
    //Create div for header
    let div = document.createElement("div");
    div.classList.add("header");

    //Website h1 logo
    let logo = document.createElement("h1");
    logo.textContent = "Vagabonda"

    //Add all the elements to the div
    div.appendChild(logo);
    return div;
}

//Creates the Navbar for the site
function createNav() {

    //Navbar
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");
    let home = document.createElement("li");
    home.textContent = "Home";
    let menu = document.createElement("li");
    menu.textContent = "Menu";
    let contact = document.createElement("li");
    contact.textContent = "Contact";
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    nav.appendChild(ul);

    return nav;
}

//Creates the content in the #content div
function createContent(content) {
    divcontent.replaceChildren(content);
}

//Creates the footer for the site
function createFooter() {
    let div = document.createElement("div");
    div.classList.add("footer");

    let p = document.createElement("p");
    p.textContent = "Copyright © The Odin Project 2022, Sani Letchu";
    div.appendChild(p)

    return div;
    
}
//Create the div for content
const divcontent = document.createElement("div");
divcontent.setAttribute("id", "content");


document.body.appendChild(createHeader());
document.body.appendChild(createNav());
document.body.appendChild(divcontent);
document.body.appendChild(createFooter());