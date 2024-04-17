import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { User, getCurrentUser } from '../../../models/User'
import { useEffect, useState } from 'react'
import UserInformation from '../../../components/myProfile/UserInformation'
import ProfileActions from '../../../components/myProfile/ProfileActions'
import FollowerSection from '../../../components/myProfile/FollowerSection'
import { useAppContext } from '../../../context/AppContext'
import { useTheme } from '../../../context/ThemeContext'

const { height } = Dimensions.get('window')

const MyProfileScreen = () => {
    const { api, currentUser } = useAppContext()
    const [user, setUser] = useState<User>(currentUser)
    const { theme } = useTheme()

    useEffect(() => {
        async function fetchUser() {
            // const user = await api.users.getProfileInformations(currentUser)
            setUser(user)
        }

        fetchUser()
    }, [])


    return (
        <View style={[styles.container, {
            backgroundColor: theme.backgroundColor
        }]}>
            <Image
                source={{ uri: user.profilePicture }}
                style={{
                    width: '100%',
                    height: height / 3 + 50,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
            />
            <View style={[styles.topContainer, {
                backgroundColor: theme.primaryColorVariants.mediumOpacity,
            }]}>
            </View>
            <View style={[styles.middleContainer, {
                backgroundColor: theme.backgroundColor,

            }]} />
            <View style={[styles.bottomContainer, {
                backgroundColor: theme.backgroundColor,
            }]}>
                <UserInformation user={user} />
                <FollowerSection user={user} />
                <ProfileActions />

            </View>
        </View>
    )
}

export default MyProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainer: {
        height: height / 2,
        position: 'absolute',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleContainer: {
        height: 100,
        position: 'absolute',
        top: height / 3,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        height: 2 * height / 3,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        borderTopLeftRadius: 50,
        zIndex: 2,
    },

})