import * as theming from './';
import get from 'lodash/fp/get';



export const composeCurrentTheme = (currentTheme) => {
    return { ...theming.theme, ...theming[currentTheme] };
};

const getStyle = (path) => {
    return ({ theme }) => get(path, theme);
};

export const getCurrentThemeColor = (value) => {
    return getStyle(`themeColors.${value}`);
};

export const getStyleVariable = (property, value) => {
    return getStyle(`${property}.${value}`);
};
