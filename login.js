document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí iría la lógica para verificar las credenciales con una API o backend
        // Por ahora, simulamos un éxito en el inicio de sesión
        
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido!',
            text: 'Has iniciado sesión correctamente.',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html';
            }
        });
    });
});
