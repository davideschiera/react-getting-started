import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import * as actions from '../actions';
import Repos from '../components/Repos';

const mapStateToProps = (state, ownProps) => {
    return {
        user: ownProps.params.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        changeUser: user => {
            if (user === '') {
                dispatch(routeActions.push('/repos'));
            } else {
                dispatch(routeActions.push(`/repos/${user}`));
            }
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
