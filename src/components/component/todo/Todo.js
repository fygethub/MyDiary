import React, { PropTypes } from 'react';

const Todo = ({ onClick, computed, text}) => (
    <li
        onClick={ onClick }
        style={{
            textDecoration: computed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Todo.proTypes = {
    onClick: PropTypes.func.isRequired,
    computed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Todo;