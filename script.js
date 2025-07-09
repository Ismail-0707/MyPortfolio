// This function is triggered when the "View Projects" button is clicked
function scrollToSection(sectionId) {
  // Get the section element using its ID
  const section = document.getElementById(sectionId);

  // Scroll smoothly to that section
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// This function handles the contact form submission
function submitForm(event) {
  // Prevent the default form refresh
  event.preventDefault();

  // Show a simple message after submission
  const statusMessage = document.getElementById("status-message");

  // Just a fake success message (because we don’t have backend)
  statusMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";

  // Clear the form inputs
  const form = event.target;
  form.reset();
}
