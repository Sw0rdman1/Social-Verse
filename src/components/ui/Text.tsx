import { StyleSheet, Text as RNText, TextProps } from 'react-native';
import { useTheme } from '../../context/ThemeContext';



const Text: React.FC<TextProps> = ({ style, ...rest }) => {
    const { theme } = useTheme();

    return (
        <RNText style={[styles.text, { color: theme.textColor }, style]} {...rest} />
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'normal',
    },
});

export default Text;