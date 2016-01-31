import React from 'react';
import moment from 'moment';

export default class extends React.Component {
    render() {
        const datetime = moment(Date.now()).format('D MMM YYYY, h:mm A');

        return (
            <div>
                <h1>Hello, world!</h1>
                <p>Today is {datetime}</p>
            </div>
        );
    }
}
