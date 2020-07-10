import { getNumberofItemsinStorage } from '../services/api'

let commentId = getNumberofItemsinStorage()

export const addComment = text => ({
    type: 'ADD_COMMENT',
    id: ++commentId,
    text
})

export const fetchComments = arrayOfComments => ({
    type: 'FETCH_COMMENTS',
    comments: arrayOfComments
})