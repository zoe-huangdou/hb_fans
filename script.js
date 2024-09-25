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


/* 按鈕的樣式 */
        #back-to-top {
            display: none; /* 頁面加載時先隱藏 */
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99;
            background-color: #3498db;
            color: white;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            cursor: pointer;
            font-size: 16px;
        }

        /* 當滑動到一定位置，按鈕會顯示 */
        #back-to-top.show {
            display: block;
        }