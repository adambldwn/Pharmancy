import React from "react";
import {SafeAreaView,View,Text} from "react-native";

export const District = (props)=>{
    const {province} = props.route.params
    

    return(
        <SafeAreaView>
            <View>
                <Text>District</Text>
            </View>
        </SafeAreaView>
    )
}