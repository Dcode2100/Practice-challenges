const buttons = document.querySelectorAll('.ripple-button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = button.querySelector('.ripple');
    if (!ripple) {
      ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
      button.appendChild(ripple);
    }
    ripple.style.top = y + 'px';
    ripple.style.left = x + 'px';
    ripple.classList.add('show');
    setTimeout(() => {
      ripple.classList.remove('show');
    }, 1000);
  });
});
