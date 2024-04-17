import { StyleSheet, View } from 'react-native'
import BottomTabNavigation from '../../components/navigation/BottomTabNavigation'
import { StackScreenProps } from '@react-navigation/stack'
import Colors from '../../../assets/constants/Colors'
import AddNewPostButton from '../../components/navigation/AddNewPostButton'
import { useTheme } from '../../context/ThemeContext'

const MainScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    const { theme } = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            <AddNewPostButton navigation={navigation} />
            <BottomTabNavigation navigation={navigation} />
        </View>
    )
}

export default MainScreen
