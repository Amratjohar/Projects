const mobile_nav= document.querySelector('.mobile-nav');
const nav_header= document.querySelector('.header');

const toggleNavbar= ()=>{
    // alert('Toggle navigation');
    nav_header.classList.toggle('active');
};

mobile_nav.addEventListener('click', () => toggleNavbar());