import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";


const listing = [
    {
        id: 1,
        title: 'Macbook pro for sale',
        price: '$100',
        image: 'https://64.media.tumblr.com/626563c0f728cf541a7946c7327c8615/a1954c9d3804966f-42/s400x600/bd2b0820087e7471a03b7fc4eac479537fb4d996.jpg'
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: '$2000',
        image: 'https://64.media.tumblr.com/bbf3b57818929bea3385751c44cc8eeb/665dafd7c9544795-a7/s400x600/c422cfa86f83bc8cf7a33534a038c463aeb9126c.jpg'
    },
    {
        id: 3,
        title: 'fausty positioning',
        price: '$300',
        image: 'https://64.media.tumblr.com/c18cdfc6f07c1537eba354cacdbab66d/ac3b4b43736ff3e1-cf/s1280x1920/5dbbb9ef3b8e1c7fe66ad2083bebd470acc8aed1.jpg',
    },
    {
        id: 4,
        title: 'fausty positioning',
        price: '$300',
        image: 'https://64.media.tumblr.com/e4462defade373db9f8c10718b99b64d/ef781e39145fca25-e1/s500x750/9c8167684c64a08799dea023dc2cc30e4ec4a94f.jpg',
    }
]

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listing}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({item}) =>
                    <AppCard
                        title={item.title}
                        subtitle={item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light

    }
});

export default ListingsScreen;