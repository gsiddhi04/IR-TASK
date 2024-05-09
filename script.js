// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("scholarship-form");
    const scholarshipList = document.getElementById("scholarship-list");

    // Function to handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        const name = form.querySelector("#name").value;
        const eligibility = form.querySelector("#eligibility").value;
        const stipend = form.querySelector("#stipend").value;
        const link = form.querySelector("#link").value;

        // Create new scholarship item
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Eligibility:</strong> ${eligibility}</p>
            <p><strong>Stipend Amount:</strong> ${stipend}</p>
            <a href="${link}" target="_blank">Apply Now</a>
            <button class="delete-btn">Delete</button>
        `;
        scholarshipList.appendChild(listItem);

        // Reset form
        form.reset();
    });

    // Function to handle scholarship deletion
    scholarshipList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            const listItem = event.target.parentElement;
            scholarshipList.removeChild(listItem);
        }
    });
});
