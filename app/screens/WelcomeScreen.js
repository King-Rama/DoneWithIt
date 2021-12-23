import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
    return (
        <ImageBackground blurRadius={5} source={require('../assets/background.jpg')} style={styles.img}
                         resizeMode='cover'>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                    <Text style={styles.tagline}>Sell What You Don't Need</Text>
                </View>
                <View style={styles.btnContainer}>
                    <AppButton title='login'/>
                    <AppButton title='register' color={'secondary'}/>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',

    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 100,
        height: 100,
        justifyContent: 'flex-start',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 50,
    },
    tagline: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '600',
        paddingVertical: 20,
    },
    btnContainer: {
        paddingHorizontal: 20,
    }
});

export default WelcomeScreen;
