import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { User } from '../../models/User';
import Colors from '../../../assets/constants/Colors';

interface FollowerSectionProps {
    user: User;
}

const FollowerSection: React.FC<FollowerSectionProps> = ({ user }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.label}>Followers</Text>
                <Text style={styles.count}>{user.numberOfFollowers}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.label}>Following</Text>
                <Text style={styles.count}>{user.numberOfFollowing}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.label}>Posts</Text>
                <Text style={styles.count}>{user.numberOfPosts}</Text>
            </View>
        </View>
    )
}

export default FollowerSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.gradient2TransparentLess,
        justifyContent: 'space-around',
        marginHorizontal: 22,
        paddingHorizontal: 15,
        paddingVertical: 15,
        gap: 25,
        marginTop: 20,
        borderRadius: 20,
    },
    item: {
        paddingVertical: 10,
        flex: 1,
        backgroundColor: Colors.whiteBg,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
    },
    count: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})