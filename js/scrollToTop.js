(function(){
    function scrollToTop(){
        const scrollButton = document.querySelector('.backToTop');
        scrollButton.addEventListener('click', () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
        window.addEventListener('scroll', () => {
            if (window.scrollY+scrollButton.offsetTop < scrollButton.getBoundingClientRect().bottom) {
                scrollButton.style.transition = 'opacity 0.5s ease-in';
                scrollButton.style.opacity = '0';
                scrollButton.style.cursor = '';
            } else {
                scrollButton.style.opacity = '1';
                scrollButton.style.cursor = 'pointer';
            }
        })
    }
    scrollToTop();
})();
