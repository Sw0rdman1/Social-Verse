import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../../assets/constants/Colors'
import Animated, { FadeInDown } from 'react-native-reanimated';

interface CreatePostButtonsProps {
    clickPostHandler: () => void;
    disableButton?: boolean;
}

const CreatePostButtons: React.FC<CreatePostButtonsProps> = ({ clickPostHandler, disableButton }) => {
    return (
        <Animated.View
            entering={FadeInDown.delay(200).duration(500)}
            style={styles.button}
        >
            <TouchableOpacity disabled={disableButton} style={disableButton ? styles.postButtonDisabled : styles.postButton} onPress={clickPostHandler}>
                <Text style={[{ color: disableButton ? Colors.whiteBg : Colors.black }, styles.buttonText]}>Post</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default CreatePostButtons

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "95%",
        marginTop: 10
    },
    postButton: {
        backgroundColor: Colors.whiteBg,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: "100%"
    },
    postButtonDisabled: {
        backgroundColor: Colors.grayTransparentLess,
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