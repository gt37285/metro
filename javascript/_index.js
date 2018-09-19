(function () {


    var tag, next, previus, contenedor;

    contenedor = document.getElementById('id01');
    tag = contenedor.children;

    next = document.getElementById('next');
    previus = document.getElementById('previus');
    var icono = document.getElementById('id02').children;


    window.onscroll = function () {
        var x = window.scrollY;
        var cont = document.getElementsByClassName('contenedorNav');
        if (x > 0) {
            cont[0].style.backgroundColor = '#cccccc';
        } else {
            cont[0].style.backgroundColor = 'rgba(0,0,0,.1)';
        }

    }

    var currentTag = 0;


    showTag(currentTag);

    function showTag(x) {

        tag[x].style.display = "block";

        // icono selector


        switch (x) {
            case 0:
                icono[x].style.color = "#a3671a";
                icono[x + 1].style.color = "#939393";
                icono[tag.length - 1].style.color = "#939393";
                break;
            case 1:
                icono[x - 1].style.color = "#939393";
                icono[x].style.color = "#a3671a";
                icono[x + 1].style.color = "#939393";
                break;
            case 2:
                icono[0].style.color = "#939393";
                icono[1].style.color = "#939393";
                icono[x].style.color = "#a3671a";

                break;
        }

    }

    next.addEventListener('click', function (e) {
        siguiente();

    });

    previus.addEventListener('click', function (e) {
        anterior();

    });

    function siguiente() {
        currentTag += 1;
        tag[currentTag - 1].style.display = "none";
        if (currentTag == 3) {
            currentTag = 0;
        }
        showTag(currentTag);
    }


    function anterior() {
        tag[currentTag].style.display = "none";

        if (currentTag == 0) {
            currentTag = tag.length - 1;
        } else {
            currentTag -= 1;
        }
        showTag(currentTag);
    }


    var intervalo = setInterval(siguiente, 6000);




}());
