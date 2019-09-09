import * as theming from './';



export const composeCurrentTheme = (currentTheme) => {
    return { ...theming.theme, ...theming[currentTheme] };
};
