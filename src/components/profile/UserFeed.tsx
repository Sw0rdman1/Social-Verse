import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { User } from '../../models/User';
import Colors from '../../../assets/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const NotFollowingFeed = ({ displayName }: { displayName: string }) => {
    return (
        <Animated.View
            entering={FadeInDown.delay(500).duration(500)}
            style={styles.notFollowingContainer}>
            <View style={styles.notFollowingContainer}>
                <Ionicons name="lock-closed" size={28} color={Colors.gray} />
                <View>
                    <Text style={styles.NotFollowingText}>This user is private. Follow to see {displayName} posts </Text>
                </View>
            </View>
        </Animated.View>
    )
}

interface UserFeedProps {
    user: User;
    isFollowing: boolean;
}

const UserFeed: React.FC<UserFeedProps> = ({ user, isFollowing }) => {


    if (!isFollowing) {
        return <NotFollowingFeed displayName={user.displayName} />
    }

    return (
        <Animated.View
            entering={FadeInDown.delay(500).duration(500)}
            style={{ height: 700 }}>
            <Text>User Feed</Text>
        </Animated.View>
    )

}

export default UserFeed

const styles = StyleSheet.create({
    notFollowingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "80%",
        gap: 5,
    },
    NotFollowingText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.gray
    },

})