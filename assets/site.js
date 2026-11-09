document.documentElement.classList.add('js');

const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  menu.lastElementChild.textContent = '+';
}

menu.hidden = false;
menu.addEventListener('click', () => {
  const isOpen = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(isOpen));
  navigation.classList.toggle('is-open', isOpen);
  menu.lastElementChild.textContent = isOpen ? '−' : '+';
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
