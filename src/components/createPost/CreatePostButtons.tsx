import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../../assets/constants/Colors'
import Animated, { FadeInDown } from 'react-native-reanimated';

interface CreatePostButtonsProps {
    clickPostHandler: () => void;
    clickCancelHandler: () => void;
}

const CreatePostButtons: React.FC<CreatePostButtonsProps> = ({ clickPostHandler, clickCancelHandler }) => {
    return (
        <View style={styles.buttonsContainer}>

            <Animated.View
                entering={FadeInDown.delay(200).duration(500)}
                style={styles.button}

            >
                <TouchableOpacity style={styles.postButton} onPress={clickPostHandler}>
                    <Text style={[{ color: Colors.black }, styles.buttonText]}>Post</Text>
                </TouchableOpacity>

            </Animated.View>
            <Animated.View
                entering={FadeInDown.delay(200).duration(500)}
                style={styles.button}

            >
                <TouchableOpacity style={styles.cancelButton} onPress={clickCancelHandler}>
                    <Text style={[{ color: Colors.black }, styles.cancelButtonText]}>Cancel</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default CreatePostButtons

const styles = StyleSheet.create({
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        width: "95%",
    },
    button: {
        width: "100%",
    },
    postButton: {
        backgroundColor: Colors.whiteBg,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: "100%"
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: Colors.gray,
        backgroundColor: Colors.grayTransparentLess,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: "100%"
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cancelButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.whiteBg
    }
})