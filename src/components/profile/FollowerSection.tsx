import { StyleSheet, View } from 'react-native'
import React from 'react'
import { User } from '../../models/User';
import Text from '../ui/Text';
import { useTheme } from '../../context/ThemeContext';

interface FollowerSectionProps {
    user: User;
    isFollowing?: boolean;
}

const FollowerSection: React.FC<FollowerSectionProps> = ({ user, isFollowing }) => {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <View style={[styles.item, { backgroundColor: isFollowing ? theme.primaryColor : theme.grayVariant.dark }]}>
                <Text style={styles.label}>Posts</Text>
                <Text style={styles.count}>{user.numberOfPosts}</Text>
            </View>
            <View style={[styles.item, { backgroundColor: isFollowing ? theme.primaryColor : theme.grayVariant.dark }]}>
                <Text style={styles.label}>Followers</Text>
                <Text style={styles.count}>{user.numberOfFollowers}</Text>
            </View>
            <View style={[styles.item, { backgroundColor: isFollowing ? theme.primaryColor : theme.grayVariant.dark }]}>
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
        marginHorizontal: 15,
        gap: 25,
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