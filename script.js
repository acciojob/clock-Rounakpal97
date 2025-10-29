//your JS code here. If required.
function updateClock() {
    const timerElement = document.getElementById('timer');

    // Get current date and time
    const now = new Date();

    // Format date and time as a string
    const formattedTime = now.toLocaleString(); // e.g., "10/29/2025, 11:20:30 AM"

    // Update the timer element
    timerElement.textContent = formattedTime;
}

// Update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
