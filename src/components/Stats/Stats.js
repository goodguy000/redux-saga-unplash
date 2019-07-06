import React from 'react';
import './styles.css';

const Stats = ({ stats }) => {
    if (!stats) {
        // loading not yet started
        return <span className="stats">Loading...</span>;
    }
    return (
        <span className="stats">
            {stats.error && '🤯 Error!'}
            {stats.isLoading && '🙄 Loading...'}
            {stats.downloads !== null && <span title="download">🤘 {stats.downloads}</span>}
        </span>
    );
};

export default Stats;