import { Alert } from 'react-native';

const appAlert = (title, message, rightBtn, onPressRight, leftBtn, onPressLeft, cancelable = true) => {

    Alert.alert(
        title,
        message,
        [
          {text: leftBtn, onPress: onPressLeft, style: 'cancel'},
          {text: 'OK', onPress: onPressRight},
        ],
        { cancelable }
      )


    export default {
        appAlert,
    }
}