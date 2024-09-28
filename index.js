document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = password;
    newRow.insertCell(3).textContent = dob;
    newRow.insertCell(4).textContent = terms;

    document.getElementById('registrationForm').reset();
});
