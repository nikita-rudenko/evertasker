import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// Styled
import { DetailsViewSC } from './style';
// Components
import DetailsViewBody from '../../components/DetailsViewBody';
import DetailsViewHeader from '../../components/DetailsViewHeader';
import DetailsViewFooter from '../../components/DetailsViewFooter';
import Loading from '../../components/Loading';
import Message from '../../components/Message';



const DetailsView = ({ openedTaskId, isFullView }) => {
    const { isLoading, tasksData } = useSelector(
        state => state.tasks,
        shallowEqual
    );

    const renderTask = () => {
        if (!isLoading && openedTaskId !== null) {
            const task = tasksData.find(task => task.id === openedTaskId);

            return (
                <DetailsViewSC isFullView={isFullView}>
                    <DetailsViewHeader title={task.title} />
                    <DetailsViewBody task={task} />
                    <DetailsViewFooter />
                </DetailsViewSC>
            );
        } else if (!isLoading && !tasksData.length) {
            return <Message>No details to show</Message>;
        } else {
            return <Loading />;
        }
    };

    return renderTask();
};

DetailsView.propTypes = {
    openedTaskId: PropTypes.string
};

export default DetailsView;
