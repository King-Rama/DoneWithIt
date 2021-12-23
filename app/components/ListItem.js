import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from "react-native";
import colors from "../config/colors";
import {Swipeable} from "react-native-gesture-handler";
import AppText from "./AppText";
import {MaterialCommunityIcons} from "@expo/vector-icons";


function ListItem({title, subtitle, image, iconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                onPress={onPress}
                underlayColor={colors.light}>
                    <View style={styles.container}>
                        { iconComponent && (<View >{iconComponent}</View>) }
                        { image && (<Image source={{uri: image}} style={styles.image} />) }
                        <View style={styles.textContainer}>
                            {title && (<AppText style={styles.title}>{title}</AppText>) }
                            {subtitle && (<AppText style={styles.subtitle}>{subtitle}</AppText>) }
                        </View>
                        <MaterialCommunityIcons name="chevron-right" size={30} color={colors.medium} />
                    </View>

            </TouchableHighlight>
        </Swipeable>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
    },
    title: {
        fontWeight: '500',
    },
    subtitle: {
        color: colors.medium,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
    },
});

export default ListItem;
