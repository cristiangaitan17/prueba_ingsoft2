// Modal de Términos y Condiciones
const modal = document.getElementById('termsModal');
const termsLink = document.getElementById('termsLink');
const closeBtn = document.querySelector('.close');
const acceptBtn = document.getElementById('acceptTerms');
const termsCheckbox = document.getElementById('terms');

// Abrir modal al hacer clic en el enlace de términos
if (termsLink) {
    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
}

// Cerrar modal
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Aceptar términos
if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
        termsCheckbox.checked = true;
        modal.style.display = 'none';
    });
}

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Manejo del formulario de login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const termsAccepted = document.getElementById('terms').checked;
        
        if (!termsAccepted) {
            alert('Debes aceptar los Términos y Condiciones');
            return;
        }
        
        if (email && password) {
            // Simular login exitoso
            localStorage.setItem('user', email);
            alert(`Bienvenido ${email}`);
            window.location.href = 'home.html';
        } else {
            alert('Por favor completa todos los campos');
        }
    });
}

// Cerrar sesión
const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    });
}

// Verificar si el usuario está logueado en home.html
if (window.location.pathname.includes('home.html')) {
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'index.html';
    }
}

// Funcionalidad para botones "Más información"
const infoButtons = document.querySelectorAll('.btn-info');
infoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const trainerName = btn.closest('.trainer-card')?.querySelector('h3')?.innerText || 'entrenador';
        alert(`Próximamente: Información detallada de ${trainerName}`);
    });
});

const routineButtons = document.querySelectorAll('.btn-secondary');
routineButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Próximamente: Guía detallada del ejercicio');
    });
});