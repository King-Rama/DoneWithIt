import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import routeConstants from '../navigation/routes'
import useNotifications from "../hooks/useNotifications";


const Tab = createBottomTabNavigator();


function AppNavigator(props) {
    useNotifications();

    return (
        <Tab.Navigator>
            <Tab.Screen name={routeConstants.FEED} component={FeedNavigator} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='home' color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={routeConstants.LISTING_EDIT} component={ListingEditScreen}
                        options={({navigation, route}) => ({
                            tabBarButton: ({}) => (
                                <NewListingButton onPress={() => navigation.navigate(routeConstants.LISTING_EDIT)}/>
                            ),
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name='plus-circle' color={color} size={size}/>
                            )
                        })}/>
            <Tab.Screen name={routeConstants.ACCOUNT} component={AccountNavigator} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='account' color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default AppNavigator;