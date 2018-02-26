import { call, put, takeLatest } from 'redux-saga/effects'
import {fetchAPI, postAPI} from './api'
import {saveState, loadState,initialState} from './localStorage'
import UUID from 'uuid/v4'


const ITEMS = [
  {title: 'user1',id: 1},
  {title: 'user2',id: 2},
  {title: 'user3',id: 3},
  {title: 'user4',id: 4},
  {title: 'user5', id: 5},
  {title: 'user6', id: 6},
  {title: 'user7', id: 7}
];


function* fetchSaga(action) {
   try {
   	  const data1 = yield call(initialState,ITEMS); 
       const data = yield call(loadState);
      yield put({type: "DISPLAY_DATA", data});
    
   } catch (e) {
      yield put(alert('some thing went wrong in ferch data'));
   }
}

function* postSaga(action) {
   try {
      const d = [...action.data1, {title:action.data, id :action.id}]
      const data = yield call(saveState,d);

    	// alert("Post request Successful with title:- " + action.data)
   } catch (e) {
      yield put(alert('some thing went wrong'));
   }
}



function* saga(){
	try{
		
		yield takeLatest("GET_DATA", fetchSaga)
      yield takeLatest("POST_DATA", postSaga)
      yield takeLatest("UPDATE_DATA",postSaga)
	}catch(e){
		  yield put(alert('some thing went wrong'));
	}
}

export default saga