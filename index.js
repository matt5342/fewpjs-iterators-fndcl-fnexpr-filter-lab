// Code your solution here
function findMatching(array, string) {
    let matches = array.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return matches
}
function fuzzyMatch(array, string) {
    let matches = array.filter(driver => {
        return driver[0] == string[0]
    })
    return matches 
}
function matchName(array, string) {
    let matches = array.filter(driver => {
        return driver.name == string
    })
    return matches
}