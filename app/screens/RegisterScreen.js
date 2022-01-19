import React, {useState} from 'react';
import Screen from "../components/Screen";
import {Image, StyleSheet} from "react-native";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import usersApi from "../api/users";
import AppErrorMessage from "../components/forms/AppErrorMessage";
import useApi from "../hooks/useApi";
import AppActivityIndicator from "../components/AppActivityIndicator";


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    name: Yup.string().required().min(4).label('Name'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen({navigation}) {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);

    const auth = useAuth();
    const [registerFailed, setRegisterFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async ({name, email, password}) => {
        const result = await registerApi.request({name, email, password});

        if (!result.ok) {
            setRegisterFailed(true);
            if (!result.data) {
                setErrorMessage(result.problem);
            }
            setErrorMessage(result.data.error);
            return;
        }
        setRegisterFailed(false);

        const loginResult = await loginApi.request(email, password);
        console.log(loginResult);
        if (!loginResult.ok) return navigation.navigate('Login');
        auth.logIn(loginResult.data);

    }

    return (
        <>
        <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
        <Screen style={styles.container}>
            <Image style={styles.logo} resizeMode='cover' source={require('../assets/logo-red.png')}/>
            <AppForm
                initialValues={{email: '', password: '', name: ''}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <AppErrorMessage error={errorMessage} visible={registerFailed}/>
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
                    autoCorrect={false}
                    icon='account'
                    name='name'
                    keyboardType='default'
                    textContentType='familyName'
                    placeholder='Name'
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

                <AppSubmitButton title='register'/>
            </AppForm>
        </Screen>
        </>
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


export default RegisterScreen;