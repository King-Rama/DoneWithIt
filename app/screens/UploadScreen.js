import React from 'react';
import {Modal, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import * as Progress from 'react-native-progress';
import LottieView from "lottie-react-native";

function UploadScreen({onDone, progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar color={colors.primary} progress={progress} width={200}/>
                ) : (<LottieView autoPlay={true} loop={false} source={require('../assets/animations/success.json')}
                                 style={styles.animation} onAnimationFinish={onDone}/>)
                }

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animation: {
        width: 200,
        height: 200,
    }
});

export default UploadScreen;