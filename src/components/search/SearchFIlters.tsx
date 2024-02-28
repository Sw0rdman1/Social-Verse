
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../../assets/constants/Colors';

interface SearchFiltersProps {
    setSearchCriteria: (searchCriteria: any) => void;
    searchCriteria: {
        filtersDisplayed: boolean;
        searchTerm: string;
        isFollowing: boolean;
        includeEmail: boolean;
    };
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ searchCriteria, setSearchCriteria }) => {

    const handleFollowingFilter = () => {
        setSearchCriteria({ ...searchCriteria, isFollowing: !searchCriteria.isFollowing });
    };

    const handleEmailFilter = () => {
        setSearchCriteria({ ...searchCriteria, includeEmail: !searchCriteria.includeEmail });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, searchCriteria.isFollowing && styles.activeButton]}
                onPress={handleFollowingFilter}
            >
                <Text style={[styles.buttonText, {
                    color: searchCriteria.isFollowing ? Colors.white : Colors.black
                }]}>
                    Only Followers
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, searchCriteria.includeEmail && styles.activeButton]}
                onPress={handleEmailFilter}
            >
                <Text style={[styles.buttonText, {
                    color: searchCriteria.includeEmail ? Colors.white : Colors.black
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
        paddingTop: 20,
        paddingHorizontal: 22,
        gap: 15,
        paddingBottom: 20,
    },
    button: {
        backgroundColor: Colors.white,
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

