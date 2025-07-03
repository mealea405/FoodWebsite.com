
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// Toggle menu and navbar on menu click
menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Corrected typo: classLisstr → classList
    navbar.classList.toggle('active');
};
 const express = require('express');
 const app = express();

 app.get('/food', (req, res) => {
     res.sendFile(__dirname + '/food.html');
 });

 app.listen(port, () => {
         console.log(`Server running at http://127.0.0.1:${port}/food`);
     });
     


// Handle scroll events
window.onscroll = () => {
    // Remove menu icon and navbar active class on scroll
    menu.classList.remove('fa-times'); // Corrected typo: classLisstr → classList
    navbar.classList.remove('active'); // Corrected: remove → remove('active')

    // Show or hide scroll-to-top button based on scroll position
    if (window.scrollY > 40) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
};

// Loader functionality
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setTimeout(loader, 3000); // Use setTimeout instead of setInterval for a one-time delay
}

// Trigger fadeOut on window load
window.onload = fadeOut;
const scriptURL="https://script.google.com/macros/s/AKfycbwj0YVfBYnD1FPJ-wsyOPTUbW-LBKpfIjdGSkiTQl_0XVHAUCuuB1I0AOobOJhwcgqN/exec";
const form =document.forms["order now-to-google-sheets"];
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        item: document.getElementById("item").value,
        quantity: document.getElementById("quantity").value,
    };

    fetch("YOUR_GOOGLE_SHEET_API_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});

