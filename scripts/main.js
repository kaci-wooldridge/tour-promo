import { bandsList } from "./bands.js"
import { venuesList } from "./venues.js"
import { bookingList } from "./bookings.js"


const applicationHTML = `
<div class="top">
    <h2>~upcoming events~</h2>
    ${bookingList()}
</div>

<div class="middle-row">
    <div class="mid-left">
        <h2>~venues~</h2>
        ${venuesList()}
    </div>

    <div class="mid-right">
        <h2>~bands~</h2>
        ${bandsList()}
    </div>
</div>`


const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML