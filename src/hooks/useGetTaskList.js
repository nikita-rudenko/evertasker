import { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// Actions
import { actions } from '../state/ducks/tasks';



function useGetTaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector(
        state => state.tasks,
        shallowEqual
    );

    const [currentCategory, setCurrentCategory] = useState(0);

    const changeCategory = selectedCategory =>
        setCurrentCategory(Number(selectedCategory));

    useEffect(() => {
        dispatch(actions.getTasks(currentCategory));
    }, [currentCategory, dispatch]);

    return [tasks, currentCategory, changeCategory];
}

export default useGetTaskList;
