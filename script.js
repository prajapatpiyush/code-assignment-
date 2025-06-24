document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
      fullName: form.fullName.value,
      email: form.email.value,
      mobile: form.mobile.value,
      city: form.city.value
    };

    try {
      const res = await fetch('https://your-backend-url/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert('Thank you! Your details have been submitted.');
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form.');
    }
  });
});





document.addEventListener("DOMContentLoaded", () => {
  fetchProjects();
});

async function fetchProjects() {
  try {
    const res = await fetch(""); // Replace with your actual API
    const projects = await res.json();
    renderProjects(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }
}

function renderProjects(projects) {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h4>${project.title}</h4>
      <a href="${project.link || '#'}" class="project-btn">View Details</a>
    `;

    container.appendChild(card);
  });
}



document.addEventListener("DOMContentLoaded", () => {
  loadTestimonials();
});

function loadTestimonials() {
  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Homebuyer",
      image: "https://res.cloudinary.com/dn4ugr5du/image/upload/v1750770741/Ellipse_33_pbgl6p.svg",
      message: "Real Trust helped me buy my dream home with zero stress. The design and service were top-notch!"
    },
    {
      name: "Anju Kapoor",
      role: "Investor",
      image: "https://res.cloudinary.com/dn4ugr5du/image/upload/v1750770741/Ellipse_35_qmlyus.svg",
      message: "From planning to execution, their marketing strategy brought amazing ROI. Highly recommended!"
    },
    {
      name: "Sahil Jain",
      role: "Interior Designer",
      image: "https://res.cloudinary.com/dn4ugr5du/image/upload/v1750770740/Ellipse_29_fjoguk.svg",
      message: "Collaborating with Real Trust was a pleasure. Their vision and clarity made my job easy."
    },
    {
      name: "Mohit Sharma",
      role: "Property Developer",
      image: "https://res.cloudinary.com/dn4ugr5du/image/upload/v1750770740/Ellipse_31_xmtvpc.svg",
      message: "They don’t just sell properties. They build experiences. Huge respect to the team!"
    },
    {
      name: "Aisha Verma",
      role: "First-time Buyer",
      image: "https://res.cloudinary.com/dn4ugr5du/image/upload/v1750770740/Ellipse_28_d9ahlf.svg",
      message: "Real Trust explained everything and walked me through the process like family. I felt secure."
    }
  ];

  const container = document.getElementById("testimonialsContainer");
  container.innerHTML = "";

  testimonials.forEach((client) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";

    card.innerHTML = `
      <img src="${client.image}" alt="${client.name}">
      <h4>${client.name}</h4>
      <span>${client.role}</span>
      <p>"${client.message}"</p>
    `;

    container.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("subscriberEmail");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://your-backend.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        alert("Thank you for subscribing!");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Error connecting to the server.");
    }
  });

  // Simple email format validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
