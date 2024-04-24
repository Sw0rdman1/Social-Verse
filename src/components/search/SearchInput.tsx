import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import Colors from '../../../assets/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SearchInputProps {
    searchUsers: (searchTerm: string) => void;
    setSearchTerm: (searchTerm: string) => void;
    searchTerm: string
}

const SearchInput: React.FC<SearchInputProps> = ({ searchUsers, searchTerm, setSearchTerm }) => {
    const { theme } = useTheme()
    const { top } = useSafeAreaInsets()

    useEffect(() => {
        searchUsers(searchTerm)
    }, [searchTerm])

    const handleSearch = () => {
        searchUsers(searchTerm)
    }


    return (
        <BlurView
            intensity={30}
            tint={theme.backgroundColor === "#FFFFFF" ? "light" : "dark"}
            style={[styles.container, { paddingTop: top + 25, backgroundColor: theme.primaryColorVariants.lowOpacity }]}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    onSubmitEditing={handleSearch}
                    placeholderTextColor={Colors.gray}
                />
                <Ionicons name="search" size={22} color={Colors.black} style={styles.searchIcon} />
            </View>
        </BlurView>

    )
}



export default SearchInput

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingBottom: 25,
        paddingHorizontal: 20,
        position: "absolute",
        zIndex: 100,
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
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
})
