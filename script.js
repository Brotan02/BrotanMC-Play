const menuToggle=document.getElementById('menuToggle');const nav=document.getElementById('nav');const navLinks=[...document.querySelectorAll('.nav-link')];
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰'});
navLinks.forEach(link=>link.addEventListener('click',()=>{navLinks.forEach(item=>item.classList.remove('active'));link.classList.add('active');nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰'}));
const copyButton=document.querySelector('[data-copy]');copyButton.disabled=true;copyButton.title='IP сервера пока не указан';
