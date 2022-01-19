import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, VirtualizedList} from "react-native";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routeConstants from '../navigation/routes'
import ListingsApi from '../api/listings';
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";


function ListingsScreen({navigation}) {
   const { data: listings, error, loading, request: loadListings } = useApi(ListingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <>
            <AppActivityIndicator visible={loading} />
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't retrieve the listings.</AppText>
                    <AppButton title="Retry" onPress={loadListings}/>
                </>
            )}
            {/*{loading &&  (0*/}

                {/*)}*/}
            <VirtualizedList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                refreshing={loading}
                getItemCount={() => listings.length}
                getItem={(data, index) => data[index]}
                onRefresh={() => loadListings()}
                renderItem={({item}) =>
                    <AppCard
                        title={item.title}
                        subtitle={item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routeConstants.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                }
            />
        </Screen>
            </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light

    }
});

export default ListingsScreen;