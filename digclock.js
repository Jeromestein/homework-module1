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

function generatePartners() {
    const partners = [
        {
            img: "images/partners/partner-bustour.png",
            alt: "Partner Bus Tours"
        },
        {
            img: "images/partners/partner-cabinrental.png",
            alt: "Partner Cabin Rental"
        },
        {
            img: "images/partners/partner-campingadv.png",
            alt: "Partner Camping Adventure"
        },
        {
            img: "images/partners/partner-collegetours.png",
            alt: "Partner College Tours"
        },
        {
            img: "images/partners/partner-rentalbike.png",
            alt: "Partner Bike Rentals"
        },
        {
            img: "images/partners/partner-tourgroup.png",
            alt: "Partner Tour Group"
        }
    ];

    const partnersContainer = document.getElementById('partners');
    
    partners.forEach(partner => {
        const li = document.createElement('li');
        li.className = 'partner';
        
        const img = document.createElement('img');
        img.src = partner.img;
        img.alt = partner.alt;
        
        li.appendChild(img);
        partnersContainer.appendChild(li);
    });
}

// Call the function when the page loads
window.onload = function() {
    generatePartners();
};
