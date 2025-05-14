// Function to show only the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Initially display only the home section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
// Function to handle logout
function logout() {
    // Clear session or local storage if needed
    localStorage.removeItem("username");  // Example: remove username from localStorage

    // Optionally, redirect to the login page
    window.location.href = "index.html";  // Redirect to login page after logout
    
    // SweetAlert popup for logout confirmation
    Swal.fire({
        title: 'Logged Out!',
        text: 'You have successfully logged out.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
// Block non-numeric input immediately when typing in mobile field
const mobileInput = document.getElementById('mobile');
mobileInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Allow only numbers

    // If invalid character entered, show a small warning
    if (/\D/.test(this.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Only Numbers Allowed',
            text: 'Please enter numbers only in Mobile Number field.',
        });
        this.value = this.value.replace(/\D/g, '');
    }
});

function toggleMenu() {
  document
    .querySelectorAll('.nav-links')
    .forEach(nav => nav.classList.toggle('active'));
}


// Toggle the navigation menu on mobile


// Handle form submit
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submit

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate fields
    if (name === "" || email === "" || mobile === "" || message === "") {
        Swal.fire('Error', 'Please fill all the fields.', 'error');
        return;
    }

    if (!emailPattern.test(email)) {
        Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
        return;
    }

    if (mobile.length !== 10) {
        Swal.fire('Invalid Mobile Number', 'Mobile number must be exactly 10 digits.', 'error');
        return;
    }

    // Success Sweet Alert
    Swal.fire({
        title: 'Message Sent!',
        text: `Mobile Number ${mobile}: Message sent successfully!`,
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Optionally, clear the form after submit
    this.reset();
});

