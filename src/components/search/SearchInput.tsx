import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import Colors from '../../../assets/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import SearchFilters from './SearchFIlters';

interface SearchInputProps {
    searchUsers: (searchTerm: string) => void;
    searchCriteria: {
        filtersDisplayed: boolean
        searchTerm: string
        isFollowing: boolean
        includeEmail: boolean
    }
    displayFilters: () => void
    setSearchCriteria: (searchCriteria: any) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ searchUsers, searchCriteria, displayFilters, setSearchCriteria }) => {

    useEffect(() => {
        searchUsers(searchCriteria.searchTerm)
    }, [searchCriteria])

    const handleSearch = () => {
        searchUsers(searchCriteria.searchTerm)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        value={searchCriteria.searchTerm}
                        onChangeText={(text) => setSearchCriteria({ ...searchCriteria, searchTerm: text })}
                        onSubmitEditing={handleSearch}
                        placeholderTextColor={Colors.gray}
                    />
                    <Ionicons name="search" size={22} color={Colors.black} style={styles.searchIcon} />
                </View>
                <TouchableOpacity
                    style={!searchCriteria.filtersDisplayed ? styles.selectedFilterContainer : styles.filterContainer}
                    onPress={displayFilters}
                >
                    <Ionicons name="filter" size={24} color={!searchCriteria.filtersDisplayed ? Colors.whiteBg : Colors.gradient2} />
                </TouchableOpacity>
            </View>
            {searchCriteria.filtersDisplayed && <SearchFilters searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />}
        </View>


    )
}



export default SearchInput

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 10,
        gap: 15,
        width: "100%",
        paddingHorizontal: 20,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: "85%",
    },
    input: {
        width: "100%",
        height: "100%",
        borderColor: Colors.grayTransparent,
        backgroundColor: Colors.whiteBg,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 14,
        color: Colors.black,
        fontSize: 16,
        fontWeight: "500",
        position: "relative",
    },
    searchIcon: {
        position: "absolute",
        right: 0,
        marginRight: 15,
    },
    filterContainer: {
        backgroundColor: Colors.whiteBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        aspectRatio: 1,
        borderRadius: 30,
    },
    selectedFilterContainer: {
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        aspectRatio: 1,
        borderRadius: 30,
    },

})
