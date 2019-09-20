import get from 'lodash/fp/get';



export const getFromDataset = (event, value) =>
    get('currentTarget.dataset.' + value, event);
