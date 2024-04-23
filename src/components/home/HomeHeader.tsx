import { StyleSheet, Text, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import Colors from '../../../assets/constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppContext } from '../../context/AppContext'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from '../../context/ThemeContext'
import ThemeSwitch from '../theme/ThemeSwitch'
import { BlurView } from 'expo-blur'

const HomeHeader = () => {
    const { top } = useSafeAreaInsets()
    const { theme } = useTheme()

    const logoColor = theme.backgroundColor === "#FFFFFF" ?
        theme.backgroundColor :
        theme.primaryColor


    return (
        <BlurView
            intensity={15}
            tint={theme.backgroundColor === "#FFFFFF" ? "light" : "dark"}
            style={[styles.titleContainer, { paddingTop: top + 25 }]}>

            <Animated.Text
                style=
                {[styles.title, { color: logoColor, textShadowColor: theme.primaryColor }]}
                sharedTransitionTag="home-screen-title"
            >
                SocialVerse
            </Animated.Text>
            <ThemeSwitch />

        </BlurView>
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
        paddingBottom: 25,
        position: "absolute",
        zIndex: 100,
        top: 0,
        left: 0,
    },

    title: {
        fontWeight: "700",
        fontSize: 44,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderWidth: 1,
    },


})