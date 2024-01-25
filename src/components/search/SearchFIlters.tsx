
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../../assets/constants/Colors';

interface SearchFiltersProps {
    isFollowing: boolean;
    setIsFollowing: (value: boolean) => void;
    includeEmail: boolean;
    setIncludeEmail: (value: boolean) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ isFollowing, setIsFollowing, includeEmail, setIncludeEmail }) => {

    const handleFollowingFilter = () => {
        setIsFollowing(!isFollowing);
    };

    const handleEmailFilter = () => {
        setIncludeEmail(!includeEmail);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, isFollowing && styles.activeButton]}
                onPress={handleFollowingFilter}
            >
                <Text style={[styles.buttonText, {
                    color: isFollowing ? Colors.white : Colors.black
                }]}>
                    Only Followers
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, includeEmail && styles.activeButton]}
                onPress={handleEmailFilter}
            >
                <Text style={[styles.buttonText, {
                    color: includeEmail ? Colors.white : Colors.black
                }]}>
                    Include Email
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchFilters

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 22,
        gap: 15,
        paddingBottom: 5,
    },
    button: {
        backgroundColor: Colors.grayTransparentLess,
        borderRadius: 20,
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },

    activeButton: {
        backgroundColor: Colors.gradient2TransparentLess,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: "600",
        fontSize: 15,
    },
});

