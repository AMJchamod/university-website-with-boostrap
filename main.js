 // Manually initialize the carousel with JavaScript
 document.addEventListener('DOMContentLoaded', function () {
    var introCarousel = new bootstrap.Carousel(document.getElementById('introCarousel'), {
      interval: 2000,
      ride: 'carousel'
    });
  });