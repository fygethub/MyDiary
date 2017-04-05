import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text}) => {
    return (
        <li
            onClick={ onClick }
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
        { text }
    </li>
)}

Todo.proTypes = {
    onClick: PropTypes.func.isRequired,
    computed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Todo;