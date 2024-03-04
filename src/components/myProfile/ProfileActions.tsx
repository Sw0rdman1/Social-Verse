import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/constants/Colors';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileActions: React.FC = () => {
    const [newNotification, setNewNotification] = useState(2)
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Option color={Colors.grayDark} icon="newspaper-variant-multiple" text="My Feed" />
                <Option color={Colors.grayDark} icon="edit" text="Edit Profile" />
                <Option color={Colors.gray} newNotification={newNotification} icon="notifications" text="Notifications" />
            </View>
            <View style={styles.rowContainer}>
                <Option color={Colors.grayDark} icon="setting" text="Settings" />
                <Option color={Colors.gray} icon="privacy" text="Privacy policy" />
                <Option color={Colors.redLighter} icon="logout" text="Log out" />
            </View>

        </View>

    );
};

const ICON_SIZE = 28;

const Option: React.FC<{ newNotification?: number, color: string; icon: 'privacy' | 'edit' | 'notifications' | 'setting' | 'logout' | 'newspaper-variant-multiple'; text: string }> = ({ color, icon, text, newNotification }) => {

    const returnIcon = () => {
        if (!icon) return null;
        if (icon === 'notifications' && newNotification && newNotification > 0) color = Colors.gradient2;

        switch (icon) {
            case 'privacy':
                return <MaterialIcons name="privacy-tip" size={ICON_SIZE} color={color} />

            case 'edit':
                return <AntDesign
                    name="edit"
                    size={ICON_SIZE}
                    color={color}
                />;

            case 'newspaper-variant-multiple':
                return <MaterialCommunityIcons
                    color={color}
                    name="newspaper-variant-multiple"
                    size={ICON_SIZE}
                />;
            case 'setting':
                return <AntDesign
                    name="setting"
                    size={ICON_SIZE}
                    color={color}
                />;
            case 'notifications':
                return <Ionicons name="notifications" size={ICON_SIZE} color={color} style={{ position: "relative" }} />

            case 'logout':
                return <MaterialIcons name="logout" size={ICON_SIZE} color={color} />;
        }
    }

    if (icon === 'notifications') return (
        <TouchableOpacity style={[styles.option, {
            borderColor: Colors.grayTransparentMore,
        }]}>
            {returnIcon()}
            <Text style={styles.text}>{text}</Text>
            {newNotification && newNotification > 0 &&
                <View style={{
                    position: 'absolute',
                    top: 0,
                    right: 30,
                    height: 20,
                    width: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor: Colors.gradient2TransparentLess,
                }} >
                    <Text style={{ fontSize: 11, fontWeight: "600", color: Colors.whiteBg }}>{newNotification}</Text>
                </View>}
        </TouchableOpacity>
    );

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
        marginHorizontal: 15,
        marginTop: 40,
        paddingHorizontal: 10,
        paddingVertical: 20,
        gap: 15,
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
