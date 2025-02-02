
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('header_scrolled');
    } else {
        header.classList.remove('header_scrolled');
    }
})