import fetch from 'isomorphic-fetch';
import * as actions from './actions';

const initialState = {
    user:       null,
    isLoading:  false,
    isLoaded:   false,
    hasFailed:  false,
    error:      null,
    list:       null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ROUTER_CHANGED_USER:
        case actions.CHANGE_USER:
            return Object.assign({}, state, {
                user: action.user
            });

        case actions.LOAD_REPOS:
            return Object.assign({}, state, {
                isLoading:  true,
                hasFailed:  false,
                user:       action.user,
                list:       null
            });

        case actions.LOAD_REPOS_SUCCESS:
            return Object.assign({}, state, {
                isLoading:  false,
                isLoaded:   true,
                hasFailed:  false,
                list:       action.data
            });

        case actions.LOAD_REPOS_FAILURE:
            return Object.assign({}, state, {
                isLoading:  false,
                hasFailed:  true,
                error:      action.error,
                list:       null
            });

        default:
            return state;
    }
}

export default reducer;
