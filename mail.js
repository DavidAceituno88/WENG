
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();  // Prevent form from refreshing the page

  const formData = new FormData(this);  // Gather form data
  const data = Object.fromEntries(formData.entries());  // Convert to object

  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      this.reset();  // Clear form fields
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again later.');
  }
});
