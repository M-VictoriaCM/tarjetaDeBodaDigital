// main.js
let fechaLimite = new Date('2024-02-10T21:00').getTime();
let intervalo;

// Ejecutar la función cada segundo
intervalo = setInterval(cargarTiempoRestante, 1000);

function cargarTiempoRestante() {
  // Obtener la fecha actual
  const ahora = new Date().getTime();

  // Calcular la diferencia entre la fecha límite y la fecha actual
  const diferencia = fechaLimite - ahora;

  // Calcular días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Mostrar los valores en los elementos HTML correspondientes
  document.getElementById('dias').innerHTML = dias;
  document.getElementById('horas').innerHTML = horas < 10 ? `0${horas}` : horas;
  document.getElementById('minutos').innerHTML = minutos < 10 ? `0${minutos}` : minutos;
  document.getElementById('segundos').innerHTML = segundos < 10 ? `0${segundos}` : segundos;

  // Verificar si hemos llegado a la fecha límite
  if (diferencia < 0) {
    clearInterval(intervalo);
    // Aquí puedes agregar lógica adicional cuando se alcanza la fecha límite
    console.log("Cuenta regresiva finalizada");
  }
}
/*-------------------------------------------------------------------------------------------------------*/
let btnGoogleMapCeremonia = document.getElementById('btnGoogleMapCeremonia');
let btnGoogleMapFiesta = document.getElementById('btnGoogleMapFiesta');
let btnGoogleMap;
let url;

btnGoogleMapCeremonia.addEventListener('click', function () {
  url = 'https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+de+Luj%C3%A1n/@-37.9672829,-60.4168452,17z/data=!3m1!4b1!4m6!3m5!1s0x9593addc32e18ad1:0xbd4e54ed0bcf17f7!8m2!3d-37.9672829!4d-60.4168452!16s%2Fg%2F11sqkl0m07?entry=ttu';
  // Redirigir a la URL de Google Maps
  window.location.href = url;
});

btnGoogleMapFiesta.addEventListener('click', function () {
  url = 'https://www.google.com/maps/place/Club+Atletico+Agrario/@-37.9605158,-60.4138002,17z/data=!4m6!3m5!1s0x9593ad697d1e0adf:0xfe07070ee61683db!8m2!3d-37.9603212!4d-60.4136661!16s%2Fg%2F11c1njl2xz?entry=ttu'; // Reemplaza con la ubicación deseada
  // Redirigir a la URL de Google Maps
  window.location.href = url;
});
/*-------------------------------------------------------------------------------------------------------*/
let btnWhatsApp = document.getElementById('btnWhatsApp');
let phoneNumber = '2983586371';  // Aca va el numero

    btnWhatsApp.addEventListener('click', function () {
        var urlWhatsApp = 'https://wa.me/' + phoneNumber;
        //Redirigir a la URL de WhatsApp
        window.location.href = urlWhatsApp;
    });
    const slider = document.getElementById('slider');
    const slides = document.querySelector('.slides');
    const pagination = document.getElementById('pagination');

    let slideIndex = 0;

    function nextSlide() {
        slideIndex = (slideIndex +1) % slides.children.length;
        updateSlide();
        updatePagination();
    }

    function updateSlide() {
        const translateValue = -slideIndex * 100 + '%';
        slides.style.transform = 'translateX(' + translateValue + ')';
    }

    function updatePagination() {
        const dots = pagination.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    }

    // Crear los puntos de paginación
    for (let i = 0; i < slides.children.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            slideIndex = i;
            updateSlide();
            updatePagination();
        });
        pagination.appendChild(dot);
    }

    // Iniciar el slider automático
    setInterval(nextSlide, 3000); 
/*-------------------------------------------------------------------------------------------------------*/

   
  document.addEventListener('DOMContentLoaded', function () {
    var scrollArrowContainer = document.querySelector('.scroll-arrow-container');

    window.addEventListener('scroll', function () {
      // Ajusta el valor 100 según sea necesario para cambiar cuánto debe desplazarse antes de que la flecha desaparezca
      if (window.scrollY > 100) {
        scrollArrowContainer.style.opacity = '0';
      } else {
        scrollArrowContainer.style.opacity = '1';
      }
    });
  });




