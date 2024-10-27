const header_button = document.querySelector('.header_button');

header_button.addEventListener('click', () => {
  const btn_one = document.querySelector('.btn_one');
  const sidebar_menu = document.querySelector('.sidebar_menu');

  if (btn_one.classList.contains('left')) {
    btn_one.classList.remove('left');
    btn_one.classList.add('right');
  } else {
    btn_one.classList.remove('right');
    btn_one.classList.add('left');
  }

  if (sidebar_menu.classList.contains('left')) {
    sidebar_menu.classList.remove('left');
    sidebar_menu.classList.add('right');
  } else {
    sidebar_menu.classList.remove('right');
    sidebar_menu.classList.add('left');
  }
});
