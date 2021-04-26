import React,{useEffect,useState} from "react";
import {SafeAreaView,View,Text,FlatList, TouchableOpacity} from "react-native";
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';
import {homeStyles} from "./styles"

export const District = (props)=>{
    const {province} = props.route.params
    const [datalist,setDatalist] = useState([])
    
    const fetchData = ()=>{
        axios.get("https://turkey-pharmacy.p.rapidapi.com/districtList",{
            params:{
                il:province
            },
            headers:{
                'x-rapidapi-key': '30db95e182msh3c509f9ed359404p1e9f17jsn25816da7e3fb',
                'x-rapidapi-host': 'turkey-pharmacy.p.rapidapi.com'
            }
        }).then((response)=>setDatalist(response.data.result))
    }
    
    const renderData = ({item}) => {

        const myPress = () => {
            props.navigation.navigate("Pharmancy",{district:item.text,province:province})
        }
        
        return(
            <TouchableOpacity onPress={myPress} underlayColor={false} style={homeStyles.button}>
                <Text style={homeStyles.text}>{item.text}</Text>
                <Icon name="angle-right" size={30} color="#900" style={{marginRight:10}}/>
            </TouchableOpacity>
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