const Burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

Burger.addEventListener('click', () => {
    nav.classList.toggle("show-nav")
    // Burger.style.display = "none"
    // nav.style.visibility = "visible"
})


const arrow = document.querySelectorAll(".Arrow");
const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");
const slide = document.querySelectorAll(".Slide");
const push = document.querySelector(".Push");



var sectionIndex = 0

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
    push.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
    // loop = true;
});
leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 3;
    push.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
});
function autoplayCarousel() {
    if (sectionIndex === slide.length+1) {
        sectionIndex = -1;
    }
    sectionIndex++
    push.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    loop = true;
}


setInterval(() => {
    autoplayCarousel();
}, 4000);

let circle = document.querySelector('.circle');
let circleValue = document.querySelector('.value');
let stratvalue = 0;
let endvalue = 85;
let Progress = setInterval(()=>{
    stratvalue++;
    circle.style.background = `conic-gradient(#ededed ${stratvalue *3.6}deg, #0CAA7D 0deg)`;
    circleValue.textContent =`${stratvalue}%`
    if(stratvalue == endvalue) {
        clearInterval(Progress)
    }
    // console.log(stratvalue);  
}, 100);

let circle2 = document.querySelector('.circle2');
let circleValue2 = document.querySelector('.value2');
let stratvalue2 = 0;
let endvalue2 = 55;
let Progress2 = setInterval(()=>{
    stratvalue2++;
    circle2.style.background = `conic-gradient(#ededed ${stratvalue2 *3.6}deg, #0CAA7D 0deg)`;
    circleValue2.textContent =`${stratvalue2}%`
    if(stratvalue == endvalue2) {
        clearInterval(Progress2)
    }
    // console.log(stratvalue);  
}, 100);

let circle3 = document.querySelector('.circle3');
let circleValue3 = document.querySelector('.value3');
let stratvalue3 = 0;
let endvalue3 = 65;
let Progress3 = setInterval(()=>{
    stratvalue3++;
    circle3.style.background = `conic-gradient(#ededed ${stratvalue3 *3.6}deg, #0CAA7D 0deg)`;
    circleValue3.textContent =`${stratvalue3}%`
    if(stratvalue == endvalue3) {
        clearInterval(Progress3)
    }
    // console.log(stratvalue);  
}, 100);
let circle4 = document.querySelector('.circle4');
let circleValue4 = document.querySelector('.value4');
let stratvalue4 = 0;
let endvalue4 = 85;
let Progress4 = setInterval(()=>{
    stratvalue4++;
    circle4.style.background = `conic-gradient(#ededed ${stratvalue4 *3.6}deg, #0CAA7D 0deg)`;
    circleValue4.textContent =`${stratvalue4}%`
    if(stratvalue4 == endvalue4) {
        clearInterval(Progress4)
    }
    // console.log(stratvalue);  
}, 100);




const clickArrow = document.querySelector(".Click-arrow");
const goleft = document.querySelector(".left-arrow");
const goright = document.querySelector(".right-arrow");

var sectionIndex = 0

goright.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
    push.style.transform = 'translate(' + (sectionIndex) * -40 +'%)';
    // loop = true;
});
goleft.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 3;
    push.style.transform = 'translate(' + (sectionIndex) * -40 +'%)';
});

function autoplayCarousel() {
    if (sectionIndex === slide.length+1) {
        sectionIndex = -1;
    }
    sectionIndex++
    jon.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    loop = true;
}


setInterval(() => {
    autoplayCarousel();
}, 4000);