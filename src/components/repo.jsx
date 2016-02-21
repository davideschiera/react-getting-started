import React from 'react';

class Repo extends React.Component {
    render() {
        return (
            <p>{this.props.name}</p>
        );
    }
}

Repo.propTypes = {
    name: React.PropTypes.string
};

export default Repo;
