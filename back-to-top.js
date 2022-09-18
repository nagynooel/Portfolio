//Get the button
let btt_btn = document.getElementById("btn-back-to-top");

// When the user scrolls run show btt function
window.onscroll = function () {
    show_btt_btn();
};

function show_btt_btn() {
    // Measure how much did the user scroll
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        // Show button if at least 20 px was scrolled from top
        btt_btn.style.display = "block";
    } else {
        btt_btn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
btt_btn.addEventListener("click", back_to_top);

function back_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}