import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { User } from '../../models/User'
import { Entypo } from '@expo/vector-icons';
import Colors from '../../../assets/constants/Colors';

interface UserInformationProps {
    user: User
}

const UserInformation: React.FC<UserInformationProps> = ({ user }) => {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.displayName}>
                    {user.displayName}
                </Text>
                <View style={styles.emailContainer}>
                    <Entypo name="email" size={20} color={Colors.gradient2} />
                    <Text style={styles.email}>
                        {user.email}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default UserInformation

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: Colors.whiteBg,
        borderTopLeftRadius: 35,
    },
    nameContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingVertical: 20,
        marginLeft: 10,
        gap: 5,
    },
    displayName: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    emailContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    email: {
        fontSize: 18,
        color: Colors.gray,
        fontWeight: '500',
    },


})