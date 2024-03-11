import {
    Animated as RNAnimated,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from "react-native";
import { useRef } from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Colors from "../../../assets/constants/Colors";


const Header_Max_Height = 120;
const Header_Min_Height = 70;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const BORDER_RADIUS = 30;

interface DynamicHeaderProps {
    value: RNAnimated.Value;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({
    value,
}) => {

    const height = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: "clamp",
    });

    const fontSize = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [32, 26],
        extrapolate: "clamp",
    });

    const borderBottomLeftRadius = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [BORDER_RADIUS, 0],
        extrapolate: "clamp",
    });


    return (
        <RNAnimated.View style={{ height }} >
            <RNAnimated.View style={[styles.headerContainer, { borderBottomLeftRadius }]}>
                <RNAnimated.Text style={[styles.title, { fontSize }]}>Messages</RNAnimated.Text>
            </RNAnimated.View>
        </RNAnimated.View >
    );
};

interface ScrollViewScreenProps {
    children: React.ReactNode;
}

const InboxHeader: React.FC<ScrollViewScreenProps> = ({
    children,
}) => {
    const scrollOffsetY = useRef(new RNAnimated.Value(0)).current;

    const animatedPaddingTop = scrollOffsetY.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [0, Scroll_Distance],
        extrapolate: "clamp",
    });

    return (
        <View style={styles.homeContainer}>
            <DynamicHeader
                value={scrollOffsetY}
            />

            <ScrollView
                style={{
                    backgroundColor: Colors.whiteBg,
                    paddingTop: 0,
                }}
                scrollEventThrottle={5}
                showsVerticalScrollIndicator={false}
                onScroll={RNAnimated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
            >

                <Animated.View
                    style={[styles.borderRadius, { flex: 1 }]}
                    entering={FadeInDown.delay(600).duration(500)}
                >
                    <RNAnimated.View
                        style={{
                            height: animatedPaddingTop,
                        }}
                    />
                    {children}
                </Animated.View>
            </ScrollView>
        </View>
    );
};

export default InboxHeader;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,

    },
    headerContainer: {
        backgroundColor: Colors.gradient2,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        height: "100%",
        borderBottomRightRadius: BORDER_RADIUS,
    },
    title: {
        marginHorizontal: 20,
        marginBottom: 5,
        fontSize: 28,
        fontWeight: "bold",
        color: Colors.white,
    },
    borderRadius: {
        borderBottomLeftRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    image: {
        flex: 1,
        zIndex: 10,
        position: "absolute",
        width: "100%",
        height: "100%",
    },

});
