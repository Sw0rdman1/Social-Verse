import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import Colors from '../../../assets/constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppContext } from '../../context/AppContext'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext'
import ThemeSwitch from '../theme/ThemeSwitch'
import { BlurView } from 'expo-blur'
import PrimaryColorSwitch from '../theme/PrimaryColorSwitch'

const HomeHeader = ({ navigation }: any) => {
    const { top } = useSafeAreaInsets()
    const { theme } = useTheme()

    const logoColor = theme.backgroundColor === "#FFFFFF" ?
        theme.backgroundColor :
        theme.primaryColor

    const textShadowColor = theme.backgroundColor === "#FFFFFF" ?
        theme.primaryColor :
        theme.backgroundColor


    return (
        <BlurView
            intensity={20}
            tint={theme.backgroundColor === "#FFFFFF" ? "light" : "dark"}
            style={[styles.titleContainer, { paddingTop: top + 25, backgroundColor: theme.primaryColorVariants.lowOpacity }]}>

            <Animated.Text
                style=
                {[styles.title, { color: logoColor, textShadowColor }]}
                sharedTransitionTag="home-screen-title"
            >
                SocialVerse
            </Animated.Text>
            <ThemeSwitch />
            <TouchableOpacity onPress={() => { navigation.navigate("Inbox") }}>
                <Ionicons name="chatbubble-ellipses" size={28} color={logoColor} />
            </TouchableOpacity>
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
        alignItems: "center",
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
        textShadowRadius: 2
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderWidth: 1,
    },


})