import React, { useState } from 'react';
import {Platform, StatusBar, StyleSheet, Text} from 'react-native';
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tweets = () => {
    return (
        <Screen>
            <Text>Tweets</Text>
        </Screen>
    );
};

const TweetDetails = () => {
    return (
        <Screen>
            <Text>Tweet Details</Text>
        </Screen>
    );
};

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
);

export default function App() {


    return (
        // <Screen>
        //     {/*<ImageInputList*/}
        //     {/*    imageUris={imageUris}*/}
        //     {/*    onAddImage={handleAdd}*/}
        //     {/*    onRemoveImage={handleRemove}*/}
        //     {/*/>*/}
        // </Screen>
        // <ListingEditScreen />
       <NavigationContainer>
           <StackNavigator />
       </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

