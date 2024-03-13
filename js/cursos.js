console.log('cursos.js cargado...')
const hashW = window.location.hash.split('_')[0];
const card =window.location.hash.split('_')[1];
console.log('EN LA CARGA: Hash= '+hashW+ ' - Card= '+card);


cargarCurso(hashW,card);

function cargarCurso(hash, card) {
    /* var hash = window.location.hash; */
    console.log('El hash enviado es: ' + hash + ' para el Card: ' + card)
    // Verifica si hay un hash en la URL
    if (hash) {
        //usa el hash para activar el carrusel y card para indicar que tarjeta de que curso visualizar
        if (hash === '#basic1' || hash === '#basic') { //Cursos Basic *************
            // Activa el carrusel 
            document.querySelector("#basic1").classList.add("active");
            document.querySelector("#basic2").classList.remove("active");
            document.querySelector("#basic3").classList.remove("active");
            if(card===''){
                document.querySelector("#b1-1").classList.remove("hidden");
                document.querySelector("#b1-2").classList.remove("hidden");
                document.querySelector("#b1-3").classList.remove("hidden");
            }else if (card === 'b1-1') {
                console.log('entro en b1-1')
                document.querySelector("#b1-1").classList.remove("hidden");
                document.querySelector("#b1-2").classList.add("hidden");
                document.querySelector("#b1-3").classList.add("hidden");
            } else if (card === 'b1-2') {
                document.querySelector("#b1-1").classList.add("hidden");
                document.querySelector("#b1-2").classList.remove("hidden");
                document.querySelector("#b1-3").classList.add("hidden");
            } else if (card === 'b1-3') {
                document.querySelector("#b1-1").classList.add("hidden");
                document.querySelector("#b1-2").classList.add("hidden");
                document.querySelector("#b1-3").classList.remove("hidden");
            }
        } else if (hash === '#basic2') {
            document.querySelector("#basic2").classList.add("active");
            document.querySelector("#basic1").classList.remove("active");
            document.querySelector("#basic3").classList.remove("active");
            if (card === 'b2-1') {
                document.querySelector("#b2-1").classList.remove("hidden");
                document.querySelector("#b2-2").classList.add("hidden");
                document.querySelector("#b2-3").classList.add("hidden");
            } else if (card === 'b2-2') {
                document.querySelector("#b2-1").classList.add("hidden");
                document.querySelector("#b2-2").classList.remove("hidden");
                document.querySelector("#b2-3").classList.add("hidden");
            } else if (card === 'b2-3') {
                document.querySelector("#b2-1").classList.add("hidden");
                document.querySelector("#b2-2").classList.add("hidden");
                document.querySelector("#b2-3").classList.remove("hidden");
            }
        } else if (hash === '#basic3') {
            document.querySelector("#basic3").classList.add("active");
            document.querySelector("#basic1").classList.remove("active");
            document.querySelector("#basic2").classList.remove("active");
            if (card === 'b3-1') {
                document.querySelector("#b3-1").classList.remove("hidden");
                document.querySelector("#b3-2").classList.add("hidden");
                document.querySelector("#b3-3").classList.add("hidden");
            } else if (card === 'b3-2') {
                document.querySelector("#b3-1").classList.add("hidden");
                document.querySelector("#b3-2").classList.remove("hidden");
                document.querySelector("#b3-3").classList.add("hidden");
            } else if (card === 'b3-3') {
                document.querySelector("#b3-1").classList.add("hidden");
                document.querySelector("#b3-2").classList.add("hidden");
                document.querySelector("#b3-3").classList.remove("hidden");
            }
        } else if (hash === '#advanced1' || hash === '#advanced') { //Cursos Advanced *************
            // Activa el carrusel o realiza alguna otra acción
            document.querySelector("#advanced1").classList.add("active");
            document.querySelector("#advanced2").classList.remove("active");
            if(card===''){
                document.querySelector("#a1-1").classList.remove("hidden");
                document.querySelector("#a1-2").classList.remove("hidden");
                document.querySelector("#a1-3").classList.remove("hidden");
            }else if (card === 'a1-1') {
                console.log('entro en a1-1')
                document.querySelector("#a1-1").classList.remove("hidden");
                document.querySelector("#a1-2").classList.add("hidden");
                document.querySelector("#a1-3").classList.add("hidden");
            } else if (card === 'a1-2') {
                document.querySelector("#a1-1").classList.add("hidden");
                document.querySelector("#a1-2").classList.remove("hidden");
                document.querySelector("#a1-3").classList.add("hidden");
            } else if (card === 'a1-3') {
                document.querySelector("#a1-1").classList.add("hidden");
                document.querySelector("#a1-2").classList.add("hidden");
                document.querySelector("#a1-3").classList.remove("hidden");
            }
        } else if (hash === '#advanced2') {
            document.querySelector("#advanced2").classList.add("active");
            document.querySelector("#advanced1").classList.remove("active");
            if (card === 'a2-1') {
                document.querySelector("#a2-1").classList.remove("hidden");
                document.querySelector("#a2-2").classList.add("hidden");
                document.querySelector("#a2-3").classList.add("hidden");
            } else if (card === 'a2-2') {
                document.querySelector("#a2-1").classList.add("hidden");
                document.querySelector("#a2-2").classList.remove("hidden");
                document.querySelector("#a2-3").classList.add("hidden");
            } else if (card === 'a2-3') {
                document.querySelector("#a2-1").classList.add("hidden");
                document.querySelector("#a2-2").classList.add("hidden");
                document.querySelector("#a2-3").classList.remove("hidden");
            }
        } else if (hash === '#workshop1' || hash === '#workshop') {
            document.querySelector("#workshop1")?.classList.add("active");
            document.querySelector("#workshop2")?.classList.remove("active");
            if(card===''){
                document.querySelector("#w1-1").classList.remove("hidden");
                document.querySelector("#w1-2").classList.remove("hidden");
                document.querySelector("#w1-3").classList.remove("hidden");
            }else if (card === 'w1-1') {
                document.querySelector("#w1-1").classList.remove("hidden");
                document.querySelector("#w1-2").classList.add("hidden");
                document.querySelector("#w1-3").classList.add("hidden");
            } else if (card === 'w1-2') {
                document.querySelector("#w1-1").classList.add("hidden");
                document.querySelector("#w1-2").classList.remove("hidden");
                document.querySelector("#w1-3").classList.add("hidden");
            } else if (card === 'w1-3') {
                document.querySelector("#w1-1").classList.add("hidden");
                document.querySelector("#w1-2").classList.add("hidden");
                document.querySelector("#w1-3").classList.remove("hidden");
            }
        } else if (hash === '#workshop2') {
            document.querySelector("#workshop2")?.classList.add("active");
            document.querySelector("#workshop1")?.classList.remove("active");
            if (card === 'w2-1') {
                document.querySelector("#w2-1").classList.remove("hidden");
                document.querySelector("#w2-2").classList.add("hidden");
                document.querySelector("#w2-3").classList.add("hidden");
            } else if (card === 'w2-2') {
                document.querySelector("#w2-1").classList.add("hidden");
                document.querySelector("#w2-2").classList.remove("hidden");
                document.querySelector("#w2-3").classList.add("hidden");
            } else if (card === 'w2-3') {
                document.querySelector("#w2-1").classList.add("hidden");
                document.querySelector("#w2-2").classList.add("hidden");
                document.querySelector("#w2-3").classList.remove("hidden");
            }
        }
    }
}




// Inicializa el carrusel
var carousel = new bootstrap.Carousel(
    document.querySelector("#tarjetaCarousel"),
    {
        interval: false, // Esto evita que el carrusel se mueva automáticamente
    }
);

