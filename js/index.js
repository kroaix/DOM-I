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

topNav[0].textContent = siteContent["nav"]["nav-item-1"];
topNav[1].textContent = siteContent["nav"]["nav-item-2"];
topNav[2].textContent = siteContent["nav"]["nav-item-3"];
topNav[3].textContent = siteContent["nav"]["nav-item-4"];
topNav[4].textContent = siteContent["nav"]["nav-item-5"];
topNav[5].textContent = siteContent["nav"]["nav-item-6"];

topNav.forEach((item) => {
  item.style.color = "green";
});

let nav = document.querySelector("nav");
let homeLink = document.createElement("a");
let blogLink = document.createElement("a");

blogLink.textContent = "Blog";
blogLink.setAttribute('href', "#");
blogLink.style.color = "green";

homeLink.textContent = "Home";
homeLink.setAttribute('href', "#");
homeLink.style.color = "green";

nav.appendChild(blogLink);
nav.prepend(homeLink);

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// CTA 
let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.innerHTML = siteContent['cta']['h1'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent['cta']['button'];

// MAIN CONTENT
let pageContentH4 = document.querySelectorAll(".top-content .text-content h4, .bottom-content .text-content h4");
pageContentH4[0].textContent = siteContent["main-content"]["features-h4"];
pageContentH4[1].textContent = siteContent["main-content"]["about-h4"];
pageContentH4[2].textContent = siteContent["main-content"]["services-h4"];
pageContentH4[3].textContent = siteContent["main-content"]["product-h4"];
pageContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let pageContentP = document.querySelectorAll(".top-content .text-content p, .bottom-content .text-content p");
pageContentP[0].textContent = siteContent["main-content"]["features-content"]; 
pageContentP[1].textContent = siteContent["main-content"]["about-content"]; 
pageContentP[2].textContent = siteContent["main-content"]["services-content"]; 
pageContentP[3].textContent = siteContent["main-content"]["product-content"]; 
pageContentP[4].textContent = siteContent["main-content"]["vision-content"];

// CONTACT
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// FOOTER
let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];