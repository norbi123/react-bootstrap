import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistory } from 'redux-simple-router';
import thunkMiddleware from 'redux-thunk';

// Import styles
import '../public/styles/main.scss';

import reducers from './reducers';

import Home from './components/Home';

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, reduxRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends React.Component {
    render() {
        return ( 
            <Provider store = { store }>
                <Router history = { browserHistory }>
                    <Route path = "/" >
                        <IndexRoute component={Home}/> 
                    </Route>  
                </Router>  
            </Provider>
        );
    }
}

ReactDOM.render( < App / > , document.querySelector('#app'));