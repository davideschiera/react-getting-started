import React from 'react';

const Repo = function render(props) {
    return (
        <p>{props.name}</p>
    );
};

Repo.propTypes = {
    name: React.PropTypes.string
};

export default Repo;
