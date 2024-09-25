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

        const container = document.getElementById('table-body');

        // data.forEach(item => {
        //     const div = document.createElement('div');
        //     div.className = 'item';
        //     div.innerHTML = `
        //         <a href="${item.url}" target="_blank"><img src="${item.imgurl}" alt="${item.title}" style="width: 200px; height: auto;"></a>
        //         <h3>${item.title}</h3>
        //         <p>主辦人: ${item.host}</p>
        //     `;

        //     container.appendChild(div);
        // });
    })
    .catch(error => {
        console.error('讀取檔案失敗:', error);
        document.getElementById('content').innerText = '無法讀取檔案';
    });

