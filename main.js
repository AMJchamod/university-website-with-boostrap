document.addEventListener('DOMContentLoaded', function () {
    // Bootstrap Carousel Initialization
    var introCarousel = new bootstrap.Carousel(document.getElementById('introCarousel'), {
      interval: 1900,
      ride: 'carousel'
    });
  
    // Swiper Carousel Initialization
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  
    // Courses Submenu Trigger
    document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.preventDefault();
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('dropdown-menu')) {
          if (nextEl.style.display === 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }
        }
      });
    });
  });
  // contact us
  feather.replace();  

  //hidden application
  function loadForm() {
    fetch('application.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('form-container').innerHTML = data;
        });
}

function openForm() {
    document.getElementById("applyForm").style.display = "block";
}

function closeForm() {
    document.getElementById("applyForm").style.display = "none";
}

window.onload = loadForm;
