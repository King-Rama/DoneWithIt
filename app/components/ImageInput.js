import React from 'react';
import { Image, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ImageSelect({ onImageDelete, image, ...otherProps }) {


    return (
        <TouchableWithoutFeedback onPress={() => onImageDelete(image)} {...otherProps}>
        <View style={styles.container}>
                <Image
                    source={{uri: image.uri }}
                    style={styles.image}
                />
        </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.light,
        height: 100,
        width: 100,
        overflow: 'hidden',
        marginHorizontal: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    }
});

export default ImageSelect;