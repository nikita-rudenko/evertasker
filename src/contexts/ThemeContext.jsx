import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Theme
import { THEME_VARIANTS } from '../theme';



const ThemeContext = createContext([[THEME_VARIANTS.LIGHT], () => {}]);

const ThemeContextProvider = props => {
    const [currentTheme, setCurrentTheme] = useState(THEME_VARIANTS.LIGHT);

    const setTheme = () =>
        setCurrentTheme(() =>
            currentTheme === THEME_VARIANTS.LIGHT
                ? THEME_VARIANTS.DARK
                : THEME_VARIANTS.LIGHT
        );

    return (
        <ThemeContext.Provider value={[currentTheme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.node
};

export { ThemeContext, ThemeContextProvider };
