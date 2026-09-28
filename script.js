// ===================================
// MOBILE MENU
// ===================================

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");


menuBtn.addEventListener(
  "click",
  () => {

    navMenu.classList.toggle(
      "active"
    );

  }
);


document
  .querySelectorAll("#navMenu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        navMenu.classList.remove(
          "active"
        );

      }
    );

  });




// ===================================
// NAVBAR
// ===================================

const navbar =
  document.querySelector(
    ".navbar"
  );


function updateNavbar() {

  if (
    window.scrollY > 70
  ) {

    navbar.classList.add(
      "scrolled"
    );

  }

  else {

    navbar.classList.remove(
      "scrolled"
    );

  }

}


window.addEventListener(
  "scroll",
  updateNavbar
);


updateNavbar();




// ===================================
// WHATSAPP PROJECT REQUEST
// ===================================

const contactForm =
  document.getElementById(
    "contactForm"
  );


contactForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();


    const name =
      document
        .getElementById("name")
        .value
        .trim();


    const projectType =
      document
        .getElementById(
          "projectType"
        )
        .value;


    const location =
      document
        .getElementById(
          "location"
        )
        .value
        .trim();


    const details =
      document
        .getElementById(
          "message"
        )
        .value
        .trim();


    if (
      !name ||
      !projectType ||
      !location
    ) {

      alert(
        "Please complete the required fields."
      );

      return;

    }


    const message =
`Hello AURA Design Studio,

I'd like to discuss a new project.

Name: ${name}
Project type: ${projectType}
Location: ${location}

Project details:
${details || "I would like to discuss the details with your team."}

Thank you.`;


    const phone =
      "971567437770";


    const whatsappURL =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  }
);




// ===================================
// SCROLL REVEAL
// ===================================

const revealElements =
  document.querySelectorAll(
    `
      .intro-text,
      .section-heading,
      .project,
      .studio-image,
      .studio-content,
      .service-item,
      .process-heading,
      .process-step,
      .contact-left,
      .contact-form
    `
  );


revealElements.forEach(
  element => {

    element.classList.add(
      "reveal"
    );

  }
);


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add(
                "visible"
              );


            revealObserver
              .unobserve(
                entry.target
              );

          }

        }
      );

    },

    {
      threshold: 0.08
    }

  );


revealElements.forEach(
  element => {

    revealObserver.observe(
      element
    );

  }
);