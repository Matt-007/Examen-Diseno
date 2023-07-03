// Función para el menú desplegable (hamburger)
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
  }
  
  // Event Listener para el menú desplegable
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', toggleMenu);
  
  // Smooth scrolling para los enlaces del menú
  const navLinks = document.querySelectorAll('.nav-links a');
  
  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }
  
  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Carrusel
  window.addEventListener('load', function() {
    var carouselItems = document.querySelectorAll('.carousel-item');
    var currentIndex = 0;
    var interval = 3000;
  
    function showNextItem() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
    }
  
    setInterval(showNextItem, interval);
  });
  
  // Formulario
  const form = document.getElementById('dotaForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    mostrarAlerta('Formulario enviado correctamente');
  });
  
  function mostrarAlerta(mensaje) {
    const alerta = document.createElement('div');
    alerta.className = 'alerta';
    alerta.textContent = mensaje;
    form.appendChild(alerta);
  
    setTimeout(function() {
      alerta.remove();
    }, 3000);
  }
  
  // Modal
  const modalBtn1 = document.getElementById('modalBtn1');
  const modalBtn2 = document.getElementById('modalBtn2');
  const modalBtn3 = document.getElementById('modalBtn3');
  const modal1 = document.getElementById('modal1');
  const modal2 = document.getElementById('modal2');
  const modal3 = document.getElementById('modal3');
  const closeBtns = document.getElementsByClassName('close');
  
  modalBtn1.addEventListener('click', function() {
    modal1.style.display = 'block';
  });
  
  modalBtn2.addEventListener('click', function() {
    modal2.style.display = 'block';
  });
  
  modalBtn3.addEventListener('click', function() {
    modal3.style.display = 'block';
  });
  
  for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
    });
  }
  