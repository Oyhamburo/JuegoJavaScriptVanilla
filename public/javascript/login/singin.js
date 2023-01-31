const login =document.querySelector('#formSingin')
login.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.querySelector('#usernameSingin').value
  const password = document.querySelector('#passwordSingin').value
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
  console.log(jsonData)
  fetch(`http://localhost:8400/api/login`, options)
    .then((response) => response.json())
});