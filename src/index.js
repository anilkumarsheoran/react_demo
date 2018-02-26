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

];
	

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))



sagaMiddleware.run(saga)
ReactDOM.render(<Provider store={store}><App items={ITEMS}/></Provider>, document.getElementById('root'));
registerServiceWorker();

