document.addEventListener('DOMContentLoaded', function () {
   const navLinks = document.querySelectorAll('#navLinks a')

   // NAVIGATION WITH SCROLL TO...
   navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
         event.preventDefault()

         const targetId = this.getAttribute('href')
         const targetSection = document.getElementById(targetId);

         window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
         })
      })
   })

   const menu = document.getElementById('menu')
   const menus = document.getElementById('menus')

   //  CONTATOS
   menu.addEventListener('click', () => {
      if (menus.classList.contains('show')) {
         menus.classList.remove('show');
         setTimeout(() => {
            menus.classList.add('hidden');
         }, 300);
      } else {
         menus.classList.remove('hidden');
         setTimeout(() => {
            menus.classList.add('show');
         }, 10);
      }
   })

   const menuOptions = document.querySelectorAll('aside a')

   menuOptions.forEach(item => {
      item.addEventListener('click', () => {
         menus.classList.remove('show')

         setTimeout(() => {
            menus.classList.add('hidden')
         }, 300)
      })
   })
})

// YEAR
document.querySelector('#year').textContent = new Date().getFullYear()