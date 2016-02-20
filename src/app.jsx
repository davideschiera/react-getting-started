import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
                    <li><Link to="/hello" activeStyle={{ color: 'red' }}>Hello, world!</Link></li>
                </ul>

                {/*
                // Use children to define nested routes
                */}
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.node,
};


export default App;
