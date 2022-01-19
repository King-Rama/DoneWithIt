import React, {useState} from 'react';
import {FlatList, StyleSheet} from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "./ListItemDeleteAction";


function MessagesScreen(props) {
    const [messages, setMessages] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the message from the messages array
        const newMessages = messages.filter(m => m.id !== message.id);
        // Set the new messages array to the messages state
        setMessages(newMessages);
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({item}) => <ListItem
                    title={item.title}
                    subtitle={item.description}
                    image={item.image}
                    onPress={() => console.log('hi')}
                    renderRightActions={() => (
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                    )}
                />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 13,
                            title: 'Big butt and tits',
                            description: 'Juicy girls on the stages',
                            image: 'https://picsum.photos/200'
                        },
                        {
                            id: 14,
                            title: 'Big butt and tits',
                            description: 'Juicy girls on the stages',
                            image: 'https://picsum.photos/200'
                        },
                    ]);
                    setRefreshing(false);
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.black
    }
});

export default MessagesScreen;