import React, { PropTyps } from 'react';

const Link = ({ active, children, onClick }) => {
    if(active) {
        return <span>{ children }</span>;
    }

    return (
        <a href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            { children }
        </a>
    )
}

Link.propTypes = {
    active: PropTyps.bool.isRequired,
    children: PropTyps.node.isRequired,
    onClick: PropTyps.func.isRequired,
}

export default Link