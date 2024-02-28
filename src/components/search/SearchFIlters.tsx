
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
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
            <View style={styles.filterContainer}>
                <Text style={styles.buttonText}>Only user you are following</Text>
                <Switch
                    value={searchCriteria.isFollowing}
                    onValueChange={handleFollowingFilter}
                    trackColor={{ false: Colors.whiteBg, true: Colors.whiteBg }}
                    thumbColor={searchCriteria.isFollowing ? Colors.gradient2 : Colors.whiteBg}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.buttonText}>Include email in search</Text>
                <Switch
                    value={searchCriteria.includeEmail}
                    onValueChange={handleEmailFilter}
                    trackColor={{ false: Colors.whiteBg, true: Colors.whiteBg }}
                    thumbColor={searchCriteria.includeEmail ? Colors.gradient2 : Colors.whiteBg}

                />
            </View>
        </View>
    );
};

export default SearchFilters

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 22,
        gap: 10,
        paddingBottom: 20,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 10,
    },

    buttonText: {
        fontWeight: "600",
        fontSize: 19,
        color: Colors.whiteBg,
    },
});

