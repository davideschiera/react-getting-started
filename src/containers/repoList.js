import { connect } from 'react-redux';
import * as actions from '../actions';
import RepoList from '../components/RepoList';

const mapStateToProps = (state) => {
    return state.repositories;
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepos: user => dispatch(actions.fetchRepos(user))
    }
}

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(RepoList)

export default Connect;
