export const ROUTER_CHANGED_USER = 'ROUTER_CHANGED_USER';
export const CHANGE_USER = 'CHANGE_USER';
export const LOAD_REPOS = 'LOAD_REPOS'
export const LOAD_REPOS_SUCCESS = 'LOAD_REPOS_SUCCESS'
export const LOAD_REPOS_FAILURE = 'LOAD_REPOS_FAILURE'

export function changeUser(user, router) {
    //
    // Note: When you change route the action 'route changed user'
    // will be called. Let that action be the one to fetch data.
    //
    if (user === '') {
        router.push('/repos');
    } else {
        router.push(`/repos/${user}`);
    }

    return {
        type: CHANGE_USER,
        user
    };
}

export function routerChangedUser(user) {
    return (dispatch, getState) => {
        const currentUser = getState().user;

        dispatch({
            type: ROUTER_CHANGED_USER,
            user
        });

        if (currentUser !== user) {
            //
            // User changed, and current state sets a different user.
            // This is the time to load data for the new user
            //
            return fetchReposDispatch(dispatch, user);
        } else {
            //
            // Route now aligned to current state
            //
            return null;
        }
    };
}

function fetchReposDispatch(dispatch, user) {
    dispatch(loadRepos(user));

    return fetch(`https://api.github.com/users/${user}/repos`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw {
                    message: response.statusText
                };
            }
        })
        .then(json => dispatch(loadReposSuccess(json)))
        .catch(error => dispatch(loadReposFailure(error.message)));
}

export function fetchRepos(user) {
    return dispatch => fetchReposDispatch(dispatch, user);
}

function loadRepos(user) {
    return {
        type: LOAD_REPOS,
        user
    };
}

function loadReposSuccess(data) {
    return {
        type: LOAD_REPOS_SUCCESS,
        data: data.map(data => ({ id: data.id, name: data.name }))
    };
}

function loadReposFailure(error) {
    return {
        type: LOAD_REPOS_FAILURE,
        error
    };
}
