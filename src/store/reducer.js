import { combineReducers } from 'redux'
import counterReducer from './reducers/counterReducer'


const reducer = combineReducers({
    counter: counterReducer
})


export default reducer