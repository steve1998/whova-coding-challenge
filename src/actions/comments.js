import { generateRandomString } from '../helpers/idGenerator'

export const addComment = text => ({
    type: 'ADD_COMMENT',
    id: generateRandomString(),
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

export const addReply = (text, id) => ({
    type: 'ADD_REPLY',
    commentId: id,
    replyId: generateRandomString(),
    text
})

export const likeReply = (commentId, replyId) => ({
    type: 'LIKE_REPLY',
    commentId,
    replyId
})

export const unlikeReply = (commentId, replyId) => ({
    type: 'UNLIKE_REPLY',
    commentId,
    replyId
})