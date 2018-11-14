/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';


type Props = {};
const Loader = ({size}) => {
    const {
        loader
    } = styles;
    return (
        <View style={loader}>
            <ActivityIndicator size={size || 'small'}/>
        </View>
    );
}
export default Loader;
// export default class Loader extends Component<Props> {
//
//     state = {
//         email: '',
//         password: '',
//         error: ''
//     };
//
//
//     onButtonPress() {
//         console.log('Clicked button !!!');
//     }
//
//     render() {
//
//
//         const {
//             fieldStyles
//             , loginButtonArea
//             , errorMessage
//             , container
//             , welcome
//         } = styles;
//
//         return (
//             <View style={container}>
//                 <Text style={welcome}>Welcome to CRM!</Text>
//                 <MKTextField text={this.state.email}
//                              onTextChange={email => this.setState({email})}
//                              textInputStyle={fieldStyles}
//                              placeholder={'Email ...'}
//                              tintColor={MKColor.Teal}
//                 />
//                 <MKTextField text={this.state.password}
//                              onTextChange={password => this.setState({password})}
//                              textInputStyle={fieldStyles}
//                              placeholder={'Password ...'}
//                              password={true}
//                 />
//                 <Text style={errorMessage}>{this.state.error}</Text>
//                 <View style={loginButtonArea}>
//                     <LoginButton onPress={this.onButtonPress.bind}/>
//                 </View>
//
//             </View>
//         );
//     }
// }
//
const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});
