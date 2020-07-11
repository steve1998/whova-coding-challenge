import { filterReply } from '../helpers/filter'

const comments = (state = [], action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            let d = new Date()
            return [
                ...state, 
                {
                    id: action.id,
                    text: action.text,
                    liked: false,
                    time: d.getHours(),
                    replies: []
                }
            ]
        case 'FETCH_COMMENTS':
            return action.comments
        case 'LIKE_COMMENT':
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        liked: true
                    }
                }
                return comment
            })
        case 'UNLIKE_COMMENT':
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        liked: false
                    }
                }
                return comment
            })
        case 'ADD_REPLY':
            return state.map(comment => {
                if (comment.id === action.commentId) {
                    if (comment.replies === undefined) {
                        return {
                            ...comment,
                            replies: [
                                {
                                    replyId: action.replyId,
                                    text: action.text,
                                    liked: false
                                }
                            ]
                        }
                    } else {
                        return {
                            ...comment,
                            replies: [
                                ...comment.replies,
                                {
                                    replyId: action.replyId,
                                    text: action.text,
                                    liked: false
                                }
                            ]
                        } 
                    }
                }
                return comment
            })
        case 'LIKE_REPLY':
            return state.map(comment => {
                if (comment.id === action.commentId) {
                    return {
                        ...comment,
                        replies: filterReply(comment.replies, action.replyId, true)
                    }
                }
                return comment
            })
        case 'UNLIKE_REPLY':
            return state.map(comment => {
                if (comment.id === action.commentId) {
                    return {
                        ...comment,
                        replies: filterReply(comment.replies, action.replyId, false)
                    }
                }
                return comment
            })
        default:
            return state
    }
}

export default comments