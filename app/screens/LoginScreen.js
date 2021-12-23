import React from 'react';
import Screen from "../components/Screen";
import {Image, StyleSheet} from 'react-native';
import * as Yup from "yup";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} resizeMode='cover' source={require('../assets/logo-red.png')}/>
            <AppForm
                initialValues={{email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    textContentType='emailAddress'
                    placeholder='Email'
                />

                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    textContentType='password'
                    placeholder='Password'
                    secureTextEntry
                />

                <AppSubmitButton title='login'/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 30
    },
});

export default LoginScreen;