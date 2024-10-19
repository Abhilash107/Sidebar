document.getElementById("signUpLink").addEventListener("click", function() {
  document.getElementById("card").classList.add("flip");
});

document.getElementById("loginLink").addEventListener("click", function() {
  document.getElementById("card").classList.remove("flip");
});

// Validate Login Form
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Clear previous error messages
  document.getElementById("loginEmailError").textContent = '';
  document.getElementById("loginPasswordError").textContent = '';
  
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  let isValid = true;

  // Validate Email
  if (!email) {
      document.getElementById("loginEmailError").textContent = 'Email is required.';
      isValid = false;
  } else if (!validateEmail(email)) {
      document.getElementById("loginEmailError").textContent = 'Invalid email format.';
      isValid = false;
  }

  // Validate Password
  if (!password) {
      document.getElementById("loginPasswordError").textContent = 'Password is required.';
      isValid = false;
  }

  if (isValid) {
      // Proceed with login (add your login logic here)
      console.log("Logging in:", email);
  }
});

// Validate Sign Up Form
document.getElementById("signUpForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Clear previous error messages
  document.getElementById("fullNameError").textContent = '';
  document.getElementById("signUpEmailError").textContent = '';
  document.getElementById("signUpPasswordError").textContent = '';

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  let isValid = true;

  // Validate Full Name
  if (!fullName) {
      document.getElementById("fullNameError").textContent = 'Full Name is required.';
      isValid = false;
  } else if (!validateFullName(fullName)) {
      document.getElementById("fullNameError").textContent = 'Full Name must contain only letters.';
      isValid = false;
  }

  // Validate Email
  if (!email) {
      document.getElementById("signUpEmailError").textContent = 'Email is required.';
      isValid = false;
  } else if (!validateEmail(email)) {
      document.getElementById("signUpEmailError").textContent = 'Invalid email format.';
      isValid = false;
  }

  // Validate Password
  if (!password) {
      document.getElementById("signUpPasswordError").textContent = 'Password is required.';
      isValid = false;
  }

  if (isValid) {
      // Proceed with sign-up (add your sign-up logic here)
      console.log("Signing up:", fullName, email);
  }
});

// Function to validate email format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to validate full name (only letters)
function validateFullName(name) {
  const regex = /^[A-Za-z\s]+$/; // Only letters and spaces
  return regex.test(name);
}
