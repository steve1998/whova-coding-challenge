// Services to get from local storage
export const saveToStorage = commentList => {
    localStorage.setItem('comments', JSON.stringify(commentList))
}

export const retrieveFromStorage = () => {
    let commentList = JSON.parse(localStorage.getItem('comments'))
    return commentList
}

export const getNumberofItemsinStorage = () => {
    return localStorage.length
}