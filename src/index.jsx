import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Redirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

//
// Remove ...?_k=* from the HTTP query string added by
// react-router/hashHistory
//
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import repos from './reducers';
import * as actions from './actions';
const store = createStore(
    repos,
    applyMiddleware(
        thunkMiddleware
    )
);

import App from './components/app';
import Title from './components/title';
import Repos from './containers/repos';
import RepoList from './containers/repoList';

function onReposUserEnter(nextState) {
    //
    // The store contains the user, and you want to let the store
    // handles the app state completely. There are 2 sources of changes:
    //   1. components, handled by dispacthing actions
    //   2. route change
    //
    // Here you update the store when the route changes.
    //
    // NOTE: This should be replaced with react-router-redux
    // (https://github.com/reactjs/react-router-redux)
    //
    store.dispatch(actions.routerChangedUser(nextState.params.user));
}

function onReposEnter(nextState, replace) {
    //
    // Redirect to the currently selected repositories if you are
    // entering the route without parameters.
    //
    if (nextState.location.pathname === '/repos') {
        const user = store.getState().user;

        if (user !== null && user !== '') {
            replace({
                pathname: `/repos/${user}`
            });
        }
    }
}

ReactDOM.render(
    <Provider store={store}>
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

                <Route path="repos" component={Repos} onEnter={onReposEnter}>
                    <Route path=":user" component={RepoList} onEnter={onReposUserEnter} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
