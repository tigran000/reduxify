import React from 'react'
import axios from 'axios'
import thunk from 'redux-thunk';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers/index'
import App from './App/App'

const url = "http://localhost:5959/api/todos/"
const store = createStore(rootReducer, applyMiddleware(thunk))

axios.get(url).then( res => {
    store.dispatch({type:'INITIAL_REQUEST', todos: res.data})
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)