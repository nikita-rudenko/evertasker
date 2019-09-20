import React, { memo } from 'react';
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



const DetailsView = memo(({ openedTaskId, isFullView }) => {
    const { isLoading, tasksData } = useSelector(
        state => state.tasks,
        shallowEqual
    );

    const renderTask = () => {
        if (!isLoading && openedTaskId !== null) {
            const task = tasksData.find(task => task.id === openedTaskId);

            return (
                <DetailsViewSC key={openedTaskId} isFullView={isFullView}>
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
});

DetailsView.displayName = 'MemoizedDetailsView';

DetailsView.propTypes = {
    openedTaskId: PropTypes.string,
    isFullView: PropTypes.bool
};

export default DetailsView;
