import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from './app';
import Title from './title';

//
// Remove ...?_k=* from the HTTP query string added by
// react-router/hashHistory
//
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
    <Router history={appHistory}>
        <Route path="/" component={App}>
            {/*
            // Use redirect to use default param value
            */}
            <Redirect from="hello" to="hello/world" />
            <Route path="hello">
                {/*
                // Split route to have better link "active" state
                // If you use path="hello/:name" then only links that
                // match exactly the URL would be active.
                */}
                <Route path=":name" component={Title} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
