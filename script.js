  // ------- Navbar ------- //
  
 const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Close menu when a link is clicked (mobile)
  links.forEach(link => {
    link.addEventListener('click', () => {
      if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
      }
    });
  });




// ------- Osmo [https://osmo.supply/] ------- //

document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);

  // Parallax Layers
  document.querySelectorAll('[data-parallax-layers]').forEach((triggerElement) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
      },
    });
    const layers = [
      { layer: "1", yPercent: 70 },
      { layer: "2", yPercent: 55 },
      { layer: "3", yPercent: 40 },
      { layer: "4", yPercent: 10 },
    ];
    layers.forEach((layerObj, idx) => {
      tl.to(
        triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
        {
          yPercent: layerObj.yPercent,
          ease: "none",
        },
        idx === 0 ? undefined : "<"
      );
    });
  });
});

/* Lenis Smooth Scroll */
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

/* Navigation Toggle */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle?.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

/* Hero Text Animation */
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero-content h1");
  if (!title) return;

  const text = title.textContent;
  title.textContent = ""; // Clear original text

  [...text].forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(-100px)";
    span.style.transition = "all 0.6s ease-out";
    span.style.transitionDelay = `${i * 0.1}s`;
    title.appendChild(span);
  });

  setTimeout(() => {
    title.querySelectorAll("span").forEach((span) => {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    });
  }, 100);
});

// /* Bordered Cards Hover */
// document.querySelectorAll(".bordered").forEach((card) => {
//   card.addEventListener("mouseenter", () => card.classList.add("hovered"));
//   card.addEventListener("mouseleave", () => card.classList.remove("hovered"));
// });

/* --- Progress Bar Animation --- */
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".skills");
  if (!skillsSection) return;
  const progressBars = document.querySelectorAll(".progress");

  // Save original widths in data attributes
  progressBars.forEach((bar) => {
    bar.dataset.width = bar.style.width || "80%"; // fallback
    bar.style.width = "0";
    bar.style.transition = "width 1.5s ease-in-out"; // smooth transition
  });


// Glow effect for service cards
document.querySelectorAll('.services_card[data-services-effect="glow-border"]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--exp-x', `${x}px`);
        card.style.setProperty('--exp-y', `${y}px`);
    });
});






  // Education Section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => (bar.style.width = bar.dataset.width));
        } else {
          progressBars.forEach((bar) => (bar.style.width = "0"));
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(skillsSection);
});

/* --- Auto Count Animation --- */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");
  const counterSection = document.querySelector(".counter-section");
  if (!counters.length || !counterSection) return;

  const speed = 100;

  function runCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      requestAnimationFrame(() => runCounter(counter));
    } else {
      counter.innerText = target + "+";
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            counter.innerText = "0";
            runCounter(counter);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(counterSection);
});




/* --- Education section --- */
document.addEventListener('DOMContentLoaded', () => {
  const experienceWrappers = document.querySelectorAll('.experience_card_wrapper');

  experienceWrappers.forEach(wrapper => {
    const card = wrapper.querySelector('.experience_card');
    const effect = wrapper.dataset.experienceEffect || card.dataset.experienceEffect;

    if (effect === 'glow-border') {
      initGlowBorder(card);
    }
  });

  function initGlowBorder(card) {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--exp-x', `${x}px`);
      card.style.setProperty('--exp-y', `${y}px`);
    });
  }
});



/* --- Portfolio section --- */
/*Downloaded from https://www.codeseek.co/ezra_siton/mixitup-fancybox3-JydYqm */
    // 1. querySelector
    var containerEl = document.querySelector(".portfolio-item");
    // 2. Passing the configuration object inline
    //https://www.kunkalabs.com/mixitup/docs/configuration-object/
    var mixer = mixitup(containerEl, {
      animation: {
        effects: "fade translateZ(-100px)",
        effectsIn: "fade translateY(-100%)",
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      }
    });
    // fancybox insilaze & options //
    $("[data-fancybox]").fancybox({
      loop: true,
      hash: true,
      transitionEffect: "slide",
      /* zoom VS next////////////////////
      clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */
      clickContent: function(current, event) {
        return current.type === "image" ? "next" : false;
      }
    });




/* --- Form Submit --- */
const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});





// JavaScript for enhanced Behance links
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to Behance links
    const behanceLinks = document.querySelectorAll('.behance-icon');
    
    behanceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Optional: Add click animation
            this.style.transform = 'scale(0.9)';
            
            // Optional: Show loading indicator
            const originalHtml = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            // Reset after 500ms
            setTimeout(() => {
                this.innerHTML = originalHtml;
                this.style.transform = '';
            }, 500);
            
            // Analytics tracking (optional)
            console.log('Behance link clicked:', this.href);
        });
    });
    
    // MixItUp Filtering (if using)
    if (document.querySelector('.portfolio-item')) {
        const mixer = mixitup('.portfolio-item', {
            animation: {
                duration: 300,
                effects: 'fade scale(0.8)'
            },
            selectors: {
                target: '.pd'
            },
            load: {
                filter: 'all'
            }
        });
    }
    
    // Filter button active state
    const filterButtons = document.querySelectorAll('.control');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('mixitup-control-active'));
            this.classList.add('mixitup-control-active');
        });
    });
});
