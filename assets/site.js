const lightbox = document.querySelector('.lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  const picture = lightbox.querySelector('img');
  document.querySelectorAll('[data-certificate]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      picture.src = link.href;
      picture.alt = link.querySelector('img').alt;
      lightbox.showModal();
      document.body.classList.add('modal-open');
    });
  });
  lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('close', () => document.body.classList.remove('modal-open'));
}
