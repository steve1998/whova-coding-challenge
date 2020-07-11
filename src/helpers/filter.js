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