import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, ThemeColors } from '../../assets/constants/theme';
import { Appearance } from 'react-native';

interface ThemeContextProps {
    theme: ThemeColors;
    toggleTheme: () => void;
    setPrimaryColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: lightTheme,
    toggleTheme: () => { },
    setPrimaryColor: () => { },
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeColors>(lightTheme);
    const [primaryColor, setPrimaryColorState] = useState<string>(lightTheme.primaryColor);
    const [colorScheme, setColorScheme] = React.useState(
        Appearance.getColorScheme(),
    );

    useEffect(() => {
        const loadPreferences = async () => {

            const storedTheme = await AsyncStorage.getItem('themePreference');
            if (storedTheme) {
                setTheme(storedTheme === 'light' ? lightTheme : darkTheme);
            } else {
                setTheme(colorScheme !== 'light' ? lightTheme : darkTheme);
            }


            const storedColor = await AsyncStorage.getItem('primaryColorPreference');
            if (storedColor) {
                setPrimaryColorState(storedColor);
            }
        };
        Appearance.addChangeListener(({ colorScheme }) => setColorScheme(colorScheme));
        loadPreferences();
    }, []);

    const toggleTheme = async () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
        await AsyncStorage.setItem('themePreference', newTheme === lightTheme ? 'light' : 'dark');
    };

    const setPrimaryColor = async (color: string) => {
        setPrimaryColorState(color);
        await AsyncStorage.setItem('primaryColorPreference', color);
        setTheme({
            ...theme,
            primaryColor: `rgb(${color})`,
            primaryColorVariants: {
                lowOpacity: `rgba(${color}, 0.2)`, // Low opacity variant
                mediumOpacity: `rgba(${color}, 0.5)`, // Medium opacity variant
                highOpacity: `rgba(${color}, 0.8)`, // High opacity variant
            },
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setPrimaryColor }}>
            {children}
        </ThemeContext.Provider>
    );
};



export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext;
