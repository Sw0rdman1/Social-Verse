import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SearchTitle = () => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <LinearGradient colors={[theme.primaryColor, theme.backgroundColor]} style={[styles.container, {
            paddingTop: insets.top + 10,

        }]}>
            <Text style={styles.title}>Search</Text>
        </LinearGradient>
    )
}

export default SearchTitle

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 0,
        height: 350,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    }
})