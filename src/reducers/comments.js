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
                    time: d.getHours()
                }
            ]
        case 'FETCH_COMMENTS':
            return action.comments
        case 'LIKE_COMMENT':
            return state.map(comment => {
                console.log("Liked")
                if (comment.id == action.id) {
                    console.log("Liked")
                    return {
                        ...comment,
                        liked: true
                    }
                }
                return comment
            })
        case 'UNLIKE_COMMENT':
            return state.map(comment => {
                if (comment.id == action.id) {
                    return {
                        ...comment,
                        liked: false
                    }
                }
                return comment
            })
        default:
            return state
    }
}

export default comments