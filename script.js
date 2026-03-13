/* =========================
SCROLL ENTRE SEÇÕES
========================= */

function scrollToSection(sectionId){

document
.getElementById(sectionId)
.scrollIntoView({behavior:"smooth"})

}



/* =========================
CURSOR PERSONALIZADO
========================= */

const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})



/* =========================
CIRCULOS SEGUINDO O MOUSE
========================= */

const circles = document.querySelectorAll(".circle")

document.addEventListener("mousemove",(e)=>{

const x = e.clientX
const y = e.clientY

circles.forEach(circle=>{

const speed = circle.getAttribute("data-speed")

const moveX = (window.innerWidth/2 - x) / speed
const moveY = (window.innerHeight/2 - y) / speed

circle.style.transform =
`translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`

})

})



/* =========================
PARTÍCULAS DO FUNDO
========================= */

tsParticles.load("particles", {

particles:{

number:{
value:80
},

color:{
value:["#ff3c2f","#ff7b00"]
},

opacity:{
value:0.8
},

size:{
value:3
},

links:{
enable:true,
distance:150,
color:"#ff3c2f",
opacity:0.6,
width:1
},

move:{
enable:true,
speed:1.5
}

},

interactivity:{

events:{

onHover:{
enable:true,
mode:"repulse"
}

}

}

})



/* =========================
ANIMAÇÕES AO ROLAR
========================= */

ScrollReveal().reveal('.hero-text',{

distance:"80px",
duration:1200,
origin:"left"

})

ScrollReveal().reveal('.circles',{

distance:"80px",
duration:1500,
origin:"right"

})

ScrollReveal().reveal('.about-container',{

distance:"80px",
duration:1200,
origin:"bottom"

})

ScrollReveal().reveal('.card',{

interval:200,
distance:"40px",
origin:"bottom"

})

ScrollReveal().reveal('.links',{

distance:"60px",
origin:"bottom",
duration:1200

})