import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/constants/Colors';
import { useState } from 'react';

const ProfileActions: React.FC = () => {
    const [newNotification, setNewNotification] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Option color={Colors.grayTransparent} icon="newspaper-variant-multiple" text="My Posts" />
                <Option color={Colors.grayTransparent} icon="notifications" text="Notifications" />
                <Option color={Colors.grayTransparent} icon="setting" text="Settings" />
            </View>
        </View>

    );
};

const ICON_SIZE = 28;

const Option: React.FC<{ color: string; icon: 'notifications' | 'setting' | 'logout' | 'newspaper-variant-multiple'; text: string }> = ({ color, icon, text }) => {

    const returnIcon = () => {
        switch (icon) {
            case 'newspaper-variant-multiple':
                return <MaterialCommunityIcons
                    color={Colors.gradient2}
                    name="newspaper-variant-multiple"
                    size={ICON_SIZE}
                />;
            case 'setting':
                return <AntDesign
                    name="setting"
                    size={ICON_SIZE}
                />;
            case 'notifications':
                return <Ionicons name="notifications" size={ICON_SIZE} />

            case 'logout':
                return <AntDesign
                    name="logout"
                    size={ICON_SIZE}
                />;



        }
    }

    return (
        <TouchableOpacity style={[styles.option, {
            borderColor: Colors.grayTransparentMore,
        }]}>
            {returnIcon()}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};
0
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingVertical: 20,
        marginTop: 20,
        gap: 0,
        backgroundColor: Colors.white,
        borderRadius: 35,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },

    option: {
        flex: 1,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        gap: 5,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    text: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray
    },
});

export default ProfileActions;
