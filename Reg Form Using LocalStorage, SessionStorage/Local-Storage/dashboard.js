document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user data array from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Display user data in the dashboard table
    const table = document.getElementById('userData');
  
    // Function to display user data in table rows
    function renderUser(user) {
      const row = table.insertRow();
      const fullNameCell = row.insertCell(0);
      const emailCell = row.insertCell(1);
      const mobileCell = row.insertCell(2);
      const usernameCell = row.insertCell(3);
      const actionsCell = row.insertCell(4);
  
      fullNameCell.innerHTML = user.fullName;
      emailCell.innerHTML = user.email;
      mobileCell.innerHTML = user.mobile;
      usernameCell.innerHTML = user.username;
  
      const updateBtn = document.createElement('button');
      updateBtn.textContent = 'Update';
      updateBtn.addEventListener('click', function() {
        // Enable editing of user data
        fullNameCell.contentEditable = true;
        emailCell.contentEditable = true;
        mobileCell.contentEditable = true;
        usernameCell.contentEditable = true;
        
        // Show Save button
        saveBtn.style.display = 'inline';
      });
  
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
      saveBtn.style.display = 'none';
      saveBtn.addEventListener('click', function() {
        // Save updated user data
        user.fullName = fullNameCell.textContent;
        user.email = emailCell.textContent;
        user.mobile = mobileCell.textContent;
        user.username = usernameCell.textContent;
        
        // Save updated user data array to local storage
        localStorage.setItem('users', JSON.stringify(users));
        
        // Disable editing of user data
        fullNameCell.contentEditable = false;
        emailCell.contentEditable = false;
        mobileCell.contentEditable = false;
        usernameCell.contentEditable = false;
        
        // Hide Save button
        saveBtn.style.display = 'none';
      });
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        // Remove user data from table
        table.deleteRow(row.rowIndex);
        
        // Remove user data from array
        const index = users.indexOf(user);
        users.splice(index, 1);
        
        // Save updated user data array to local storage
        localStorage.setItem('users', JSON.stringify(users));
      });
  
      actionsCell.appendChild(updateBtn);
      actionsCell.appendChild(saveBtn);
      actionsCell.appendChild(deleteBtn);
    }
  
    // Render each user in the table
    users.forEach(renderUser);
  });
  