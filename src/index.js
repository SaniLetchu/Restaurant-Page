//Import the content from style.css
import './style.css';

//Import pictures
import background from "./restaurant.jpg";

//Import all the different content for the site
import contactContent from "./Contact";
import landingContent from "./Landing-page";
import menuContent from "./Contact";


//Creates the header for the site
function createHeader() {

}

//Creates the content in the #content div
function createContent(content) {
    divcontent.replaceChildren(content);
}

//Creates the footer for the site
function createFooter() {
    
}
//Create the div for content
const divcontent = document.createElement("div");
divcontent.setAttribute("id", "content");



document.body.appendChild(divcontent);