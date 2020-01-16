import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

// import {} from actions
// import reducer from reducers

export default function configureStore(persistedState){
    const store = createStore(
        // ...
        applyMiddleware(thunkMiddleware)
    )
    return store
}