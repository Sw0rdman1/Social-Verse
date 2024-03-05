import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../../../../assets/constants/Colors';
import GradientBackground from '../../../components/ui/GradientBackground';
import InboxHeader from '../../../components/chat/InboxHeader';

const InboxScreen = () => {
    const { top } = useSafeAreaInsets();

    const array1to100 = Array.from({ length: 100 }, (_, i) => i + 1);

    return (
        <GradientBackground inverted>
            <InboxHeader>
                {array1to100.map((i) => (
                    <View key={i} style={styles.chatContainers}>
                        <Text>Chat {i}</Text>
                    </View>
                ))}
            </InboxHeader>
        </GradientBackground>
    )
}

export default InboxScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.whiteBg,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    chatContainers: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
    }
})