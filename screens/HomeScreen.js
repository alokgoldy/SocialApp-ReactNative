import React from 'react';
import {View,StyleSheet,Text} from 'react-native';



export default class HomeScreen extends React.Component{
    
    render()
    {
        return
        (
            <View style={styles.container}>
                <Text>home screen</Text>
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