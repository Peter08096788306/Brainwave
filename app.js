

const mobile = document.querySelector(".Mobile-carousel");
const show = document.querySelector(".Slide-show");

const jon = document.querySelector(".Smirth");
const client = document.querySelector(".Function");


var sectionIndex = 0


function autoplayCarousel() {
    if (sectionIndex === slide.length+1) {
        sectionIndex = -1;
    }
    sectionIndex++
    mobile.style.transform = 'translate(' + (sectionIndex) * -16 + '%)';
    mobile.style.transition = "all .5s" 
    loop = true;
    loop = false;
}

setInterval(() => {
    autoplayCarousel();
}, 4000);



// var sectionIndex = 0


// function autoplayCarousel() {
//     if (sectionIndex === slide.length+1) {
//         sectionIndex = -1;
//     }
//     sectionIndex++
//     jon.style.transform = 'translate(' + (sectionIndex) * -33 + '%)';
//     jon.style.transition = "all .5s" 
//     loop = true;
//     // loop = false;
// }

// setInterval(() => {
//     autoplayCarousel();
// }, 4000);