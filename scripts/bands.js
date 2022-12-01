import { getVenues, getBands, getBookings } from "./database.js";
const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const bandsList = () =>{
    let bandHTML = "<ul>"
    for(const band of bands){
        bandHTML += `<li id="band--${band.id}">${band.name}</li>`
    }
    return bandHTML += "<ul>"
}

const findVenueId = (bandObj) => {
    let foundVenueId = [];
    for (const booking of bookings) {
        if (booking.bandId === bandObj.id) {
            foundVenueId.push(booking.venueId)
        }
    } return foundVenueId
}

const findMatchingVenueName = (venueId) =>{
    let matchingName = ""
    for (const venue of venues){
        for (const id of venueId){
            if(venue.id === id){
                matchingName += `They are playing at ${venue.name}`
            }
        }
    }
    return matchingName
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
       const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [,bandId] = itemClicked.id.split("--")
            for(const band of bands){
                if(band.id === parseInt(bandId)){
                    const x = findVenueId(band)
                    const y = findMatchingVenueName(x)
                    window.alert(y)
                }
            }
        }
    }
)