import React from 'react';
import {View,StyleSheet,Text} from 'react-native';



export default class LoadingScreen extends React.Component{
    
    render()
    {
        return
        (
            <View style={styles.container}>
                <Text>loading screen</Text>
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