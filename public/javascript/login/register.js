const form = document.querySelector('#formRegister')
form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('ejecuto funcion registrar')
  const username = document.querySelector('#usernameRegister').value
  const password = document.querySelector('#passwordRegister').value
  const jsonData = {
    "username": username,
    "password": password
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonData)
  };

  fetch(`http://localhost:8400/api/register`, options)
    .then((response) => response.json())
    .then((data) => console.log("desde fecht", data));
});