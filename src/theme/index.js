export const THEME_VARIANTS = {
    DARK: 'dark',
    LIGHT: 'light'
};

export const theme = {
    constColors: {
        accent: 'rgb(108, 142, 191)',
        error: 'rgb(248, 206, 204)',
        task1: 'rgb(255, 242, 204)',
        task2: 'rgb(213, 232, 212)',
        task3: 'rgb(255, 230, 204)',
        task4: 'rgb(218, 232, 252)',
        task5: 'rgb(225, 213, 231)'
    },
    boxShadow: {
        lightest: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.14)',
        lighter: '0 3px 6px rgba(0, 0, 0, 0.14), 0 3px 6px rgba(0, 0, 0, 0.16)',
        normal: '0 8px 8px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.18)',
        stronger: '0 10px 20px rgba(0, 0, 0, 0.18), 0 6px 6px rgba(0, 0, 0, 0.22)',
        strongest: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.24)'
    },
    transitions: {
        onToggleTheme: 'background 0.3s ease'
    }
};

export const light = {
    themeColors: {
        background: 'rgb(226, 225, 224)',
        primary: 'rgb(105, 105, 105)',
        secondary: 'rgb(105, 105, 105)',
        tertiary: 'rgb(255, 255, 255)'
    }
};

export const dark = {
    themeColors: {
        background: 'rgb(105, 105, 105)',
        primary: 'rgb(105, 105, 105)',
        secondary: 'rgb(255, 255, 255)',
        tertiary: 'rgb(150, 150, 150)',
    }
};
