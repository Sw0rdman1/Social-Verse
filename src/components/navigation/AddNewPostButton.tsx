import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/constants/Colors'
import { Entypo } from '@expo/vector-icons';
import { useBottomTab } from '../../context/BottomBarContext';

const AddNewPostButton = ({ navigation }: any) => {
    const { isBottomTabVisible } = useBottomTab();

    if (!isBottomTabVisible) {
        return null;
    }

    return (

        <TouchableOpacity
            style={styles.addPostStyle}
            onPress={() => navigation.navigate("CreatePostScreen")}
        >
            <Entypo name="plus" size={32} color={Colors.white} />
        </TouchableOpacity>
    )
}

export default AddNewPostButton

const styles = StyleSheet.create({
    addPostStyle: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60,
        backgroundColor: Colors.gradient2,
        position: "absolute",
        bottom: 40,
        right: 25,
        zIndex: 100,
        shadowColor: Colors.gradient2,
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.65,
        shadowRadius: 3,

    },
})