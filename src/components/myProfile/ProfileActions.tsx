import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProfileActions: React.FC = () => {
    return (
        <View style={styles.container}>
            <Option color="rgba(255, 0, 0, 0.5)" icon="newspaper-variant-multiple" text="See Posts" />
            <Option color="rgba(0, 255, 0, 0.5)" icon="edit" text="Edit Profile" />
            <Option color="rgba(0, 0, 255, 0.5)" icon="setting" text="Settings" />
            <Option color="rgba(255, 255, 0, 0.5)" icon="notifications" text="Notifications" />
            <Option color="rgba(0, 255, 255, 0.5)" icon="logout" text="Log Out" />
        </View>
    );
};

const Option: React.FC<{ color: string; icon: 'notifications' | 'edit' | 'setting' | 'logout' | 'newspaper-variant-multiple'; text: string }> = ({ color, icon, text }) => {

    const returnIcon = () => {
        switch (icon) {
            case 'edit' || 'setting' || 'logout':
                return <AntDesign name={icon} />;
            case 'newspaper-variant-multiple':
                return <MaterialCommunityIcons name="newspaper-variant-multiple" style={styles.icon} />;
            case 'notifications':
                return <Ionicons name="notifications" style={styles.icon} />
            default:
                return <AntDesign name="edit" style={styles.icon} />;
        }
    }

    return (
        <View style={[styles.option, { backgroundColor: color }]}>
            {returnIcon()}
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileActions;
