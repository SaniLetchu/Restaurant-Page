let content = document.createElement("div");
content.setAttribute("id", "content");
content.classList.add("contact");

//Actual content inside the div

//Title
let h2 = document.createElement("h2");
h2.textContent = "Contact Info";
content.appendChild(h2);

let phone = document.createElement("p");
phone.textContent = "📞 095863627";
content.appendChild(phone);


let address = document.createElement("p");
address.textContent = "🏠 Restaurant Vagabonda, Mantelikuja, Vantaa, Finland"
content.appendChild(address);

let googlemaps = document.createElement("iframe")
googlemaps.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.4303279600406!2d24.802732316426837!3d60.25634094339136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df6e4045d0359%3A0xfac7e88580fc23e4!2sRavintola%20Vagabonda!5e0!3m2!1sfi!2sfi!4v1654008260437!5m2!1sfi!2sfi";
content.appendChild(googlemaps);

export default content;