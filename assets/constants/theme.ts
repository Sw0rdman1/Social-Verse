const primaryColors = [
    {
        hex: '#2ec4b6',
        rgb: '46, 196, 182',
    },
    {
        hex: '#ff9f1c',
        rgb: '255, 159, 28',
    },
    {
        hex: '#48dbfb',
        rgb: '72, 219, 251',
    },
    {
        hex: '#ff7f50',
        rgb: '255, 127, 80',
    },
];

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
    backgroundColor: '#FFFFFF',
    backgroundColorPrimary: '#FFFFFF',
    textColor: '#000000',
    gray: '#999DA0',
    red: {
        classic: '#ff0000',
        transparent: 'rgba(255, 0, 0, 0.15)',
    },
    primaryColor: `rgb(${primaryColors[0].rgb})`,
    primaryColorVariants: {
        lowOpacity: 'rgba(46,196,182, 0.1)',
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
    primaryColor: `rgb(${primaryColors[0].rgb})`,
    primaryColorVariants: {
        lowOpacity: 'rgba(46,196,182, 0.1)',
        mediumOpacity: 'rgba(46,196,182, 0.5)',
        highOpacity: 'rgba(46,196,182, 0.8)',
    },
};



export { primaryColors, lightTheme, darkTheme, ThemeColors };
