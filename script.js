fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    const users = document.getElementById('users');
    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-title="Nume">${user.name}</td>
            <td data-title="Email">${user.email}</td>
            <td data-title="Țară">${user.address.country}</td>
        `;
        users.appendChild(row);
    });
})
.catch(error => console.error('Eroare în procesarea datelor JSON:', error));