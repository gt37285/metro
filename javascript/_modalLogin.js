(function () {


    $(document).ready(function () {

        $('#login').click(function () {

            $('#modalLogin').fadeIn(1000);
        });

        $('.cerrar').click(function () {

            close();

        });

        var link, modal;

        link = document.getElementById('login');
        modal = document.getElementById('modalLogin');

        window.onclick = function (e) {

            if (e.target === modal) {
                close();
            }
        }

        function close() {
            $('#modalLogin').fadeOut(1000);
        }

        var user, pass, check, enviar;

        user = document.getElementById('user');
        pass = document.getElementById('pass');
        check = document.getElementById('check');
        enviar = document.getElementById('enviar');

        enviar.addEventListener('click', function (e) {
            usuario(e);
            contraseña(e);
            if (check.checked) {
                localStorage.setItem('user', user.value);
                localStorage.setItem('pass', pass.value);
            }

        });

        function usuario(e) {
            if (user.value.length === 0) {
                window.alert('Ingresa un Usuario');
                e.preventDefault();
            }
        }

        function contraseña(e) {
            if (pass.value.length === 0) {
                window.alert('Ingresa una contraseña');
                e.preventDefault();
            }
        }
        link.addEventListener('click', function () {

            if (localStorage.length !== 0) {
                if (user.value.length === 0) {
                    user.value = localStorage.getItem('user');
                }
                if (pass.value.length === 0) {
                    pass.value = localStorage.getItem('pass');
                }
            }
        });

        check.addEventListener('click', function () {
            if (check.checked == false) {
                localStorage.clear();
                user.value = '';
                pass.value = '';
            }
        });


        var view = document.getElementById('view');

        view.addEventListener('click', function () {

            this.classList.toggle('fa-eye-slash');
            if (pass.value.length !== 0 && pass.type === 'password') {

                pass.type = 'text';
            } else {
                pass.type = 'password';
            }

        });

        var registro = document.getElementById('registro');


        registro.addEventListener('click', function () {
            close();
        });


    });
}());
