function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const male = document.getElementById('male').checked;
    const female = document.getElementById('female').checked;
    const gender = (male && female) ? 'Male, Female' : (male ? 'Male' : (female ? 'Female' : ''));
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Display survey results in the popup
    document.getElementById('popupFirstName').textContent = firstName;
    document.getElementById('popupLastName').textContent = lastName;
    document.getElementById('popupDOB').textContent = dob;
    document.getElementById('popupCountry').textContent = country;
    document.getElementById('popupGender').textContent = gender;
    document.getElementById('popupProfession').textContent = profession;
    document.getElementById('popupEmail').textContent = email;
    document.getElementById('popupMobile').textContent = mobile;

    // Show the popup
    document.getElementById('popup').style.display = 'block';

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
    document.getElementById('popup').style.display = 'none';
}