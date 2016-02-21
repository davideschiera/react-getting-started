import React from 'react';
import Repo from './repo';

function renderContentLoading() {
    return <p>Loading...</p>;
}

function renderContentFailed(error) {
    return <p>Unable to load repositories: {error}</p>;
}

function renderContentList(list) {
    return (<ul>
        {list.map(repo =>
            <Repo key={repo.id} {...repo} />
        )}
    </ul>);
}

function renderContent(props) {
    if (props.isLoading) {
        return renderContentLoading();
    } else if (props.hasFailed) {
        return renderContentFailed(props.error);
    } else if (props.isLoaded) {
        return renderContentList(props.list);
    }
}

class RepoList extends React.Component {
    render() {
        return (
            <div>
                {renderContent(this.props)}
            </div>
        );
    }
}

RepoList.propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string
    })),
    isLoading: React.PropTypes.bool,
    isLoaded:  React.PropTypes.bool,
    hasFailed: React.PropTypes.bool,
    error:     React.PropTypes.string
};

export default RepoList;
