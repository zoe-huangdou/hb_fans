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
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxOrganizer = document.getElementById('lightbox-organizer');
        const lightboxRules = document.getElementById('lightbox-rules');
        const closeLightbox = document.getElementById('close-lightbox');

        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';
            div.innerHTML = `
                <a href="${item.url}" target="_blank"><img src="${item.imgurl}" alt="${item.title}" style="width: 200px; height: auto;"></a>
                <h3>${item.title}</h3>
                <p>主辦人: ${item.host}</p>
                <p>規則: ${item.rule}</p>
            `;

            // 點擊事件
            div.onclick = () => {
                lightbox.style.display = 'flex'; // 顯示燈箱
                lightboxImage.src = item.img; // 設定燈箱的圖片
                lightboxTitle.innerText = item.title; // 設定燈箱標題
                lightboxOrganizer.innerText = `主辦人: ${item.organizer}`; // 設定燈箱主辦人
                lightboxRules.innerText = `規則: ${item.rules}`; // 設定燈箱規則
            };
            container.appendChild(div);
        });

        // 關閉燈箱
        closeLightbox.onclick = () => {
            lightbox.style.display = 'none'; // 隱藏燈箱
        };

        // 點擊燈箱外部也可以關閉
        lightbox.onclick = () => {
            lightbox.style.display = 'none'; // 隱藏燈箱
        };

    })
    .catch(error => {
        console.error('讀取檔案失敗:', error);
        document.getElementById('content').innerText = '無法讀取檔案';
    });