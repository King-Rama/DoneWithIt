import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import routeConstants from '../navigation/routes'
import useAuth from "../auth/useAuth";


const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: routeConstants.MESSAGES
    }
]

function AccountScreen({navigation}) {
    const {user, logOut} = useAuth();


    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subtitle={user.email}
                    image={require('../assets/rama.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                          ItemSeparatorComponent={ListItemSeparator}
                          keyExtractor={menuItem => menuItem.title}
                          renderItem={({item}) => (
                              <ListItem
                                  title={item.title}
                                  iconComponent={<Icon name={item.icon.name}
                                                       backgroundColor={item.icon.backgroundColor}/>}
                                  onPress={() => navigation.navigate(item.targetScreen)}
                              />)
                          }/>
            </View>
            <ListItem
                title='Log out'
                iconComponent={<Icon name='logout' backgroundColor={colors.primary}/>}
                onPress={() => logOut()}
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;