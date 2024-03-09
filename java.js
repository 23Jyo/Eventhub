function checkPassword() {
  const passwordInput = document.getElementById('password');
  const resultElement = document.getElementById('result');
  const password = passwordInput.value;

  // You can replace this with your own password strength checking logic or use a library like zxcvbn
  const passwordStrength = zxcvbn(password);

  if (passwordStrength.score >= 3) {
      resultElement.innerText = 'Password is strong!';
      resultElement.style.color = 'green';
  } else {
      resultElement.innerText = 'Password is weak. Please choose a stronger password.';
      resultElement.style.color = 'red';
  }
}