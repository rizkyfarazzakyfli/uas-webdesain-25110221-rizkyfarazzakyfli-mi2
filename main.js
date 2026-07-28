// ==============================
// FAKAR CUTTING PEKANBARU
// main.js
// ==============================

// Ambil semua elemen
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const thumbs = document.querySelectorAll(".thumb");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

// ==============================
// TAMPILKAN SLIDE
// ==============================

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    thumbs.forEach((thumb)=>{
        thumb.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    thumbs[index].classList.add("active");

}

// ==============================
// NEXT
// ==============================

function nextSlide(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

}

// ==============================
// PREVIOUS
// ==============================

function prevSlide(){

    current--;

    if(current < 0){

        current = slides.length - 1;

    }

    showSlide(current);

}

// ==============================
// AUTO SLIDE
// ==============================

let autoSlide = setInterval(nextSlide,4000);

// ==============================
// NEXT BUTTON
// ==============================

if(nextBtn){

nextBtn.addEventListener("click",()=>{

    nextSlide();

    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide,4000);

});

}

// ==============================
// PREV BUTTON
// ==============================

if(prevBtn){

prevBtn.addEventListener("click",()=>{

    prevSlide();

    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide,4000);

});

}

// ==============================
// DOTS
// ==============================

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showSlide(current);

        clearInterval(autoSlide);

        autoSlide = setInterval(nextSlide,4000);

    });

});

// ==============================
// THUMBNAIL
// ==============================

thumbs.forEach((thumb,index)=>{

    thumb.addEventListener("click",()=>{

        current=index;

        showSlide(current);

        clearInterval(autoSlide);

        autoSlide = setInterval(nextSlide,4000);

    });

});

// ==============================
// KEYBOARD
// ==============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextSlide();

    }

    if(e.key==="ArrowLeft"){

        prevSlide();

    }

});

// ==============================
// TOUCH SWIPE (HP)
// ==============================

let startX = 0;

let endX = 0;

const hero = document.querySelector(".hero");

if(hero){

hero.addEventListener("touchstart",(e)=>{

    startX = e.changedTouches[0].screenX;

});

hero.addEventListener("touchend",(e)=>{

    endX = e.changedTouches[0].screenX;

    if(startX-endX > 50){

        nextSlide();

    }

    if(endX-startX > 50){

        prevSlide();

    }

});

}

// ==============================
// AWAL
// ==============================

showSlide(current);