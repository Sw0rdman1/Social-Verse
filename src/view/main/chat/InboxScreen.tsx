import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../../../../assets/constants/Colors';
import GradientBackground from '../../../components/ui/GradientBackground';
import InboxHeader from '../../../components/chat/InboxHeader';

const InboxScreen = () => {
    const { top } = useSafeAreaInsets();


    return (
        <GradientBackground inverted>
            <InboxHeader>
                <View style={{ height: 2000, borderRadius: 50 }} />
            </InboxHeader>
        </GradientBackground>
    )
}

export default InboxScreen

const styles = StyleSheet.create({
    headerContainer: {
        flex: 3,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 34,
        fontWeight: "bold",
        color: Colors.whiteBg,
    },
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