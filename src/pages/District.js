import React,{useEffect,useState} from "react";
import {SafeAreaView,View,Text,FlatList,TouchableHighlight} from "react-native";
import axios from "axios";


export const District = (props)=>{
    const {province} = props.route.params
    const [datalist,setDatalist] = useState([])
    
    const fetchData = ()=>{
        axios.get("https://turkey-pharmacy.p.rapidapi.com/districtList",{
            params:{
                il:province
            },
            headers:{
                'x-rapidapi-key': '0757ad8163msha2440650db3dcf9p1afca5jsn047fb5354ce9',
                'x-rapidapi-host': 'turkey-pharmacy.p.rapidapi.com'
            }
        }).then((response)=>setDatalist(response.data.result))

        
    }
    
    const renderData = ({item}) => {

        const myPress = () => {
            props.navigation.navigate("Pharmancy",{district:item.text,province:province})
        }
        
        return(
            <TouchableHighlight onPress={myPress} underlayColor={false}>
                <Text>{item.text}</Text>
            </TouchableHighlight>
        )
    }

    
    
    useEffect(()=>{
        fetchData()
    },[])
    
    
    return(
        <SafeAreaView>
            <View>
                <FlatList
                    data={datalist}
                    renderItem={renderData}
                    keyExtractor={()=> Math.random()}
                />
            </View>
        </SafeAreaView>
    )
}