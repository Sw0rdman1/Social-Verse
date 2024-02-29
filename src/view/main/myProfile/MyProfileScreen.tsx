import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { User, getCurrentUser } from '../../../models/User'
import { useEffect, useState } from 'react'
import Colors from '../../../../assets/constants/Colors'
import UserInformation from '../../../components/myProfile/UserInformation'
import ProfileActions from '../../../components/myProfile/ProfileActions'

const { height } = Dimensions.get('window')

const MyProfileScreen = () => {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        setUser(getCurrentUser())
    }, [])

    if (!user) {
        return null
    }

    return (
        <View style={styles.container}>
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
            <View style={styles.topContainer}>
            </View>
            <View style={styles.middleContainer} />
            <View style={styles.bottomContainer}>
                <UserInformation user={user} />
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
        height: height / 3,
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: Colors.gradient2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 50,
    },
    middleContainer: {
        height: 100,
        position: 'absolute',
        top: height / 3,
        width: '100%',
        backgroundColor: Colors.gradient2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        height: 2 * height / 3,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.whiteBg,
        display: 'flex',
        borderTopLeftRadius: 50,
        zIndex: 2,
    },

})