const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
  
        // Check if the target is the plate container in the Home section
        if (entry.target.classList.contains('plate-container-home')) {
          entry.target.classList.add('active');
        }
      } else {
        entry.target.classList.remove('show');
  
        // Check if the target is the plate container in the Home section
        if (entry.target.classList.contains('plate-container-home')) {
          entry.target.classList.remove('active');
        }
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  const homeContainer = document.querySelector('.plate-container-home');
  const ordersContainer = document.querySelector('.plate-container-orders');
  const orderLink = document.querySelector('a[href="#Orders"]');
  
  orderLink.addEventListener('click', () => {
    homeContainer.classList.remove('active');
    ordersContainer.classList.add('active');
  
    // Animate the plate image container
    homeContainer.style.transform = 'translateY(-100%)';
    homeContainer.style.opacity = '0';
    ordersContainer.style.transform = 'translate(-50%, -50%)';
    ordersContainer.style.opacity = '1';
  });

  
