document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const imagePaths = {
      1: '/images/product-01-c.jpg',
      2: '/images/product-01-d.jpg',
      3: '/images/product-01-d.jpg',
      4: '/images/product-001-b.jpg'
    };
  
    items.forEach(item => {
      const img = item.querySelector('img');
      const originalSrc = img.src;
      const itemId = item.dataset.itemId;
  
      item.addEventListener('mouseenter', function() {
        const itemOption = this.querySelector('.option');
        itemOption.style.display = 'block';
  
        img.style.opacity = 0;
        setTimeout(() => {
          img.src = imagePaths[itemId];
          img.style.opacity = 1;
        }, 200);
      });
  
      item.addEventListener('mouseleave', function() {
        img.style.opacity = 0;
        setTimeout(() => {
          img.src = originalSrc;
          img.style.opacity = 1;
        }, 200);
  
        const itemOption = this.querySelector('.option');
        itemOption.style.display = 'none';
      });
    });
  });



  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav ul');
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
  