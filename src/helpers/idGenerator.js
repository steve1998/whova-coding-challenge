/*
    Generates a random string by choosing on of the characters provided using
    Math.random() and appending the result to an 8-digit random string
*/
export const generateRandomString = () => {
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    
    for(let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    
    return result
}