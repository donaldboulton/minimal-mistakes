import React, { Component } from "react";
import {render} from 'react-dom';
import App from './components/App';
import Main from './components/Main';

class App extends React.Component {
    constructor( props ) {
        super( props );
    }
    render() {
        return(
            <h1>Hello React!</h1>
        );
    }
}
// render inside `app-root` element
ReactDOM.render( <App />, document.getElementById( 'style-3' ) );
