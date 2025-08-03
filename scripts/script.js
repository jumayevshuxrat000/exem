document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    const closeMenu = document.getElementById('close-menu');

    // Open menu
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });

    // Close menu when clicking close button
    if (closeMenu) {
      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
      });
    }

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mobileMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  });