const sections = ['inicio', 'contactanos', 'servicios', 'planes'];
const navbarLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section);
        const bounding = sectionElement.getBoundingClientRect();

        if (bounding.top <= window.innerHeight * 0.5 && bounding.bottom > window.innerHeight * 0.5) {
            navbarLinks.forEach(link => link.classList.remove('active')); // Elimina la clase activa de todos los enlaces
            navbarLinks[index].classList.add('active'); // Agrega la clase activa al enlace correspondiente
        }
    });
});