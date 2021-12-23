import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppStyles from '../config/styles';


function AppText({children, style}) {
    return (
        <View style={styles.container}>
            <Text style={[AppStyles.text, style]}>
                {children}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    text: {
        width: '100%',
    }
});

export default AppText;
