import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from "../config/colors";
import AppText from "./AppText";

const AppCard = ({title, subtitle, image}) => {
    return (
        <View style={styles.card}>
            <Image source={{uri: image}} style={styles.img}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover',
    },
    detailsContainer: {
        padding: 20,
    },
    title:{
        marginBottom: 7,
    },
    subtitle:{
        color: colors.green,
        fontWeight: 'bold',
    }
});

export default AppCard;
