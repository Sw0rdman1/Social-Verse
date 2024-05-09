import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { User } from '../../models/User'
import Animated, { FadeInDown, FadeInRight, FadeInUp, FadeOutRight } from 'react-native-reanimated'
import { useTheme } from '../../context/ThemeContext';

interface FollowButtonProps {
    isFollowing: boolean;
    setIsFollowing: (value: boolean) => void;
    user: User;
}

const FollowButton: React.FC<FollowButtonProps> = ({ isFollowing, setIsFollowing, user }) => {
    const { theme } = useTheme();

    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={[styles.button, {
                    backgroundColor: isFollowing ? theme.backgroundColorPrimary : theme.backgroundColorPrimary,
                    borderColor: isFollowing ? theme.primaryColorVariants.lowOpacity : theme.primaryColorVariants.mediumOpacity
                }]}
                onPress={handleFollow}
            >
                <Ionicons name={isFollowing ? 'checkmark' : 'add'} size={26} color={!isFollowing ? theme.primaryColor : theme.primaryColor} />
                <Text
                    style={[styles.buttonText, { color: !isFollowing ? theme.textColor : theme.primaryColor }]}
                >
                    {isFollowing ? 'Following' : 'Follow'}
                </Text>
            </TouchableOpacity>
        </View >
    )
}

const WriteMessageButton = () => {
    const { theme } = useTheme();
    return (
        <Animated.View
            entering={FadeInRight.duration(300)}
            exiting={FadeOutRight.duration(300)}
            style={{ flex: 1 }}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.primaryColor }]}
            >
                <Ionicons name='chatbubble-ellipses' size={24} color={theme.backgroundColorPrimary} />
                <Text
                    style={[styles.buttonText, { color: theme.backgroundColorPrimary }]}
                >
                    Message
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

interface UserButtonsProps {
    user: User;
    isFollowing: boolean;
    setIsFollowing: (value: boolean) => void;
}

const UserButtons: React.FC<UserButtonsProps> = ({ user, isFollowing, setIsFollowing }) => {

    return (
        <Animated.View
            entering={FadeInDown.delay(800).duration(500)}
            style={styles.container}>
            <FollowButton isFollowing={isFollowing} setIsFollowing={setIsFollowing} user={user} />
            {isFollowing && <WriteMessageButton />}
        </Animated.View>
    )
}


export default UserButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 15,
        gap: 15,
        height: 50,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
    },

    buttonText: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
})