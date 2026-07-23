const swiper = new Swiper(".memoriesSwiper",{

    effect:"coverflow",

    grabCursor:true,

    centeredSlides:true,

    slidesPerView:"auto",

    loop:true,

    spaceBetween:30,

    coverflowEffect:{

        rotate:0,

        stretch:0,

        depth:250,

        modifier:2,

        slideShadows:false,

        scale:.88

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true

    }

});
const videoCards = document.querySelectorAll(".video-card");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });


});


videoCards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition="1s";

    observer.observe(card);

});

// =================================
// ANIMACIÓN DEL SOBRE
// =================================

const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const seal = document.querySelector(".seal");


if(envelope){

    envelope.addEventListener("click",()=>{


        envelope.classList.toggle("open");

        letter.classList.toggle("show");

        seal.classList.toggle("hide");


    });

}
