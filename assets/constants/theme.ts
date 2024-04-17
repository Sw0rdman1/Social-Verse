interface ThemeColors {
    backgroundColor: string;
    backgroundColorPrimary: string;
    textColor: string;
    gray: string;
    primaryColor: string;
    primaryColorVariants: {
        lowOpacity: string;
        mediumOpacity: string;
        highOpacity: string;
    };
}

const lightTheme: ThemeColors = {
    backgroundColor: '#f2f2f2',
    backgroundColorPrimary: '#FFFFFF',
    textColor: '#000000',
    gray: '#999DA0',
    primaryColor: '#2ec4b6',
    primaryColorVariants: {
        lowOpacity: 'rgba(46,196,182, 0.2)',
        mediumOpacity: 'rgba(46,196,182, 0.5)',
        highOpacity: 'rgba(46,196,182, 0.8)',
    },
};

const darkTheme: ThemeColors = {
    backgroundColor: '#252525',
    backgroundColorPrimary: '#1A1A1A',
    textColor: '#FFFFFF',
    gray: '#999DA0',
    primaryColor: '#2ec4b6',
    primaryColorVariants: {
        lowOpacity: 'rgba(46,196,182, 0.2)',
        mediumOpacity: 'rgba(46,196,182, 0.5)',
        highOpacity: 'rgba(46,196,182, 0.8)',
    },
};

export { lightTheme, darkTheme, ThemeColors };
