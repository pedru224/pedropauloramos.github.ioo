// Portfólio do Pedru: interações simples, sem dependências.
document.addEventListener('DOMContentLoaded', () => {

  // ---------- Menu mobile ----------
  const menuBtn = document.getElementById('menuBtn');
  const menuMobile = document.getElementById('menuMobile');
  if (menuBtn && menuMobile) {
    const setMenu = (open) => {
      menuMobile.classList.toggle('hidden', !open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };
    menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
    menuMobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  }

  // ---------- Relógio da barra inferior ----------
  const hora = document.getElementById('hora');
  const data = document.getElementById('data');
  const atualizaRelogio = () => {
    const agora = new Date();
    if (hora) hora.textContent = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    if (data) data.textContent = agora.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'numeric' });
  };
  atualizaRelogio();
  setInterval(atualizaRelogio, 15000);

  // ---------- Ano do rodapé ----------
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // ---------- Entrada dos blocos ao rolar ----------
  const blocos = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.1 });
    blocos.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 80}ms`;
      observer.observe(el);
    });
  } else {
    blocos.forEach((el) => el.classList.add('visible')); // navegador antigo: mostra tudo
  }
});
