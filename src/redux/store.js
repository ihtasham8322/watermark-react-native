import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import reducer from './reducer'
import postsReducer from './reducer/posts'
import { useReducer } from 'react'

import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'

// const logger = createLogger({
//     collapsed: true,
//     diff: true
// })

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    combineReducers({
        root: persistedReducer
    }),
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export const persistor = persistStore(store)
