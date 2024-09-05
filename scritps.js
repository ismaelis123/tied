let isLoggedIn = false;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar credenciales
        if (username === 'ismael' && password === '12') {
            isLoggedIn = true;
            showProducts();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error de inicio de sesión',
                text: 'Nombre de usuario o contraseña incorrectos.',
                confirmButtonText: 'Intentarlo de nuevo'
            });
        }
    });

    function showProducts() {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('products-container').classList.remove('hidden');
    }

    function logout() {
        isLoggedIn = false;
        document.getElementById('login-container').classList.remove('hidden');
        document.getElementById('products-container').classList.add('hidden');
    }
});
