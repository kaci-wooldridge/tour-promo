import { getBookings, getBands, getVenues } from "./database.js";
const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

const findBands = (booking, allBands) =>{
    let bandBooked = ""
    for(const band of allBands){
            if (band.id === booking.bandId){
                bandBooked = band
        }
    }
    return bandBooked
}

const findVenue = (booking, allVenues) =>{
    let venueBooked = ""
    for(const venue of allVenues){
        if(venue.id === booking.venueId){
            venueBooked = venue
        }
    }
    return venueBooked
}

export const bookingList = () =>{
    let html =""
    html = `<ul>`

    for (const booking of bookings){
        const band = findBands(booking, bands)
        const venue = findVenue(booking, venues)
        html += `<li id="booking--${booking.id}">${band.name} are playing at ${venue.name} on ${booking.date}.`
    }
    return html += `</ul>`
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
       const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {
            const [,bookingId] = itemClicked.id.split("--")
            for (const booking of bookings) {
                if (booking.id === parseInt(bookingId)){
                    const band = findBands(booking, bands)
                    window.alert(`${band.name}\n${band.genre}\nformed in ${band.yearFormed}\n${band.memberCount} members`) 
                }
            }
        }
    }
)