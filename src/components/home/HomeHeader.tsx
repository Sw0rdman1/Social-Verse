import { StyleSheet, Text, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import Colors from '../../../assets/constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppContext } from '../../context/AppContext'
import { LinearGradient } from 'expo-linear-gradient'

const HomeHeader = () => {
    const { top } = useSafeAreaInsets()
    const { currentUser } = useAppContext()


    return (
        <LinearGradient
            colors={[Colors.gradient2, Colors.gradient2TransparentLess, Colors.whiteBg]}
            style={[styles.titleContainer, { paddingTop: top + 25 }]}
        >
            <Animated.Text
                style={styles.title}
                sharedTransitionTag="home-screen-title"
            >
                SocialVerse
            </Animated.Text>
            <Animated.Image
                entering={
                    FadeIn.delay(300).duration(500)
                }
                source={{ uri: currentUser.profilePicture }}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    titleContainer: {
        height: 350,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        position: "absolute",
        top: 0,
        left: 0,
    },

    title: {
        color: Colors.whiteBg,
        fontWeight: "700",
        fontSize: 42,
        shadowColor: Colors.black,
        shadowOpacity: 0.4,
        shadowRadius: 20,
        shadowOffset: {
            width: 0,
            height: 0,
        },

    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.whiteBg,
    },


})