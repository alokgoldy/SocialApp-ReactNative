import React from 'react';
import {View,StyleSheet,Text} from 'react-native';



export default class RegisterScreen extends React.Component{
    
    render()
    {
        return
        (
            <View style={styles.container}>
                <Text>register screen</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})