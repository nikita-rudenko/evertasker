import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { TodoListSC, TaskSubheadingSC } from './style';



const Todo = ({ todo }) => {
    return Array.isArray(todo) && todo.length ? (
        <div>
            <TaskSubheadingSC>Todo:</TaskSubheadingSC>
            <TodoListSC>
                {todo.map((task, idx) => (
                    <li key={idx}>{task}</li>
                ))}
            </TodoListSC>
        </div>
    ) : null;
};

Todo.propTypes = {
    todo: PropTypes.arrayOf(PropTypes.string)
};

export default Todo;
