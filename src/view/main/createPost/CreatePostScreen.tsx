import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import MyImagePicker from '../../../components/createPost/ImagePicker'
import Colors from '../../../../assets/constants/Colors'
import { useEffect, useState } from 'react'
import GradientBackground from '../../../components/ui/GradientBackground'
import { StackNavigationProp } from '@react-navigation/stack'
import { BlurView } from 'expo-blur'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CreatePostButtons from '../../../components/createPost/CreatePostButtons'
import { useBottomTab } from '../../../context/BottomBarContext'
import Animated, { FadeInDown } from 'react-native-reanimated'
import CaptionInput from '../../../components/createPost/CaptionInput'
import CancelButton from '../../../components/createPost/CancelButton'
import PostOptions from '../../../components/createPost/PostOptions'

interface CreatePostScreenProps {
    navigation: StackNavigationProp<any, any>;
}

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
    const [image, setImage] = useState("")
    const [caption, setCaption] = useState("")
    const { top, bottom } = useSafeAreaInsets()

    const { setBottomTabVisible } = useBottomTab()

    const clickCancelHandler = () => {
        setImage("")
        setBottomTabVisible(true)
        navigation.goBack()
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
                    <View style={styles.formContainer}>
                        <Text style={[styles.title, { marginTop: top + 10 }]}>Create New Post</Text>
                        <MyImagePicker image={image} setImage={setImage} />
                        <CaptionInput caption={caption} setCaption={setCaption} />
                        <PostOptions />
                        <CreatePostButtons
                            clickPostHandler={clickPostHandler}
                        />
                    </View>
                    <CancelButton clickCancelHandler={clickCancelHandler} />
                </BlurView>

            </View>
        </GradientBackground >
    )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    blurContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        gap: 30,
    },
    formContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        paddingHorizontal: 20,
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
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.whiteBg,
        textTransform: 'uppercase'
    },


})