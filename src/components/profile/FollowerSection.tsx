import { StyleSheet, View } from 'react-native'
import React from 'react'
import { User } from '../../models/User';
import Text from '../ui/Text';
import { useTheme } from '../../context/ThemeContext';


const NumberContainer: React.FC<{ number: number, label: string, isFollowing: boolean }> = ({ number, label, isFollowing }) => {
    const { theme } = useTheme();

    const textColor = isFollowing ? theme.primaryColor : theme.textColor;

    return (
        <View style={[styles.item, { backgroundColor: isFollowing ? theme.primaryColorVariants.lowOpacity : theme.backgroundColorPrimary }]}>
            <Text style={[styles.label, { color: textColor }]}>{label}</Text>
            <Text style={[styles.count, { color: textColor }]}>{number}</Text>
        </View>
    )
}

interface FollowerSectionProps {
    user: User;
    isFollowing: boolean;
}




const FollowerSection: React.FC<FollowerSectionProps> = ({ user, isFollowing }) => {

    if (!user.numberOfFollowers || !user.numberOfFollowing || !user.numberOfPosts) {
        return null;
    }

    return (
        <View style={styles.container}>
            <NumberContainer number={user.numberOfPosts} label="Posts" isFollowing={isFollowing} />
            <NumberContainer number={user.numberOfFollowers} label="Followers" isFollowing={isFollowing} />
            <NumberContainer number={user.numberOfFollowing} label="Following" isFollowing={isFollowing} />
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