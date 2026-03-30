// Registration form validation and data collection

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const city = document.getElementById('city').value;
  const formMessage = document.getElementById('formMessage');

  // Email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '' || city === '') {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent =
    `Thank you, ${name}! You have successfully registered for updates about tours in ${city}.`;

  // Reset form after successful submission
  document.getElementById('registrationForm').reset();
});
