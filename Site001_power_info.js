const csvUrl = 'https://novusn.github.io/DattoRMMPower/Site001.csv';

function displayPowerInfo(data) {
    const tableBody = document.getElementById('powerInfoTableBody');
    
    data.forEach(row => {
        const tr = document.createElement('tr');
        
        row.forEach((cell, index) => {
            const td = document.createElement('td');
            td.textContent = cell;
            
            // Check if the current cell is the Status cell (index 3)
            if (index === 3) {
                // Apply green color if the status is Active, red if Inactive
                if (cell.trim().toLowerCase() === 'active') {
                    td.style.color = 'green';
                } else if (cell.trim().toLowerCase() === 'inactive') {
                    td.style.color = 'red';
                }
            }

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
