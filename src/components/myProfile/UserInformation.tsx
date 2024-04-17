import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { User } from '../../models/User'
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

interface UserInformationProps {
    user: User
}

const UserInformation: React.FC<UserInformationProps> = ({ user }) => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, {
            backgroundColor: theme.backgroundColorPrimary,
        }]}>
            <View style={styles.nameContainer}>
                <Text style={[styles.displayName, {
                    color: theme.textColor
                }]}>
                    {user.displayName}
                </Text>
                <View style={styles.emailContainer}>
                    <Entypo name="email" size={20} color={theme.primaryColor} />
                    <Text style={[styles.email, {
                        color: theme.gray
                    }
                    ]}>
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
        fontWeight: '500',
    },


})