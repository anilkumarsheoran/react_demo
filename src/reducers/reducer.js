import {postData, fetchData} from '../actions/action'
import {combineReducers} from 'redux'

const postReducer = (state =[], action) => {
	//	console.log(action);
 	switch(action.type){
 		case 'POST_DATA':
 			return {
 				data : [...state, action.data, action.id]
 			}
 		default:
 			return state
 	}
}

const fetchReducer = (state ={}, action) => {
 	switch(action.type){
 		case 'GET_DATA':
 			return {
 				
 			}
 		case 'DISPLAY_DATA':
 			return Object.assign({}, state, action.data)
 		
 		default:
 			return state
 	}
}

const rootReducer = combineReducers({
	postReducer, fetchReducer
})

export default rootReducer