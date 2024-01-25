import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Colors from '../../../assets/constants/Colors'
import { Ionicons } from '@expo/vector-icons';

interface SearchInputProps {
    searchUsers: (searchTerm: string) => void;
    isFollowing: boolean;
    includeEmail: boolean;

}

const SearchInput: React.FC<SearchInputProps> = ({ searchUsers, isFollowing, includeEmail }) => {

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        searchUsers(searchText)
    }, [searchText, isFollowing, includeEmail])

    const handleSearch = () => {
        searchUsers(searchText)
    }

    return (

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
                placeholderTextColor={Colors.gray}
            />
            <Ionicons name="search" size={22} color={Colors.black} style={styles.searchIcon} />
        </View>
    )
}



export default SearchInput

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderColor: Colors.grayTransparent,
        backgroundColor: Colors.whiteBg,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 14,
        color: Colors.black,
        width: "100%",
        fontSize: 16,
        fontWeight: "500",
    },
    searchIcon: {
        position: "absolute",
        right: 0,
        marginRight: 15,
    }
})
