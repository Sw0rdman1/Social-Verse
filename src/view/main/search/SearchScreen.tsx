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

interface SearchScreenProps {
    navigation: StackNavigationProp<any, any>
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [initialUsers, setInitialUsers] = useState<User[]>([])
    const [users, setUsers] = useState<User[]>([])
    const [isFollowing, setIsFollowing] = useState(false);
    const [includeEmail, setIncludeEmail] = useState(false);


    useEffect(() => {
        const fetchedUsers = getFakeUsers()
        setInitialUsers(fetchedUsers)
        setUsers(fetchedUsers)
    }, [])

    const searchUsers = (searchTerm: string) => {
        if (includeEmail) {
            setUsers(initialUsers.filter((user) => user.displayName.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())))
        } else {
            setUsers(initialUsers.filter((user) => user.displayName.toLowerCase().includes(searchTerm.toLowerCase())))
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <GradientBackground inverted centerItems>
                <View
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}
                >
                    <View style={[styles.form, {
                        paddingTop: insets.top
                    }]}>
                        <SearchInput searchUsers={searchUsers} isFollowing={isFollowing} includeEmail={includeEmail} />
                    </View>
                    <Animated.View
                        style={styles.formContainer}
                    >
                        <SearchFilters
                            isFollowing={isFollowing}
                            setIsFollowing={setIsFollowing}
                            includeEmail={includeEmail}
                            setIncludeEmail={setIncludeEmail}
                        />
                        <SearchResults users={users} navigation={navigation} />

                    </Animated.View>
                </View>
            </GradientBackground>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    formContainer: {
        flex: 7,
        width: "100%",
        backgroundColor: Colors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: "flex",
        alignItems: "center",
        paddingTop: 20,
    },
    form: {
        width: "100%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
})