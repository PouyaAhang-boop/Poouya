const form = document.getElementById('registerForm');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;

    if (name === '' || email === '' || city === '') {
      alert('Please fill in all fields.');
      return;
    }

    window.location.href = 'thankyou.html';
  });
}
