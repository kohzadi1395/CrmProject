/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Platform} from 'react-native';
import Login from "./src/components/Login";
import firebase from '@firebase/app'
//import '@firebase/auth'
type Props = {};
export default class App extends Component<Props> {
    componentWillMount() {
       // https://www.npmjs.com/package/firebase
        const config={
            apiKey: 'AIzaSyAP8Gayk3aM0RGS0m7MvvJdfPgzf_pCDyY',
            authDomain: 'crmlinkedin-39b61.firebaseapp.com',
            databaseURL: 'https://crmlinkedin-39b61.firebaseio.com',
            projectId: 'crmlinkedin-39b61',
            storageBucket: 'crmlinkedin-39b61.appspot.com',
            messagingSenderId: '321669961241'
        }
       firebase.initializeApp(config);
    }

    render() {
        return (
        // const  MyComponent = Platform.select({
        //     ios: () => <IosHome/>,
        //     android: () => <AndroidHome/>
        // })();
        //
        // return (
        //     <MyComponent/>
        // );
        // if (Platform.Version === 25) {
        //     console.log('Running on Nougat!');
        // }

        // const majorVersionIOS = parseInt(Platform.Version, 10);
        // if (majorVersionIOS <= 9) {
        //     console.log('Work around a change in behavior');
        // }



        <View style={styles.container}>
                <Login/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
