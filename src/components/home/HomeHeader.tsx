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

    const logoColor = theme.backgroundColor === "#FFFFFF" ?
        theme.backgroundColor :
        theme.primaryColor

    return (
        <View style={[styles.titleContainer, { paddingTop: top + 25 }]}>

            <Animated.Text
                style=
                {[styles.title, { color: logoColor, textShadowColor: theme.primaryColor }]}
                sharedTransitionTag="home-screen-title"
            >
                SocialVerse
            </Animated.Text>
            <ThemeSwitch />

        </View>
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