function validateForm() {
  var name = document.getElementById('name').value;
  var name = document.getElementById('email').value
  var name = document.getElementById('pw').value
  var name = document.getElementById('conPw').value
  var errorMessage = document.getElementById('errorMessage');

// Clear previous error messages
errorMessage.innerHTML = 'Passwords do not mmatch';
  return false;
}

// Check if passwords match
if (password !== confirmPassword) {
  errorMessage.innerHTML = 'Passwords do not match!';
  return false;
}

// Check if all fields are filled
if (name === '' || email === '' ||
    password === '' || confirmPassword === '') {
  errorMessage.innerHTML = 'All fields are required!';
  return false;
}
