import React, {useState} from 'react';
import {FlatList, StyleSheet} from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "./ListItemDeleteAction";

const messagesArray = [
    {
        id: 1,
        title: 'Hijab African',
        description: 'Confident and enthusiastic woman you\' want ',
        image: 'https://i.pinimg.com/564x/a1/63/23/a16323059998d0ab86dff877ec3b0a6d.jpg'
    },
    {
        id: 2,
        title: 'D ass on the floor',
        description: 'nice viewing of ass',
        image: 'https://i.pinimg.com/564x/c1/bc/71/c1bc71bda9a792c875f919da7e997036.jpg'
    },
    {
        id: 3,
        title: 'Kinky nasty',
        description: 'nice ass bitch showing ass love',
        image: 'https://i.pinimg.com/564x/bb/6b/30/bb6b30f31c558b13e387ec586c37f8ac.jpg'
    },
    {
        id: 4,
        title: 'Awaiting mounting',
        description: 'chair position with nice ass girl',
        image: 'https://picsum.photos/200'
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(messagesArray);
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
                            id: 12,
                            title: 'Big butt and tits',
                            description: 'Juicy girls on the stages',
                            image: 'https://i.pinimg.com/564x/7c/20/29/7c2029da1a4f45409d7084a8e435a1e1.jpg'
                        },
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
                        ...messagesArray

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