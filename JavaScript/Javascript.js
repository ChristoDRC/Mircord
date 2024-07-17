document.addEventListener('DOMContentLoaded', function () {
  const navMobile = document.getElementById('nav-mobile');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  navMobile.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (event) {
      const dropdownMenu = toggle.nextElementSibling;
      const isVisible = dropdownMenu.style.display === 'block';

      // Close all dropdowns
      dropdownToggles.forEach(otherToggle => {
        const otherDropdownMenu = otherToggle.nextElementSibling;
        if (otherDropdownMenu !== dropdownMenu) {
          otherDropdownMenu.style.display = 'none';
          otherToggle.querySelector('svg').style.transform = 'rotate(0deg)';
        }
      });

      // Toggle the clicked dropdown
      dropdownMenu.style.display = isVisible ? 'none' : 'block';
      toggle.querySelector('svg').style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';

      event.stopPropagation();
    });
  });

  // Close all dropdowns if clicking outside
  window.addEventListener('click', function () {
    dropdownToggles.forEach(toggle => {
      const dropdownMenu = toggle.nextElementSibling;
      dropdownMenu.style.display = 'none';
      toggle.querySelector('svg').style.transform = 'rotate(0deg)';
    });
  });
});