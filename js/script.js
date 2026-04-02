document.addEventListener('DOMContentLoaded', function () {

  const showButton = document.getElementById('showMessageBtn');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (showButton) {
    showButton.addEventListener('click', function () {
      thankYouMessage.textContent = 'Thank you for choosing UK City Tour!';
    });
  }

  const form = document.getElementById('registrationForm');
  const formMessage = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const city = document.getElementById('city').value;

      if (name === '' || email === '' || city === '') {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
      }

      formMessage.textContent =
        'Thank you, ' + name + '! You have successfully registered for updates about tours in ' + city + '.';
      formMessage.style.color = 'green';

      form.reset();
    });
  }

});
