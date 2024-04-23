import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyImagePicker from '../../../components/createPost/ImagePicker'
import Colors from '../../../../assets/constants/Colors'
import { useState } from 'react'
import GradientBackground from '../../../components/ui/GradientBackground'
import { StackNavigationProp } from '@react-navigation/stack'
import { BlurView } from 'expo-blur'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CreatePostButtons from '../../../components/createPost/CreatePostButtons'
import CaptionInput from '../../../components/createPost/CaptionInput'
import CategorySelect from '../../../components/createPost/CategorySelect'
import { useAppContext } from '../../../context/AppContext'
import { Ionicons } from '@expo/vector-icons'
import { ImagePickerAsset } from 'expo-image-picker'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from '../../../context/ThemeContext'


interface CreatePostScreenProps {
    navigation: StackNavigationProp<any, any>;
}



const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
    const { top } = useSafeAreaInsets()
    const [image, setImage] = useState<ImagePickerAsset | null>(null)
    const [imageUrl, setImageUrl] = useState<string>("")
    const [caption, setCaption] = useState("")
    const { theme } = useTheme()

    const { api, currentUser, refreshPosts } = useAppContext()


    const goBackHandler = () => {
        setImage(null)
        navigation.goBack()
    }
    const clickPostHandler = async () => {
        if (!image || !caption || !currentUser) return

        await api.posts.createPost(caption, imageUrl, currentUser.id)

        await refreshPosts()
        setImage(null)
        setCaption("")
        navigation.goBack()
    }

    const disableButton = !image || !caption

    return (
        <LinearGradient colors={[
            theme.primaryColor,
            theme.primaryColorVariants.mediumOpacity,
        ]} style={{ flex: 1 }}>
            <View style={styles.container}>
                <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
                    {image && <Image source={{ uri: image.uri }} style={styles.image} />}
                    <View style={styles.formContainer}>
                        <View style={[styles.titleContainer, { marginTop: top + 10 }]}>
                            <TouchableOpacity style={styles.backButton} onPress={goBackHandler}>
                                <Ionicons name="arrow-back" size={30} color={Colors.whiteBg} />
                            </TouchableOpacity>
                            <Text style={styles.title}>Create New Post</Text>
                        </View>
                        <MyImagePicker image={image} setImage={setImage} setImageUrl={setImageUrl} />
                        <CaptionInput caption={caption} setCaption={setCaption} />
                        <CategorySelect />
                        <CreatePostButtons
                            disableButton={disableButton}
                            clickPostHandler={clickPostHandler}
                        />
                    </View>
                </BlurView>

            </View>
        </LinearGradient >
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
        gap: 25,
        paddingHorizontal: 10,
    },
    image: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
    },
    titleContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.whiteBg,
        textTransform: 'uppercase'
    },
    backButton: {
        position: 'absolute',
        left: 10,
    }


})