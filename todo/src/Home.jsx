import React from "react";
import {View, Text, Pressable} from 'react-native';

export default function Home(props) {
    return(
        <View style= {{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Pressable title="Log In" onPress= {() => props.navigation.navigate('logIn')}
            />
        </View>
    )
}