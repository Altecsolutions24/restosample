// particles.js
particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",    
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });



  window.addEventListener('scroll', function() {
    var homeSection = document.getElementById('Home');
    var ordersSection = document.getElementById('Orders');
    var homePlate = document.getElementById('home-plate');
    var ordersPlate = document.getElementById('orders-plate');
  
    if (window.pageYOffset >= ordersSection.offsetTop) {
      homePlate.classList.add('animate-plate');
      ordersPlate.style.height = '305px';
      ordersPlate.style.width = '305px';
    } else {
      homePlate.classList.remove('animate-plate');
      ordersPlate.style.height = '300px';
      ordersPlate.style.width = '300px';
    }
  });


 // Get all the images in the damenu row
const images = document.querySelectorAll('.damenu img');

// Make each image draggable
images.forEach(image => {
  interact(image)
    .draggable({
      // Enable dragging
      enabled: true,

      // Keep the element within the viewport bounds
      restrict: {
        restriction: 'body',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },

      // Enable inertial throwing
      inertia: true,

      // Call this function on every dragmove event
      onmove: dragMoveListener
    });
});

function dragMoveListener(event) {
  var target = event.target;
  // Keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // Translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

  // Update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}