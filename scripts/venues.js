import { getVenues, getBands, getBookings } from "./database.js";
const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const venuesList = () =>{
    let venueHTML = "<ul>"
    for(const venue of venues){
        venueHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    return venueHTML += "<ul>"
}

const findBandId = (venueObj) => {
    let foundBandId = [];
    for (const booking of bookings) {
        if (booking.venueId === venueObj.id) {
            foundBandId.push(booking.bandId)
        }
    } return foundBandId
}

const findMatchingBandName = (bandId) =>{
    let matchingName = ""
    for (const band of bands){
        for (const id of bandId){
            if(band.id === id){
                matchingName += `${band.name} are playing here.`
            }
        }
    }
    return matchingName
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
       const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {
            const [,venueId] = itemClicked.id.split("--")
            for(const venue of venues){
                if(venue.id === parseInt(venueId)){
                    const x = findBandId(venue)
                    const y = findMatchingBandName(x)
                    window.alert(y)
                }
            }
        }
    }
)