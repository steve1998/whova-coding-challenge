/*
    Helper function to filter the selected reply with the given reply id.
    Modifies the like state of a reply object.
*/
export const filterReply = (replies, id, like) => {
    return replies.map(reply => {
        if (reply.replyId === id) {
            return {
                ...reply,
                liked: like
            }
        }

        return reply
    })
}