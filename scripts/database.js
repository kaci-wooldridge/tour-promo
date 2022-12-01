const bands = [
    {
        id: 1,
        name: "The Baby Sharks",
        memberCount: 4,
        genre: "Heavy Metal",
        yearFormed: 2017
    },
    {
        id: 2,
        name: "The Wild Collapsing Humming Birds",
        memberCount: 3,
        genre: "Indie Rock",
        yearFormed: 2015
    },
    {
        id: 3,
        name: "The Crazy Lads",
        memberCount: 4,
        genre: "Pop",
        yearFormed: 2020
    }
]

const venues = [
    {
        id: 1,
        name: "LocationX",
        address: "123 X Street",
        sqFt: 3000,
        maxOccupancy: 100
    },
    {
        id: 2,
        name: "Event Tent",
        address: "123 Y Street",
        sqFt: 3000,
        maxOccupancy: 100
    },
    {
        id: 3,
        name: "Crowd Surf",
        address: "123 Z Street",
        sqFt: 3000,
        maxOccupancy: 100
    }
]

const bookings = [
    {
        id: 1,
        bandId: 1,
        venueId: 3,
        date: "December 1st"
    },
    {
        id: 2,
        bandId: 2,
        venueId: 1,
        date: "December 2nd"
    },
    {
        id: 3,
        bandId: 3,
        venueId: 2,
        date: "December 3rd"
    }
]

export const getBands = () =>{
    return bands.map(band => ({...band}))
}
export const getVenues = () =>{
    return venues.map(venue => ({...venue}))
}
export const getBookings = () =>{
    return bookings.map(booking => ({...booking}))
}