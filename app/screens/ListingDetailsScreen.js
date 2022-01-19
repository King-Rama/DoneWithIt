import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import {Image} from 'react-native-expo-image-cache';
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";

const ListingDetailsScreen = ({route}) => {
    const listing = route.params;

    return (
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <View>
                <Image style={styles.image}
                       uri={listing.images[0].url} preview={{uri: listing.images[0].thumbnailUrl}} tint='light'/>
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{listing.title}</AppText>
                    <AppText style={styles.price}>{listing.price}</AppText>
                    <View style={styles.userContainer}>
                        <ListItem
                            image={require('../assets/rama.jpg')}
                            title="John Doe"
                            subtitle="5 Listings"/>
                    </View>
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
         );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover'
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
