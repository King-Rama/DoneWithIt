import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";


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
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Ramadhan'
                    subtitle='ramadhanwakil19@gmail.com'
                    image='https://i.pinimg.com/736x/a1/52/51/a152516ede7f5952508a2eb0bfbbcf70.jpg'
                />
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                          ItemSeparatorComponent={ListItemSeparator}
                          keyExtractor={menuItem => menuItem.title}
                          renderItem={({item}) =>
                    <ListItem
                        title={item.title}
                        imageComponent={ <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                    />
                } />
            </View>
            <ListItem
                title='Log out'
                imageComponent={ <Icon name='logout' backgroundColor={colors.primary} /> }
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