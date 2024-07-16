document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
      e.preventDefault();
      var content = this.nextElementSibling;
      if (content.classList.contains('show')) {
        content.classList.remove('show');
      } else {
        content.classList.add('show');
      }
    });
  });
});

function focusTextbox() {
  document.getElementById('TextoBusqueda').focus();
}