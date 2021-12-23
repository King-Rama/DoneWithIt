import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image}
                   source={{uri: 'https://64.media.tumblr.com/0bd2f1a9c82b0afe3309c3f25fd738f3/2d68c03504638cbe-b4/s500x750/dc132831b6adb8b1f2a0c91c73f43414d95ddd8e.jpg'}}/>
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>White Car for sale</AppText>
                <AppText style={styles.price}>$100,000</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image='https://cdn.pixabay.com/photo/2013/08/28/11/19/lamborghini-176700__340.jpg'
                        title="John Doe"
                        subtitle="5 Listings"/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
});

export default ListingDetailsScreen;
