document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.querySelector(".toggle-menu");
    const submenu = document.querySelector(".submenu");
  
    toggleMenu.addEventListener("click", function(event) {
      event.preventDefault();
      submenu.classList.toggle("hidden");
    });
  });
 
  
  