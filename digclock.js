function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    
    // Get GMT time and calculate time difference
    let utchr = date.getUTCHours();    
    let timeDiff = hours - utchr;      
    let adjTimeDiff = timeDiff;        
    let timeZone = "";                 // Store the 4 time zones (PT,MT,CT,ET)
    
    // Convert time difference to positive number if negative
    if (timeDiff < 0) {
        adjTimeDiff = timeDiff + 24;
    }
    
    switch(adjTimeDiff) {
        case 4:
            timeZone = "ET";
            break;
        case 5:
            timeZone = "CT";
            break;
        case 6:
            timeZone = "MT";
            break;
        case 7:
            timeZone = "PT";
            break;
        default:
            timeZone = "PT";
    }
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    // Add leading zeros
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm + " " + timeZone;
    document.getElementById("clock").innerHTML = time;
}

// Initial call
currentTime();
// Update every second
setInterval(currentTime, 1000);
