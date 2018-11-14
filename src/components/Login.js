/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import * as Alert from "react-native";
import Loader from "./Loader";


type Props = {};

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();


export default class Login extends Component<Props> {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };


    onButtonPress() {
        Alert.alert('onButtonPress', 'Clicked button !!!');
    }

    renderLoader() {
        if (this.state.loading) {
            return <Loader/>
        }
        else
            return (<LoginButton onPress={this.onButtonPress.bind}/>);
    }

    render() {

        const {
            fieldStyles
            , loginButtonArea
            , errorMessage
            , form
        } = styles;

        return (
            <View style={form}>
                <Text >Login or create an account</Text>
                <MKTextField text={this.state.email}
                             onTextChange={email => this.setState({email})}
                             textInputStyle={fieldStyles}
                             placeholder={'Email ...'}
                             tintColor={MKColor.Teal}
                />
                <MKTextField text={this.state.password}
                             onTextChange={password => this.setState({password})}
                             textInputStyle={fieldStyles}
                             placeholder={'Password ...'}
                             password={true}
                />
                <Text style={errorMessage}>
                    {this.state.error}</Text>
                <View style={loginButtonArea}>
                    {this.renderLoader()}
                </View>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
        backgroundColor: Platform.OS === 'android' ? '#ffffff' : '#dd3a44',
        // Platform.select({
        // ios: {
        //     backgroundColor: 'red',
        // },
        // android: {
        //     backgroundColor: 'blue',
        // }}),

        height: Platform.OS === 'ios' ? 200 : 100,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorMessage: {
        color: MKColor.Red,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
