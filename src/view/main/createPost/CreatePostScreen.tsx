import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import MyImagePicker from '../../../components/createPost/ImagePicker'
import Colors from '../../../../assets/constants/Colors'
import { useEffect, useState } from 'react'
import GradientBackground from '../../../components/ui/GradientBackground'
import { StackNavigationProp } from '@react-navigation/stack'
import { BlurView } from 'expo-blur'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CreatePostButtons from '../../../components/createPost/CreatePostButtons'

interface CreatePostScreenProps {
    navigation: StackNavigationProp<any, any>;
}

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
    const [image, setImage] = useState("")
    const [caption, setCaption] = useState("")
    const { top } = useSafeAreaInsets()

    const clickCancelHandler = () => {
        setImage("")
        // navigation.goBack()
    }

    const clickPostHandler = () => {
        // setImage("")
        // navigation.goBack()
    }

    return (
        <GradientBackground inverted centerItems>
            <View style={styles.container}>
                <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    <Text style={[styles.title, { marginTop: top + 10 }]}>Create New Post</Text>
                    <View style={styles.inputContainer}>
                        <MyImagePicker image={image} setImage={setImage} />
                        <View
                            style={styles.captionInputContainer}
                        >
                            <Text style={styles.captionInputTitle}>Caption</Text>
                            <TextInput
                                style={styles.captionInput}
                                multiline
                                placeholder="Enter post caption"
                                value={caption}
                                onChangeText={setCaption}
                            />
                        </View>
                    </View>
                    {image &&
                        <CreatePostButtons
                            clickPostHandler={clickPostHandler}
                            clickCancelHandler={clickCancelHandler}
                        />
                    }

                </BlurView >

            </View>
        </GradientBackground >
    )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    blurContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        gap: 30,
    },
    image: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.whiteBg,
        textTransform: 'uppercase'
    },
    inputContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15,
        marginTop: 20,
        paddingHorizontal: 10
    },
    captionInputContainer: {
        height: 270,
        width: "40%",
        borderColor: Colors.grayTransparentMore,
        borderWidth: 1,
        borderRadius: 10,
    },
    captionInputTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.whiteBg,
        marginTop: 10,
        marginLeft: 10
    },
    captionInput: {
        width: "100%",
        height: "100%",
        padding: 10,
        fontSize: 18,
        marginTop: 10,
        color: Colors.whiteBg
    }


})