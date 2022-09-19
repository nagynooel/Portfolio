// Toggle the responsive navbar
function toggle_navbar() {
    document.getElementById("resp-nav").classList.toggle("open");
}

// Wait for page to fully load
window.addEventListener('load', (event) => {
    console.log('Page loaded');
    
    // Make sure that the responsive navbar is closed when the page is loaded
    try {
        document.getElementById("resp-nav").classList.remove("open");
    } catch (e) {
        console.log("Faild to close responsive navbar", e);
    }
});