import { createStore } from 'redux'
import comments from './reducers/comments'

const store = createStore(comments)

export default store