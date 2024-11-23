// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('Right-click is disabled on this website.');
});

// Disable keyboard shortcuts for inspecting elements
document.addEventListener('keydown', function (e) {
    // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, F12
    if (e.ctrlKey && (e.shiftKey && (e.key === 'I' || e.key === 'J')) || e.key === 'U' || e.key === 'F12') {
        e.preventDefault();
        alert('Inspect element is disabled.');
    }
});