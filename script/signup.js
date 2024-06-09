const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const secondName = document.querySelector('#second-name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const userData = {
    name,
    secondName,
    email,
    password
  };

  fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    window.location.replace("http://127.0.0.1:5500/pages/login.html");
  })
  .catch(error => console.error('Error:', error));
});
