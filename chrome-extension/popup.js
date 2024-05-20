document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchData').addEventListener('click', function() {
        fetch('http://localhost:5000/api/data')
            .then(response => response.json())
            .then(data => {
                const dataList = document.getElementById('dataList');
                dataList.innerHTML = '';
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.data;
                    dataList.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
