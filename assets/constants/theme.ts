interface ThemeColors {
    backgroundColor: string;
    backgroundColorPrimary: string;
    textColor: string;
    gray: string;
    red: {
        classic: string;
        transparent: string;
    };
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
    red: {
        classic: '#ff0000',
        transparent: 'rgba(255, 0, 0, 0.15)',
    },
    primaryColor: '#2ec4b6',
    primaryColorVariants: {
        lowOpacity: 'rgba(46,196,182, 0.2)',
        mediumOpacity: 'rgba(46,196,182, 0.5)',
        highOpacity: 'rgba(46,196,182, 0.8)',
    },
};

const darkTheme: ThemeColors = {
    backgroundColor: '#1A1A1A',
    backgroundColorPrimary: '#252525',
    textColor: '#FFFFFF',
    gray: '#999DA0',
    red: {
        classic: '#ff0000',
        transparent: 'rgba(255, 0, 0, 0.35)',
    },
    primaryColor: '#2ec4b6',
    primaryColorVariants: {
        lowOpacity: 'rgba(46,196,182, 0.2)',
        mediumOpacity: 'rgba(46,196,182, 0.5)',
        highOpacity: 'rgba(46,196,182, 0.8)',
    },
};

export { lightTheme, darkTheme, ThemeColors };
