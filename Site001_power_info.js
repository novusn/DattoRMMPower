const csvUrl = 'https://novusn.github.io/DattoRMMPower/Site001.csv';

function displayPowerInfo(data) {
    const tableBody = document.getElementById('powerInfoTableBody');
    
    data.forEach(row => {
        const tr = document.createElement('tr');
        
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}

Papa.parse(csvUrl, {
    download: true,
    header: false,
    complete: (results) => {
        displayPowerInfo(results.data);
    },
    error: (error) => {
        console.error('Error while parsing the CSV file:', error);
    }
});
