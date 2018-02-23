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
import {loadState, saveState} from './localStorage'



const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
store.subscribe(()=>{
	saveState(store.getState())
})

sagaMiddleware.run(saga)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
