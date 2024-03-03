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
                <TouchableOpacity style={[styles.option, { backgroundColor: Colors.gradient2TransparentMore }]}>
                    <MaterialCommunityIcons
                        name="newspaper-variant-multiple"
                        style={styles.icon}
                        size={ICON_SIZE}
                    />
                    <Text style={styles.text}>See Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { backgroundColor: Colors.gradient1Transparent }]}>
                    <AntDesign
                        name="edit" style={styles.icon}
                        size={ICON_SIZE}
                    />
                    <Text style={styles.text}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
                <TouchableOpacity onPress={() => setNewNotification(!newNotification)}
                    style={[styles.option, { backgroundColor: newNotification ? Colors.gradient2TransparentLess : Colors.grayTransparent }]}
                >
                    <Ionicons name="notifications" style={styles.icon} size={ICON_SIZE} />
                    <Text style={styles.text}>Notifications</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>

                <Option color={Colors.grayTransparentMore} icon="setting" text="Settings" />
                <Option color={Colors.likeColorTransparent} icon="logout" text="Log Out" />
            </View>
        </View>
    );
};

const ICON_SIZE = 24;

const Option: React.FC<{ color: string; icon: 'notifications' | 'edit' | 'setting' | 'logout' | 'newspaper-variant-multiple'; text: string }> = ({ color, icon, text }) => {

    const returnIcon = () => {
        switch (icon) {
            case 'edit':
                return <AntDesign
                    name="edit" style={styles.icon}
                    size={ICON_SIZE}
                />;

            case 'setting':
                return <AntDesign
                    name="setting" style={styles.icon}
                    size={ICON_SIZE}
                />;

            case 'logout':
                return <AntDesign
                    name="logout" style={styles.icon}
                    size={ICON_SIZE}
                />;

            case 'newspaper-variant-multiple':
                return <MaterialCommunityIcons
                    name="newspaper-variant-multiple"
                    style={styles.icon}
                    size={ICON_SIZE}
                />;
            case 'notifications':
                return <Ionicons name="notifications" style={styles.icon} size={ICON_SIZE} />
            default:
                return <AntDesign name="edit" style={styles.icon} size={ICON_SIZE} />;
        }
    }

    return (
        <TouchableOpacity style={[styles.option, { backgroundColor: color }]}>
            {returnIcon()}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        height: 250,
        marginTop: 20,
        gap: 10,
    },
    rowContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    option: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black
    },
});

export default ProfileActions;
