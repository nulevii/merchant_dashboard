import { createStore, applyMiddleware } from 'redux'
import { reducer, initialState } from './reducer'
import createSagaMiddleware from 'redux-saga'
// import mySaga from './sagas'

const sagaMiidleware = createSagaMiddleware()
export const store = createStore(reducer, initialState, applyMiddleware(sagaMiidleware))
// sagaMiidleware.run(mySaga)
