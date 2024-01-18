document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('volunteerForm'); // Ensure the form has this ID
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate First Name
        const firstName = document.querySelector('input[name="firstName"]').value.trim();
        if (!firstName) {
            alert("Please enter your first name.");
            return;
        }

        // Validate Last Name
        const lastName = document.querySelector('input[name="lastName"]').value.trim();
        if (!lastName) {
            alert("Please enter your last name.");
            return;
        }

        // Validate Email
        const email = document.querySelector('input[name="email"]').value.trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate Activity Selection
        const activitySelected = document.querySelector('input[name="activity"]:checked');
        if (!activitySelected) {
            alert("Please select a volunteer activity.");
            return;
        }

        // Validate Date
        const date = document.querySelector('input[name="date"]').value;
        if (!date) {
            alert("Please select a date.");
            return;
        }

        // If everything is valid
        alert("Form is valid. You can proceed with form submission.");
        
    });
});

