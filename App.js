import {createAppContainer,createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCIj1INed6puWp5Ez36V8D2HRU3iQoSzhk",
    authDomain: "socialapp-292d4.firebaseapp.com",
    databaseURL: "https://socialapp-292d4.firebaseio.com",
    projectId: "socialapp-292d4",
    storageBucket: "socialapp-292d4.appspot.com",
    messagingSenderId: "276781638537",
    appId: "1:276781638537:web:89cab1302175dcad46f758"
};

firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
    Home: HomeScreen
})

const AuthStack = createStackNavigator({
    Login: LoadingScreen,
    Register: RegisterScreen
})


export default createAppContainer(

    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App : AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);