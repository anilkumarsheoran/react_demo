import { call, put, takeLatest } from 'redux-saga/effects'
import {fetchAPI, postAPI} from './api'
import {saveState, loadState} from './localStorage'

function* fetchSaga(action) {
   try {
   	 
      const data = yield call(fetchAPI	);

      yield put({type: "DISPLAY_DATA", data});
    
   } catch (e) {
      yield put(alert('some thing went wrong'));
   }
}

function* postSaga(action) {
   try {
      const data = yield call(saveState, action.data, action.id);
    	// alert("Post request Successful with title:- " + action.data)
   } catch (e) {
      yield put(alert('some thing went wrong'));
   }
}

function* saga(){
	try{
		yield takeLatest( "GET_DATA", loadState);
		yield takeLatest("POST_DATA", postSaga)
	}catch(e){
		  yield put(alert('some thing went wrong'));
	}
}

export default saga