import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';

interface CancelButtonProps {
    clickCancelHandler: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ clickCancelHandler }) => {
    const { bottom } = useSafeAreaInsets()

    return (
        <Animated.View
            entering={FadeInDown.delay(400).duration(500)}
            style={[styles.button, { position: 'absolute', bottom: bottom + 10 }]}
        >
            <TouchableOpacity style={styles.cancelButton} onPress={clickCancelHandler}>
                <Ionicons name="close" size={30} color={Colors.gray} />
            </TouchableOpacity>
        </Animated.View>
    )
}

export default CancelButton

const styles = StyleSheet.create({
    button: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.whiteBg,
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    }
})