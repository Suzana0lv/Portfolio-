

const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("ativo");
});

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("ativo");
    });
});



let slideAtual = 0;

const slides = document.querySelector("#slides");
const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");
const indicadores = document.querySelector("#indicadores");

const quantidadeSlides = slides.children.length;


for (let i = 0; i < quantidadeSlides; i++) {

    const indicador = document.createElement("span");

    indicador.classList.add("indicador");

    if (i == 0) {
        indicador.classList.add("ativo");
    }

    indicadores.appendChild(indicador);
}

const listaIndicadores = document.querySelectorAll(".indicador");


function atualizarCarrossel() {

    slides.style.transform = "translateX(-" + (slideAtual * 100) + "%)";

    listaIndicadores.forEach(function(indicador, index) {

        if (index == slideAtual) {
            indicador.classList.add("ativo");
        } else {
            indicador.classList.remove("ativo");
        }

    });
}


proximo.addEventListener("click", function() {

    slideAtual = slideAtual + 1;

    if (slideAtual >= quantidadeSlides) {
        slideAtual = 0;
    }

    atualizarCarrossel();
});


anterior.addEventListener("click", function() {

    slideAtual = slideAtual - 1;

    if (slideAtual < 0) {
        slideAtual = quantidadeSlides - 1;
    }

    atualizarCarrossel();
});



listaIndicadores.forEach(function(indicador, index) {

    indicador.addEventListener("click", function() {

        slideAtual = index;

        atualizarCarrossel();

    });

});



const voltarTopo = document.querySelector("#voltar-topo");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {
        voltarTopo.classList.add("visivel");
    } else {
        voltarTopo.classList.remove("visivel");
    }

});

voltarTopo.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});