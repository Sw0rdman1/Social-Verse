import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GradientBackground from '../../../components/ui/GradientBackground'
import Animated from "react-native-reanimated";
import Colors from '../../../../assets/constants/Colors';
import SearchInput from '../../../components/search/SearchInput';
import SearchFilters from '../../../components/search/SearchFIlters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchResults from '../../../components/search/SearchResults';
import { User, getFakeUsers } from '../../../models/User';
import { StackNavigationProp } from '@react-navigation/stack';
import SearchTitle from '../../../components/search/SearchTitle';
import { useTheme } from '../../../context/ThemeContext';

interface SearchScreenProps {
    navigation: StackNavigationProp<any, any>
}


const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
    const [initialUsers, setInitialUsers] = useState<User[]>([])
    const { theme } = useTheme();
    const [users, setUsers] = useState<User[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    useEffect(() => {
        const fetchedUsers = getFakeUsers()
        setInitialUsers(fetchedUsers)
        setUsers(fetchedUsers)
    }, [])

    const searchUsers = (searchTerm: string) => {
        setUsers(initialUsers.filter((user) => user.displayName.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())))
        setUsers(initialUsers.filter((user) => user.displayName.toLowerCase().includes(searchTerm.toLowerCase())))
    }


    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <GradientBackground />
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchUsers={searchUsers} />
            <SearchResults users={users} navigation={navigation} />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        width: "100%",
        gap: 20,
    },

})