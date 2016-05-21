import React from 'react';
import moment from 'moment';

const Title = function render(props) {
    const datetime = moment(Date.now()).format('D MMM YYYY, h:mm A');

    return (
        <div>
            <h1>Hello, {props.params.name}!</h1>
            <p>Today is {datetime}</p>
        </div>
    );
};

Title.propTypes = {
    params: React.PropTypes.object
};

export default Title;
