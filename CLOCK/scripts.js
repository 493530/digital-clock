function updateClock() {
    const timeElement = document.getElementById("time");
    const currentTime = new Date();
  
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = "AM";
  
    // Convert 24-hour format to 12-hour format
    if (hours >= 12) {
      period = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    } else if (hours === 0) {
      hours = 12;
    }
  
    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    // Display time
    const timeString = `${hours}:${minutes}:${seconds} ${period}`;
    timeElement.innerHTML = timeString;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  
  // Initialize clock
  updateClock();
  