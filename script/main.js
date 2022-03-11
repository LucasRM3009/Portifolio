const pageScroll = document.documentElement;
const linkSobreMim = document.querySelector('#linkSobreMim');
const fundoDesfocado = document.querySelector('.fundoDesfocado');
const sectionSobreMim = document.querySelector('.conteudoPrincipal_SobreMim');
const botaoFechar = document.querySelector('.botaoFechar');

linkSobreMim.addEventListener('click', () => {
    fundoDesfocado.style.display = 'block';
    sectionSobreMim.style.display = 'block';
    pageScroll.style.overflow = 'hidden';
});

botaoFechar.addEventListener('click', () => {
    fundoDesfocado.style.display = 'none';
    sectionSobreMim.style.display = 'none';
    pageScroll.style.overflow = 'auto';
});