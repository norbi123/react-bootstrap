import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import styles
import '../public/styles/main.scss';

const store = createStore();

class App extends React.Component {
    render() {
        return ( 
            <Provider store = { store }>
                <Router history = { browserHistory }>
                    <Route path = "/">
                        <IndexRoute/> 
                    </Route>  
                </Router>  
            </Provider>
        );
    }
}

function mapStateToProps(state) {
    return {
        routing: state.routing
    }
}

export default connect(mapStateToProps)(App);

ReactDOM.render( < App / > , document.querySelector('#app'));