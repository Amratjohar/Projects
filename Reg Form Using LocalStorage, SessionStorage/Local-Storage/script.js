// document.addEventListener('DOMContentLoaded', function() {
//     const registrationForm = document.getElementById('registrationForm');
  
//     registrationForm.addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       const fullName = document.getElementById('fullName').value;
//       const email = document.getElementById('email').value;
//       const mobile = document.getElementById('mobile').value;
//       const username = document.getElementById('username').value;
  
//       // Get existing user data from local storage or initialize an empty array
//       let users = JSON.parse(localStorage.getItem('users')) || [];
  
//       const user = {
//         fullName: fullName,
//         email: email,
//         mobile: mobile,
//         username: username
//       };
  
//       // Add the new user data to the array
//       users.push(user);
  
//       // Save the updated user data array to local storage
//       localStorage.setItem('users', JSON.stringify(users));
  
//       // Redirect to dashboard page
//       window.location.href = 'dashboard.html';
//     });
//   });
  
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
  
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
      const username = document.getElementById('username').value;
  
      // Get existing user data from local storage or initialize an empty array
      let users = JSON.parse(localStorage.getItem('users')) || [];
  
      const user = {
        fullName: fullName,
        email: email,
        mobile: mobile,
        username: username
      };
  
      // Add the new user data to the array
      users.push(user);
  
      // Save the updated user data array to local storage
      localStorage.setItem('users', JSON.stringify(users));
  
      // Clear form fields
      registrationForm.reset();
  
      // Show success message
      alert("User successfully registered!");
  
      // Redirect to dashboard page after alert confirmation
      // window.location.href = 'dashboard.html';
    });
  });
  