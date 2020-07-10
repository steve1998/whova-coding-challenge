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
        default:
            return state
    }
}

export default comments