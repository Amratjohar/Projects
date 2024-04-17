document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMsg = document.getElementById('error-msg');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
  
      // Retrieve user data array from local storage
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Check if the entered username matches any of the registered usernames
      const userExists = users.some(user => user.username === username);
  
      if (userExists) {
        // Redirect to dashboard page
        window.location.href = 'dashboard.html';
      } else {
        // Display error message
        errorMsg.textContent = 'Invalid username. Please try again.';
      }
    });
  });
  