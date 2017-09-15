import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import SceneContainer from './components/SceneContainer';
import Sidebar from './components/Sidebar';
import appReducers from './reducers';

const loggerMiddleware = createLogger()
let store = createStore(
    appReducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

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