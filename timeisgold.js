const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function golden() {
    const gold = new Date();

    // Get current day, month, and year
    document.getElementById('fullyear').innerHTML = `${gold.getDate()} - ${gold.getMonth() + 1} - ${gold.getFullYear()} - ${days[gold.getDay()]}`;

    // Get hours, minutes, and seconds
    let hours = gold.getHours();
    const minutes = gold.getMinutes().toString().padStart(2, '0');
    const seconds = gold.getSeconds().toString().padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Display time with AM/PM
    document.getElementById('C4').innerHTML = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
}

// Update time every second
setInterval(golden, 1000);
