const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br/>Is<br/>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "stretch": {
    "button" : "Click Here"
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br/> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// NAV

let topNav = document.querySelectorAll("nav a");
topNav.forEach((item, i) => {
  item.textContent = siteContent["nav"][`nav-item-${i + 1}`];
  item.style.color = "SteelBlue";
});

let nav = document.querySelector("nav");
let newLinks = ["Home", "Blog"];

newLinks.forEach(link => {
  let newLink = document.createElement("a");
  newLink.setAttribute('href', "#");
  newLink.style.color = "SteelBlue";
  if (link === "Blog") {
    newLink.textContent = "Blog";
    nav.appendChild(newLink);
  } else if (link === "Home") {
    newLink.textContent = "Home";
    nav.prepend(newLink);
  };
});

let links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("mouseenter", (event) => {
    event.target.style.color = "#568ebd";
  });
  link.addEventListener("mouseleave", (event) => {
    event.target.style.color = "#4682b4";
  });
  link.style.textDecoration = "none";
});

let header = document.querySelector("header");
header.style.padding = "20px";
header.style.backgroundColor = "AliceBlue";


// IMAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// CTA 
let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent['cta']['button'];

// MAIN CONTENT
let htmlH4 = document.querySelectorAll(".text-content h4");
let jsH4 = Array.from(Object.keys(siteContent["main-content"]).filter(item => item.includes("h4")));
let htmlP = document.querySelectorAll(".text-content p");
let jsP = Array.from(Object.keys(siteContent["main-content"]).filter(item => item.includes("content")));

for(let i = 0; i < jsH4.length; i++){
  htmlH4[i].textContent = siteContent["main-content"][jsH4[i]];
  htmlP[i].textContent = siteContent["main-content"][jsP[i]];
};

// NEW BUTTON



// CONTACT
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
let contactJS = Array.from(Object.values(siteContent["contact"]).splice(1, 3));

contactP.forEach((element, i) => {
  element.innerHTML = contactJS[i];
});

// FOOTER
let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

let footer = document.querySelector("footer");
footer.style.backgroundColor = "AliceBlue";
footer.style.color = "SteelBlue";
footer.style.height = "50px";
footer.style.marginBottom = "0";
footer.style.padding = "40px";