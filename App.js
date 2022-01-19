import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AppLoading from 'expo-app-loading';
import { navigationRef } from "./app/navigation/rootNavigation";
import Screen from "./app/components/Screen";
import AppButton from "./app/components/AppButton";
import * as Notifications from 'expo-notifications';


export default function App() {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);
    
    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (user) setUser(user);

    };

    if (!isReady) return (
        <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={() => console.warn()}/>);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <OfflineNotice/>
            <NavigationContainer ref={navigationRef} theme={navigationTheme}>

                {user ? (<AppNavigator/>) : (<AuthNavigator/>)}
            </NavigationContainer>
        </AuthContext.Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

