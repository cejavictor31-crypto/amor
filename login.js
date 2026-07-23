// ===============================
// DATOS DE ACCESO
// ===============================

const USER = "Fanny";
const PASS = "VFC_MES19!3017#Zx"; // Cambia la contraseña

// ===============================

const form = document.getElementById("login");

const card = document.querySelector(".card");

const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const user = document.getElementById("user").value.trim();

    const pass = document.getElementById("pass").value.trim();

    if(user === USER && pass === PASS){

        message.style.color="#8cff8c";

        message.textContent="Bienvenida ❤️";

        card.style.transition=".8s";

        card.style.opacity="0";

        card.style.transform="scale(.92)";

        setTimeout(()=>{

            window.location.href="home.html";

        },900);

    }else{

        message.style.color="#ff6b6b";

        message.textContent="Usuario o contraseña incorrectos.";

        card.classList.remove("shake");

        void card.offsetWidth;

        card.classList.add("shake");

    }

});