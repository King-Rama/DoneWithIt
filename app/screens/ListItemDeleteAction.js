import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress }>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        backgroundColor: colors.danger,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    }
});

export default ListItemDeleteAction;