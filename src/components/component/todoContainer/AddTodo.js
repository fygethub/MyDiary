import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../../../redux/action';

let AddTodo = ({ dispatch }) => {
    let input = null;
    return (
        <div>
            <form onSubmit={e =>  {
                e.preventDefault();
                if(!input.value.trim()){
                    return ;
                }
                dispatch(addTodo(input.value))
                input.value = '';

            }}>
                <label htmlFor="input">
                    输入添加的内容
                    <input type="text" id="input" ref={ i => {input = i}}/>
                </label>
                    <button type="submit"> 添加 </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;