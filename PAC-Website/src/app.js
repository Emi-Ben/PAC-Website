// JavaScript for PAC Website Functionality

// Function to switch between tabs
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Hide all tabs
    });
    document.getElementById(tabName).style.display = 'block'; // Show selected tab
}

// Function to toggle visibility of the Volunteer form
function showForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Initialize page to display the 'Home' tab on load
document.addEventListener('DOMContentLoaded', () => {
    showTab('home'); // Default tab
});
