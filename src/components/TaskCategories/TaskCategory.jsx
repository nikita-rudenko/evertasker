import React from 'react';
import PropTypes from 'prop-types';

// Config
import { TASK_CATEGORIES } from '../../config';
// Styled
import { TaskCategorySC } from './style';



const TaskCategory = ({
    categoryId,
    color,
    currentCategory,
    changeCategory
}) => {
    return (
        <TaskCategorySC
            onClick={() => changeCategory(categoryId)}
            data-id={categoryId}
            isSelected={categoryId === currentCategory}
            color={color}
        >
            {TASK_CATEGORIES[categoryId].title}
        </TaskCategorySC>
    );
};

TaskCategory.propTypes = {
    changeCategory: PropTypes.func.isRequired,
    currentCategory: PropTypes.number,
    categoryId: PropTypes.number,
    color: PropTypes.string
};

export default TaskCategory;
