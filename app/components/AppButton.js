import React from 'react';
import { View, StyleSheet } from "react-native";
import colors from '../config/colors';

const Button = () => {
    return (
        <View style={styles.button}>
            <View style={styles.buttonText}>
                <Text style={styles.text}>Button</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});

export default Button;
