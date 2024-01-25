import { StyleSheet, Text, View } from 'react-native'
import Animated, { FadeInDown } from "react-native-reanimated";

const UserProfileScreen = ({ route, navigation }: any) => {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <Animated.Image
                sharedTransitionTag={user.id + ".image"}
                source={{
                    uri: user.profilePicture as string,
                }}
                style={{
                    width: "100%",
                    height: "115%",
                    position: "absolute",
                    top: 0,
                }}
            />
        </View>
    )
}

export default UserProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})