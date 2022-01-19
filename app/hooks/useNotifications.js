import React, {useEffect} from "react";
import * as Notifications from "expo-notifications";
import navigation from "../navigation/rootNavigation";
import expoPushTokensApi from "../api/expoPushTokens";


let useNotifications;
export default useNotifications = (notificationListener) => {

    useEffect(() => {
        registerForPushNotifications();

        // listening for push notifications
        if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Notifications.getPermissionsAsync();
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
            console.log(token);
        } catch (e) {
            console.log("Error getting push token", e);
        }
    }
}