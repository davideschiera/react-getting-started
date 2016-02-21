import { connect } from 'react-redux';
import * as actions from '../actions';
import Repos from '../components/Repos';

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        changeUser: (user, router) => dispatch(actions.changeUser(user, router))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
