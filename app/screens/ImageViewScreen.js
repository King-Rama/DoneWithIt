import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ImageViewScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name='close' color='white' size={35} />
                <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
            </View>
            <Image
                style={styles.image}
                source={{uri: 'https://i.pinimg.com/564x/fb/48/fe/fb48fec2a901d22b84c401715c525082.jpg'}}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    iconContainer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 5,
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
    },
    image: {
        flex: 0.9,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});

export default ImageViewScreen;
