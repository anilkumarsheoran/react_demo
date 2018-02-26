import {postData, fetchData} from '../actions/action'
import {combineReducers} from 'redux'

const postReducer = (state ={}, action) => {
 	switch(action.type){
 		case 'POST_DATA':
 		debugger;
 			return [...state,{title:action.data, id :action.id}]
 		case 'UPDATE_DATA':
 			return state.map(data =>
 				(data.id === action.id)? {...data, title: action.data} : data) 		
 		case 'GET_DATA':
 			debugger;
 			return  [...state, action.data]
 		case 'DISPLAY_DATA':
 			return action.data		
 		default:
 			return state
 	}
}

const fetchReducer = (state ={}, action) => {
 	switch(action.type){
 	
 		default:
 			return state
 	}
}

const rootReducer = combineReducers({
	postReducer, fetchReducer
})

export default rootReducer