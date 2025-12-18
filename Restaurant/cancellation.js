document.addEventListener("DOMContentLoaded", function () {

    // Show saved booking (assuming booking saved as "bookingData")
    const booking = JSON.parse(localStorage.getItem("bookingData"));

    if (booking) {
        document.getElementById("bk-name").textContent = booking.name;
        document.getElementById("bk-email").textContent = booking.email;
        document.getElementById("bk-date").textContent = booking.date;
        document.getElementById("bk-time").textContent = booking.time;
        document.getElementById("bk-guests").textContent = booking.guests;
    }

    // CANCEL BUTTON LOGIC
    document.getElementById("cancelBookingBtn").addEventListener("click", function () {

        // 1. Delete booking from local storage
        localStorage.removeItem("bookingData");

        // 2. Show cancel message
        document.getElementById("cancelMessage").style.display = "block";

        // 3. OPTIONAL: disable button so user cannot click again
        this.disabled = true;
        this.textContent = "Booking Cancelled";

        // 4. OPTIONAL: send cancel email using EmailJS
        emailjs.send("YOUR_SERVICE_ID", "CANCEL_TEMPLATE_ID", {
            name: booking.name,
            email: booking.email,
            date: booking.date,
            time: booking.time,
            guests: booking.guests
        });
    });

});
