import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, ThemeColors } from '../../assets/constants/theme';
import { Appearance } from 'react-native';

const setThemeHandler = (value: string, primaryColor: string): ThemeColors => {
    if (value === 'light') {
        return {
            ...lightTheme,
            primaryColor: `rgb(${primaryColor})`,
            primaryColorVariants: {
                lowOpacity: `rgba(${primaryColor}, 0.1)`, // Low opacity variant
                mediumOpacity: `rgba(${primaryColor}, 0.5)`, // Medium opacity variant
                highOpacity: `rgba(${primaryColor}, 0.8)`, // High opacity variant
            },
        };
    } else {
        return {
            ...darkTheme,
            primaryColor: `rgb(${primaryColor})`,
            primaryColorVariants: {
                lowOpacity: `rgba(${primaryColor}, 0.1)`, // Low opacity variant
                mediumOpacity: `rgba(${primaryColor}, 0.5)`, // Medium opacity variant
                highOpacity: `rgba(${primaryColor}, 0.8)`, // High opacity variant
            },
        };
    }

}

interface ThemeContextProps {
    theme: ThemeColors;
    toggleTheme: () => void;
    setPrimaryColor: (color: string) => void;
    loadingTheme: boolean;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: lightTheme,
    toggleTheme: () => { },
    setPrimaryColor: () => { },
    loadingTheme: true,
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeColors>(lightTheme);
    const [primaryColor, setPrimaryColorState] = useState<string>(lightTheme.primaryColor);
    const [loadingTheme, setLoadingTheme] = useState<boolean>(true);
    const [colorScheme, setColorScheme] = React.useState(
        Appearance.getColorScheme(),
    );

    useEffect(() => {
        const loadPrimaryColor = async () => {
            const storedColor = await AsyncStorage.getItem('primaryColorPreference');
            if (storedColor) {
                setPrimaryColorState(storedColor);
            }

        };
        loadPrimaryColor();
    }, []);

    useEffect(() => {
        const loadPreferredTheme = async () => {
            const storedTheme = await AsyncStorage.getItem('themePreference');

            if (storedTheme) {
                setTheme(setThemeHandler(storedTheme, primaryColor));
            } else if (colorScheme) {
                setTheme(setThemeHandler(colorScheme, primaryColor));
            } else {
                setTheme(setThemeHandler('light', primaryColor));
            }

            if (loadingTheme) setLoadingTheme(false);
        }

        loadPreferredTheme();
    }, [colorScheme, primaryColor]);

    const toggleTheme = async () => {
        const newTheme = setThemeHandler(theme.backgroundColor === "#FFFFFF" ? 'dark' : 'light', primaryColor);
        setTheme(newTheme);
        await AsyncStorage.setItem('themePreference', newTheme.backgroundColor === "#FFFFFF" ? 'light' : 'dark');
    };

    const setPrimaryColor = async (color: string) => {
        setPrimaryColorState(color);
        await AsyncStorage.setItem('primaryColorPreference', color);
        setTheme({
            ...theme,
            primaryColor: `rgb(${color})`,
            primaryColorVariants: {
                lowOpacity: `rgba(${color}, 0.1)`, // Low opacity variant
                mediumOpacity: `rgba(${color}, 0.5)`, // Medium opacity variant
                highOpacity: `rgba(${color}, 0.8)`, // High opacity variant
            },
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setPrimaryColor, loadingTheme }}>
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
