// Booking form submission logic
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const pickupLocation = document.getElementById("pickup-location").value;
    const dropLocation = document.getElementById("drop-location").value;

    alert(`Booking Successful!\nPick-up: ${pickupLocation}\nDrop: ${dropLocation}`);
});
