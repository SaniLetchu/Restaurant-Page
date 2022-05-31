//Import all the food photos
import foodpic1 from "./food1.jpg";
import foodpic2 from "./food2.jpg";
import foodpic3 from "./food3.jpg";
import foodpic4 from "./food4.jpg";
import foodpic5 from "./food5.jpg";
import foodpic6 from "./food6.jpg";
import foodpic7 from "./food7.jpg";
import foodpic8 from "./food8.jpg";


//Main div
let content = document.createElement("div");
content.setAttribute("id", "content");
content.classList.add("menu");

//Title
let h2 = document.createElement("h2");
h2.textContent = "Menu";
content.appendChild(h2);

//Actual content inside the div
let foods = document.createElement("div");
foods.setAttribute("id", "foods");

//All of the foods (cards)
let food1 = document.createElement("div");
let food2 = document.createElement("div");
let food3 = document.createElement("div");
let food4 = document.createElement("div");
let food5 = document.createElement("div");
let food6 = document.createElement("div");
let food7 = document.createElement("div");
let food8 = document.createElement("div");

//Create image elements
let foodpicture1 = document.createElement("img");
foodpicture1.src = foodpic1;
foodpicture1.classList.add("foodpicture");
food1.appendChild(foodpicture1);

let foodpicture2 = document.createElement("img");
foodpicture2.src = foodpic2;
foodpicture2.classList.add("foodpicture");
food2.appendChild(foodpicture2);

let foodpicture3 = document.createElement("img");
foodpicture3.src = foodpic3;
foodpicture3.classList.add("foodpicture");
food3.appendChild(foodpicture3);

let foodpicture4 = document.createElement("img");
foodpicture4.src = foodpic8;
foodpicture4.classList.add("foodpicture");
food4.appendChild(foodpicture4);

let foodpicture5 = document.createElement("img");
foodpicture5.src = foodpic5;
foodpicture5.classList.add("foodpicture");
food5.appendChild(foodpicture5);

let foodpicture6 = document.createElement("img");
foodpicture6.src = foodpic6;
foodpicture6.classList.add("foodpicture");
food6.appendChild(foodpicture6);

let foodpicture7 = document.createElement("img");
foodpicture7.src = foodpic7;
foodpicture7.classList.add("foodpicture");
food7.appendChild(foodpicture7);

let foodpicture8 = document.createElement("img");
foodpicture8.src = foodpic4;
foodpicture8.classList.add("foodpicture");
food8.appendChild(foodpicture8);
//Should have looped through these...


//Append all of the created stuff to the main div
foods.appendChild(food1);
foods.appendChild(food2);
foods.appendChild(food3);
foods.appendChild(food4);
foods.appendChild(food5);
foods.appendChild(food6);
foods.appendChild(food7);
foods.appendChild(food8);
content.appendChild(foods);

export default content;