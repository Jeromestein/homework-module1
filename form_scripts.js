document.addEventListener('DOMContentLoaded', function() {
    // Get the select element
    const contactMethod = document.getElementById('contactMethod');
    const emailField = document.getElementById('emailField');
    const phoneField = document.getElementById('phoneField');

    // Add event listener for select changes
    contactMethod.addEventListener('change', function() {
        // Hide both fields first
        emailField.style.display = 'none';
        phoneField.style.display = 'none';

        // Show the appropriate field based on selection
        if (this.value === 'email') {
            emailField.style.display = 'block';
        } else if (this.value === 'phone') {
            phoneField.style.display = 'block';
        }
    });
}); 