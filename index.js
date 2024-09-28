function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';
    
    entries.forEach(entry => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.password}</td>
            <td>${entry.dob}</td>
            <td>${entry.acceptedTerms}</td>
        `;
        tableBody.appendChild(newRow);
    });
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptedTerms').checked;
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 18 || age > 55) {
        alert('You must be between 18 and 55 years old.');
        return;
    }

    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.push({ name, email, password, dob, acceptedTerms });
    localStorage.setItem('entries', JSON.stringify(entries));
    this.reset();
    loadEntries();
});
window.onload = loadEntries;