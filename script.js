document.addEventListener('DOMContentLoaded', () => {

    // Animação de fade-in ao rolar a página
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // usa o viewport como raiz
        rootMargin: '0px',
        threshold: 0.1 // aciona quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento para não animar novamente
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa cada uma das seções
    sections.forEach(section => {
        observer.observe(section);
    });

});