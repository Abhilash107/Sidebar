// Selecting DOM elements
const sidebar = document.getElementById('sidebar');
const sidebarCollapse = document.getElementById('sidebarCollapse');
const closeBtn = document.getElementById('closeBtn');

// Toggle the sidebar open and closed
sidebarCollapse.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
