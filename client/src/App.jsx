import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import SceneContainer from './components/SceneContainer';
import Sidebar from './components/Sidebar';
import appReducers from './reducers';

import { fetchLoginUser } from './scenes/Login/actions';

const loggerMiddleware = createLogger()

let store = createStore(
    appReducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

// console.log(store.getState());
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// store.dispatch(fetchLoginUser());

// unsubscribe();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <SceneContainer></SceneContainer>
                </div>
            </Provider>
        );
    }
}

export default App;