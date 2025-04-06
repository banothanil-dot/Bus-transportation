document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to check validation

    // Get form values
    const firstName = document.getElementById('fname').value.trim();
    const middleName = document.getElementById('mname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    const rollNumber = document.getElementById('roll').value.trim();
    const email = document.getElementById('mail').value.trim();
    const mobile = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const department = document.getElementById('department').value.trim();
    const password = document.getElementById('pwd').value.trim();        
    const address = document.getElementById('address').value;
    const picture = document.querySelector('#picture').files[0];

    const genderRadios = document.getElementsByName('gender');
    let isChecked = false;
    let selectedGender = '';
    for (const radio of genderRadios) {
        if (radio.checked) {
            isChecked = true;
            selectedGender = radio.value;
            break;
        }
    }
    if (!isChecked) {
        alert('Please select gender');
        return;
    }

    // Regex Patterns
    const nameRegex = /^[A-Za-z\s]{2,30}$/;
    const rollNumberRegex = /^1601\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;


    // Validation
    if (!nameRegex.test(firstName)) {
        alert("Invalid First Name! Only alphabets allowed (2-30 characters).");
        return;
    }

    if (middleName && !nameRegex.test(middleName)) {
        alert("Invalid Middle Name! Only alphabets allowed (2-30 characters).");
        return;
    }

    if (!nameRegex.test(lastName)) {
        alert("Invalid Last Name! Only alphabets allowed (2-30 characters).");
        return;
    }

    if (!rollNumberRegex.test(rollNumber)) {
        alert("Invalid Roll Number! Please provide a valid roll number that starts with 1601 and is followed by 8 digits.");
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert("Invalid Email Address!");
        return;
    }

    if (!mobileRegex.test(mobile)) {
        alert("Invalid Mobile Number! Must start with 6-9 and be 10 digits.");
        return;
    }

    if (!dob) {
        alert("Date of Birth is required!");
        return;
    }

    if (!nameRegex.test(department)) {
        alert("Invalid Department Name! Only alphabets allowed (2-30 characters).");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Weak Password! Must be at least 8 characters with at least one uppercase, one lowercase letter and one number.");
        return;
    }

    if (address === "--Select--" || address === "") {
        alert("Please select your address.");
        return;
    }

    if (!picture) {
        alert("Please upload a passport size photograph.");
        return;
    }

    // If all validations pass
    let res = confirm("Do you want to submit the form?");
    if (res) {
        alert("Form submitted successfully!");
        this.submit(); // Submit the form
    }
});