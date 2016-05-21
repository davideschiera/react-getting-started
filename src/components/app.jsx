import React from 'react';
import { Link } from 'react-router';

const App = function render(props) {
    return (
        <div>
            <ul>
                <li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
                <li><Link to="/hello" activeStyle={{ color: 'red' }}>Hello, world!</Link></li>
                <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repositories</Link></li>
            </ul>

            {/*
            // Use children to define nested routes
            */}
            {props.children}
        </div>
    );
};

App.propTypes = {
    children: React.PropTypes.node
};


export default App;
