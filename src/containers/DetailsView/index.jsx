import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// Styled
import { DetailsViewSC } from './style';
// Components
import DetailsViewBody from '../../components/DetailsViewBody';
import DetailsViewHeader from '../../components/DetailsViewHeader';
import DetailsViewFooter from '../../components/DetailsViewFooter';



const DetailsView = ({ openedTaskId, isFullView }) => {
    const { isLoading, tasksData } = useSelector(
        state => state.tasks,
        shallowEqual
    );

    const renderTask = () => {
        if (!isLoading && Number.isInteger(openedTaskId)) {
            const task = tasksData.filter(
                task => task.id === openedTaskId && task
            );

            return (
                <DetailsViewSC isFullView={isFullView}>
                    <DetailsViewHeader title={task[0].title} />
                    <DetailsViewBody description={task[0].description} />
                    <DetailsViewFooter />
                </DetailsViewSC>
            );
        } else {
            return null;
        }
    };

    return renderTask();
};

DetailsView.propTypes = {
    openedTaskId: PropTypes.number
};

export default DetailsView;
