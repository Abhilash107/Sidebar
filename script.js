document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('check').checked = false; // Close sidebar after clicking a link
    });
});