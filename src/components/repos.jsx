import React from 'react';
import debounce from 'lodash/function/debounce';

class Repos extends React.Component {
    constructor(props) {
        super(props);

        //
        // Created debounced function to wait the user to stop typing
        // for a little bit before dispacthing the action.
        //
        this.changeUserDebounced = debounce(this.changeUser, 300);
    }

    componentWillMount() {
        this.setState({
            user: this.props.user || ''
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.user
        });
    }

    componentWillUnmount() {
        //
        // Since you might have a pending "debounce" to dispatch the
        // change user action, make sure to cancel it.
        //
        this.changeUserDebounced.cancel();
    }

    onChange(event) {
        event.preventDefault();

        //
        // Immediately update the state...
        //
        this.setState({
            user: event.target.value
        });

        //
        // ... and debounce the action dispacth
        //
        this.changeUserDebounced();
    }

    changeUser() {
        //
        // Dispatch action to change user
        //
        this.props.changeUser(this.state.user, this.context.router);
    }

    render() {
        const onChange = this.onChange.bind(this);

        return (
            <div>
                <h1>Repositories</h1>
                <input value={this.state.user} onChange={onChange} />

                {this.props.children}
            </div>
        );
    }
}

Repos.propTypes = {
    children:   React.PropTypes.node,
    user:       React.PropTypes.string,
    changeUser: React.PropTypes.func
};
Repos.contextTypes = {
    router: React.PropTypes.object
};

export default Repos;
