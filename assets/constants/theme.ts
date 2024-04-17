interface ThemeColors {
    backgroundColor: string;
    textColor: string;
    primaryColor: string;
    primaryColorVariants: {
        lowOpacity: string;
        mediumOpacity: string;
        highOpacity: string;
    };
}

const lightTheme: ThemeColors = {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    primaryColor: '#007AFF',
    primaryColorVariants: {
        lowOpacity: 'rgba(0, 122, 255, 0.2)',
        mediumOpacity: 'rgba(0, 122, 255, 0.5)',
        highOpacity: 'rgba(0, 122, 255, 0.8)',
    },
};

const darkTheme: ThemeColors = {
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    primaryColor: '#FF9500',
    primaryColorVariants: {
        lowOpacity: 'rgba(255, 149, 0, 0.2)',
        mediumOpacity: 'rgba(255, 149, 0, 0.5)',
        highOpacity: 'rgba(255, 149, 0, 0.8)',
    },
};

export { lightTheme, darkTheme, ThemeColors };
