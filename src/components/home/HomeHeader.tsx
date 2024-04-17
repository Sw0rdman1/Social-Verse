import { StyleSheet, Text, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import Colors from '../../../assets/constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppContext } from '../../context/AppContext'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from '../../context/ThemeContext'
import ThemeSwitch from '../theme/ThemeSwitch'

const HomeHeader = () => {
    const { top } = useSafeAreaInsets()
    const { currentUser } = useAppContext()
    const { theme } = useTheme()

    return (
        <LinearGradient
            colors={[theme.backgroundColor, theme.backgroundColor]}
            style={[styles.titleContainer, { paddingTop: top + 25 }]}
        >

            <Animated.Text
                style=
                {[styles.title, { color: theme.primaryColor }]}
                sharedTransitionTag="home-screen-title"
            >
                SocialVerse
            </Animated.Text>
            <ThemeSwitch />

            {/* <Animated.Image
                entering={
                    FadeIn.delay(300).duration(500)
                }
                source={{ uri: currentUser.profilePicture }}
                style={[styles.avatar, { borderColor: theme.backgroundColor }]}
            /> */}
        </LinearGradient>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    titleContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        marginBottom: 20,
    },

    title: {
        fontWeight: "700",
        fontSize: 44,
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderWidth: 1,
    },


})