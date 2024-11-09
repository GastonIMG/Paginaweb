
// Efecto de desvanecimiento en el menu al pasar el mouse sobre el 

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.opacity = '0.7';
        this.style.transition = 'opacity 0.3s ease';
    });

    link.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});

// servicios, función "leer mas"

document.querySelectorAll('.leer-mas').forEach((btn) => {
    btn.addEventListener('click', function () {
      const infoAdicional = this.nextElementSibling;
      infoAdicional.style.display =
        infoAdicional.style.display === 'block' ? 'none' : 'block';
    });
});
  
  
// Menu hamburguesa 

const hamburgerMenu = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('header nav');

  hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Modo oscuro y modo claro 


