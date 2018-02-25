import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers/reducer'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';
import {loadState, saveState, initialState} from './localStorage'

const ITEMS = [
  {title: 'user1',id: 1},
  {title: 'user2',id: 2},
  {title: 'user3',id: 3},
  {title: 'user4',id: 4},
  {title: 'user5', id: 5},
  {title: 'user6', id: 6},
  {title: 'user7', id: 7}
];

const persistedState = initialState(ITEMS)
const initial =loadState()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, {postReducer :initial}  , composeWithDevTools(applyMiddleware(sagaMiddleware)))
store.subscribe(()=>{
	saveState(store.getState());
})


sagaMiddleware.run(saga)
ReactDOM.render(<Provider store={store}><App items={ITEMS}/></Provider>, document.getElementById('root'));
registerServiceWorker();

