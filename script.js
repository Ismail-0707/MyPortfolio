// Smooth scroll to section
function scrollToSection(sectionId) {
  // Get the section element by ID
  const section = document.getElementById(sectionId);
  if (section) {
    // Scroll smoothly to the selected section
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Contact form submission
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission behavior (page reload)

  const form = event.target;
  const name = form.elements.name.value;       // Get the name value from the form
  const email = form.elements.email.value;     // Get the email value from the form
  const message = form.elements.message.value; // Get the message value from the form

  // Send POST request to backend API
  fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Sending JSON data
    },
    body: JSON.stringify({ name, email, message }) // Convert data to JSON string
  })
    .then(async res => {
      if (!res.ok) {
        // If server responds with error status, throw error with response text
        const text = await res.text();
        throw new Error(`Server Error: ${res.status} - ${text}`);
      }
      return res.json(); // Parse JSON response
    })
    .then(data => {
      // Display success message and reset form
      const statusMessage = document.getElementById("status-message");
      statusMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
      form.reset();
    })
    .catch(error => {
      // Handle fetch or server errors
      console.error('Fetch error:', error.message);
      const statusMessage = document.getElementById("status-message");
      statusMessage.textContent = "There was a problem submitting the form.";
    });
}
