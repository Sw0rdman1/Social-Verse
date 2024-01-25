import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GradientBackground from '../../../components/ui/GradientBackground'
import Animated from "react-native-reanimated";
import Colors from '../../../../assets/constants/Colors';
import SearchInput from '../../../components/search/SearchInput';
import SearchFilters from '../../../components/search/SearchFIlters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SearchScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <GradientBackground inverted centerItems>
                <View
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}
                >
                    <View style={[styles.form, {
                        paddingTop: insets.top
                    }]}>
                        <SearchInput />
                    </View>
                    <Animated.View
                        style={styles.formContainer}
                    >
                        <SearchFilters />

                        <Text>Search</Text>
                    </Animated.View>
                </View>
            </GradientBackground>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    formContainer: {
        flex: 7,
        width: "100%",
        backgroundColor: Colors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: "flex",
        alignItems: "center",
        paddingTop: 20,
    },
    form: {
        width: "100%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
})