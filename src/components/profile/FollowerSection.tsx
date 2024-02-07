import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { User } from '../../models/User';
import Colors from '../../../assets/constants/Colors';

interface FollowerSectionProps {
    user: User;
    isFollowing: boolean;
}

const FollowerSection: React.FC<FollowerSectionProps> = ({ user, isFollowing }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.item, { backgroundColor: isFollowing ? Colors.gradient2Transparent : Colors.grayTransparentLess }]}>
                <Text style={styles.label}>Posts</Text>
                <Text style={styles.count}>{user.numberOfPosts}</Text>
            </View>
            <View style={[styles.item, { backgroundColor: isFollowing ? Colors.gradient2Transparent : Colors.grayTransparentLess }]}>
                <Text style={styles.label}>Followers</Text>
                <Text style={styles.count}>{user.numberOfFollowers}</Text>
            </View>
            <View style={[styles.item, { backgroundColor: isFollowing ? Colors.gradient2Transparent : Colors.grayTransparentLess }]}>
                <Text style={styles.label}>Following</Text>
                <Text style={styles.count}>{user.numberOfFollowing}</Text>
            </View>
        </View>
    )
}

export default FollowerSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "85%",
        gap: 20,
    },
    item: {
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        borderRadius: 15,
    },
    label: {
        fontSize: 16,
    },
    count: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})