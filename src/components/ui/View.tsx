import { View as RNView, ViewProps } from 'react-native';
import { useTheme } from '../../context/ThemeContext';




const View: React.FC<ViewProps> = ({ style, ...rest }) => {
    const { theme } = useTheme();
    return (
        <RNView style={[{ backgroundColor: theme.backgroundColor }, style]} {...rest} />
    );
};

export default View;
