import React from 'react';
import PropTypes from 'prop-types';

// Config
import { TASK_CATEGORIES } from '../../config';
// Components
import TaskCategory from './TaskCategory';
// Styled
import { TaskCategoriesSC } from './style';



const TaskCategories = ({ currentCategory, changeCategory }) => {
    return (
        <TaskCategoriesSC>
            {Object.keys(TASK_CATEGORIES).map(categoryId => {
                const { color } = TASK_CATEGORIES[categoryId];

                return (
                    <TaskCategory
                        key={categoryId}
                        categoryId={Number(categoryId)}
                        color={color}
                        currentCategory={currentCategory}
                        changeCategory={changeCategory}
                    />
                );
            })}
        </TaskCategoriesSC>
    );
};

TaskCategories.propTypes = {
    currentCategory: PropTypes.number,
    changeCategory: PropTypes.func
};

export default TaskCategories;
