import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { User } from '../../models/User';



interface SearchResultsProps {
    users: User[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ users }) => {
    return (
        <View style={styles.container}>
            {users.map((user) => (
                <View key={user.id} style={styles.userContainer}>
                    <Image source={{ uri: user.profilePicture }} style={styles.avatar} />
                    <View style={styles.userInfo}>
                        <Text style={styles.firstName}>{user.displayName}</Text>
                        <Text style={styles.email}>{user.email.toLowerCase()}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    userInfo: {
        flex: 1,
    },
    firstName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: 'gray',
    },
});

export default SearchResults;
