import React, { Component, PropTypes } from 'react';

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }


    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000);
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                Clicked: { value } times
               <button onClick={ onIncrement }> + </button>
                { ' ' }
                <button onClick={ onDecrement }> - </button>
                { ' ' }
                <button onClick={ this.incrementAsync }>Increment async</button>
            </p>
        )

    }
}

export default Counter;