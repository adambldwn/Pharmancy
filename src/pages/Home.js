import React from "react";
import {SafeAreaView,View,Text,FlatList,TouchableHighlight} from "react-native";
import {iller} from "../iller"

export const Home = (props)=>{
    
    
    
    
    const renderData = ({item}) => {

        const myPress = () => props.navigation.navigate("District",{province: item.title})

        return(
            <TouchableHighlight onPress={myPress} underlayColor={false}>
                <Text>{item.title}</Text>
            </TouchableHighlight>
        )
    }

    return(
        <SafeAreaView>
            <View>
                <FlatList
                    data={iller}
                    renderItem={renderData}
                    keyExtractor={(item)=>item.id}
                />
            </View>
        </SafeAreaView>
    )
}