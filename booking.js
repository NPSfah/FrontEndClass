document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("booking-form").addEventListener("submit", function (event) {
        let joinLandChecked = document.getElementById("join-land").checked;
        if (joinLandChecked) {
            let confirmChoice = confirm("Do you want to purchase your own airfare (Join Land)?");
            if (confirmChoice) {
                alert("You chose to purchase your own airfare (Join Land)");
            } else {
                event.preventDefault();
            }
        }
        alert("Your booking is successful!");
    });
});