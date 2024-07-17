document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
      const dropdownMenu = toggle.nextElementSibling;
      
      toggle.addEventListener('click', function (event) {
          const isVisible = dropdownMenu.style.display === 'block';
          dropdownMenu.style.display = isVisible ? 'none' : 'block';
          toggle.querySelector('svg').style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
          event.stopPropagation();
      });
  });

  // Cierra los menús si se hace clic fuera de ellos
  window.addEventListener('click', function (e) {
      dropdownToggles.forEach(toggle => {
          const dropdownMenu = toggle.nextElementSibling;
          if (!toggle.contains(e.target)) {
              dropdownMenu.style.display = 'none';
              toggle.querySelector('svg').style.transform = 'rotate(0deg)';
          }
      });
  });
});