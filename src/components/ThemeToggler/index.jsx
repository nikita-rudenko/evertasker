import React, { useContext } from 'react';

// Context
import { ThemeContext } from '../../contexts/ThemeContext';
// Theme
import { THEME_VARIANTS } from '../../theme';
// Images
import lightThemeIcon from '../../assets/svg/sunny.svg';
import darkThemeIcon from '../../assets/svg/moon.svg';
// Styled
import { ThemeTogglerSC, ToggleIconSC } from './style';



const ThemeToggler = () => {
    const [currentTheme, setCurrentTheme] = useContext(ThemeContext);

    return (
        <ThemeTogglerSC
            variant={currentTheme === THEME_VARIANTS.LIGHT}
            onClick={setCurrentTheme}
            title='Toggle theme'
        >
            <ToggleIconSC
                src={currentTheme === THEME_VARIANTS.LIGHT ? darkThemeIcon : lightThemeIcon}
                alt='Toggle theme.'
            ></ToggleIconSC>
        </ThemeTogglerSC>
    );
};

export default ThemeToggler;
