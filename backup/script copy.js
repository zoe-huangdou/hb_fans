fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('網路回應不正常');
        }
        return response.json();
    })
    .then(data => {
        const tableBody = document.getElementById('table-body'); // 表格的 tbody
        tableBody.innerHTML = ''; // 清空表格內容

        data.forEach(item => {
            const row = document.createElement('tr');

            // img 欄位
            const imgCell = document.createElement('td');
            imgCell.innerHTML = `<a href="${item.url}" target="_blank"><img src="${item.imgurl}" alt="${item.title}" style="width: 200px; height: auto;"></a>`;
            row.appendChild(imgCell);
            
            // title 欄位
            const titleCell = document.createElement('td');
            titleCell.innerText = item.title;
            row.appendChild(titleCell);
            
            // host 欄位
            const hostCell = document.createElement('td');
            hostCell.innerText = item.host;
            row.appendChild(hostCell);

            // rule 欄位
            const ruleCell = document.createElement('td');
            ruleCell.innerText = item.rule;
            row.appendChild(ruleCell);

            // 將新行添加到表格中
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('讀取檔案失敗:', error);
        document.getElementById('content').innerText = '無法讀取檔案';
    });