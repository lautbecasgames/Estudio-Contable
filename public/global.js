document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('mobileMenu');

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
    });

menu.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',(e)=>{

        // Si es "Servicios", solo abrir submenú y no navegar
        if (link.classList.contains('mobile-servicios')) {
            e.preventDefault();
            return;
        }

        // Cerrar menú móvil para los demás enlaces
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded',"false");
    });
});
});

const menuServicios = document.querySelector('.menu-servicios');
const submenuServicios = document.querySelector('.submenu-servicios');

menuServicios.addEventListener('click', (e) => {
    e.preventDefault();

    if (window.innerWidth <= 768) {
        submenuServicios.classList.toggle('activo');
    }
});

const mobileServicios = document.querySelector('.mobile-servicios');
const mobileSubmenuServicios = document.querySelector('.mobile-submenu-servicios');

if (mobileServicios) {
    mobileServicios.addEventListener('click', (e) => {

        e.preventDefault();

        mobileSubmenuServicios.classList.toggle('activo');
        mobileServicios.classList.toggle('activo');
    });
}

let items = document.querySelectorAll('.accordion-item');

document.addEventListener('click', function(e){
  if(e.target.closest('.accordion-header')){
      let header = e.target.closest('.accordion-header');
      let item = header.parentElement;

      items.forEach(i=>{
        if(i !== item){
          i.querySelector('.accordion-content').style.maxHeight = null;
          i.querySelector('.accordion-content').classList.remove('open');
          i.querySelector('.accordion-header i').style.transform = 'rotate(0deg)';
        }
      });

      let content = item.querySelector('.accordion-content');
      let icon = item.querySelector('.accordion-header i');

      if(content.style.maxHeight){
        content.style.maxHeight = null;
        content.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.style.maxHeight = content.scrollHeight + 200 + "px";
        content.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
      }
  }
});

