import { StyleSheet, View } from 'react-native'
import BottomTabNavigation from '../../components/navigation/BottomTabNavigation'
import { StackScreenProps } from '@react-navigation/stack'
import Colors from '../../../assets/constants/Colors'
import AddNewPostButton from '../../components/navigation/AddNewPostButton'

const MainScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <AddNewPostButton navigation={navigation} />
            <BottomTabNavigation navigation={navigation} />
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteBg
    }
})