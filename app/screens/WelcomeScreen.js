import React from 'react';
import {ImageBackground, StyleSheet, Text, Image, View} from "react-native";

const WelcomeScreen = () => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.img}>
            <View>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.signup} />
                <View style={styles.signin} />
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    img: {
        flex: 1,
        resizeMode: 'cover',
    },
    logo: {
        width: 100,
        height: 100,
        justifyContent: 'flex-start',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
    },
    signup: {
        backgroundColor: 'tomato',
        width: '100%',
        height: 50,
    },
    signin: {
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: 50,
    },
});

export default WelcomeScreen;
