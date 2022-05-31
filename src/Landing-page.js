import profile from "./profile.jpg";

let content = document.createElement("div");
content.setAttribute("id", "content");
content.classList.add("home");

//Actual content inside the div

//Title
let h2 = document.createElement("h2");
h2.textContent = "Welcome to Vagabonda";
content.appendChild(h2);

//Undertext
let undertext = document.createElement("p");
undertext.textContent = "Operating since 1908 through\n family lineage"
undertext.classList.add("undertext");
content.appendChild(undertext);

//Profile Image
let profilepic = document.createElement("img");
profilepic.src = profile;
profilepic.classList.add("profilepicture");
content.appendChild(profilepic);

//Final text
let text = document.createElement("p");
text.textContent = "Order online or come visit us!"
content.appendChild(text);

export default content;