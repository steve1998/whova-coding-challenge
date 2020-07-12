// Gets the current hour
export const getDate = () => {
    let d = new Date()
    return d.getHours()
}

// Calculates the hour difference for a comment
export const getTimeDifference = (currentHour, commentHour) => {
    return currentHour - commentHour
}