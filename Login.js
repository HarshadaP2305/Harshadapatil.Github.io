// Hard-coded username and password
const hardCodedUsername = "Harshada";
const hardCodedPassword = "1234";

// Login validation function
function validateLogin(event) {
    // Prevent form submission
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered username and password match the hard-coded values
    if (username === hardCodedUsername && password === hardCodedPassword) {
        // If login is successful, show SweetAlert success message
        Swal.fire({
            icon: 'success',  // Use the default success icon
            title: 'Login Successful',
            text: 'Welcome back, ' + username + '!',
            confirmButtonText: 'Proceed',
        }).then(() => {
            // Redirect to homepage after success
            window.location.href = "index1.html";
        });
    } else {
        // If login fails, show SweetAlert error message
        Swal.fire({
            icon: 'error',  // Use the default error icon
            title: 'Invalid Username or Password',
            text: 'Please check your credentials.',
            confirmButtonText: 'Try Again',
        });
    }
}
