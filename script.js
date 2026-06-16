// =======================
// DONATION POPUP
// =======================

function donationMessage(){

alert(

"Donation Program Coming Soon\n\n" +

"We have not started accepting donations yet.\n" +

"बहुत जल्द donation facility शुरू की जाएगी.\n\n" +

"Thank you for supporting our mission."

);

}

// =======================
// CONTACT FORM
// =======================

const form = document.querySelector(".nancy");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert(

"Thank You!\n\n" +

"Your information has been submitted successfully."

);

form.reset();

});

}

// =======================
// SMOOTH NAVIGATION
// =======================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// =======================
// NAVBAR SHADOW
// =======================

window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if(window.scrollY > 40){

nav.style.boxShadow =
"0 10px 30px rgba(0,0,0,.35)";

}
else{

nav.style.boxShadow = "none";

}

});

// =======================
// COUNTER ANIMATION
// =======================

const counters =
document.querySelectorAll(".counter");

const startCounter = () => {

counters.forEach(counter => {

const target =
+counter.getAttribute("data-target");

let count = 0;

const speed = target / 120;

const updateCounter = () => {

count += speed;

if(count < target){

counter.innerText =
Math.ceil(count);

requestAnimationFrame(
updateCounter
);

}
else{

counter.innerText =
target.toLocaleString() + "+";

}

};

updateCounter();

});

};

// =======================
// START COUNTER ON SCROLL
// =======================

let started = false;

window.addEventListener("scroll", () => {

const stats =
document.querySelector(".stats");

if(!stats) return;

const triggerPoint =
stats.offsetTop - 500;

if(
window.scrollY > triggerPoint &&
!started
){

started = true;

startCounter();

}

});
// =======================
// SCROLL REVEAL ANIMATION
// =======================

const revealElements = document.querySelectorAll(

".card, .manifesto-card, .join-box, .nancy"

);

const revealOnScroll = () => {

revealElements.forEach(element => {

const windowHeight =
window.innerHeight;

const elementTop =
element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

element.style.opacity = "1";

element.style.transform =
"translateY(0)";

}

});

};

revealElements.forEach(element => {

element.style.opacity = "0";

element.style.transform =
"translateY(30px)";

element.style.transition =
"all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// =======================
// ACTIVE NAV LINK
// =======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(

link.getAttribute("href") ===
"#" + current

){

link.classList.add("active");

}

});

});

// =======================
// HOVER GLOW EFFECT
// =======================

const cards =
document.querySelectorAll(

".card, .manifesto-card"

);

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.boxShadow =
"0 15px 40px rgba(212,175,55,.15)";

});

card.addEventListener("mouseleave", () => {

card.style.boxShadow = "none";

});

});

// =======================
// LOADING ANIMATION
// =======================

window.addEventListener("load", () => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition =
"opacity .8s ease";

document.body.style.opacity = "1";

},100);

});

// =======================
// BUTTON RIPPLE EFFECT
// =======================

document.querySelectorAll(".btn")

.forEach(button => {

button.addEventListener(

"click",

function(e){

const ripple =
document.createElement("span");

const rect =
button.getBoundingClientRect();

const size =
Math.max(rect.width, rect.height);

ripple.style.width =
size + "px";

ripple.style.height =
size + "px";

ripple.style.left =
e.clientX - rect.left -
size/2 + "px";

ripple.style.top =
e.clientY - rect.top -
size/2 + "px";

ripple.style.position =
"absolute";

ripple.style.borderRadius =
"50%";

ripple.style.background =
"rgba(255,255,255,.4)";

ripple.style.transform =
"scale(0)";

ripple.style.animation =
"ripple .6s linear";

ripple.style.pointerEvents =
"none";

this.appendChild(ripple);

setTimeout(() => {

ripple.remove();

},600);

});

});

// =======================
// ADD RIPPLE STYLE
// =======================

const rippleStyle =
document.createElement("style");

rippleStyle.innerHTML = `

.btn{
position:relative;
overflow:hidden;
}

@keyframes ripple{

to{
transform:scale(4);
opacity:0;
}

}

.nav-links a.active{

color:#D4AF37 !important;

font-weight:700;

}

`;

document.head.appendChild(
rippleStyle
);

// =======================
// CONSOLE MESSAGE
// =======================

console.log(
"Shukla Janta Party Website Loaded Successfully"
);