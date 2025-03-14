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
