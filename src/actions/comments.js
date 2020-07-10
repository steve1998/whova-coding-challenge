import { getNumberofItemsinStorage } from '../services/api'

let commentId = getNumberofItemsinStorage()
console.log(commentId)

export const addComment = text => ({
    type: 'ADD_COMMENT',
    id: ++commentId,
    text
})

export const fetchComments = arrayOfComments => ({
    type: 'FETCH_COMMENTS',
    comments: arrayOfComments
})

export const likeComment = id => ({
    type: 'LIKE_COMMENT',
    id: id
})

export const unlikeComment = id => ({
    type: 'UNLIKE_COMMENT',
    id: id
})