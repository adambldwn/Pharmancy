import axios from "axios";
import React,{useState,useEffect} from "react";
import {SafeAreaView,View,Text} from "react-native";

export const Pharmancy = (props)=>{
    const {district,province} = props.route.params
    const [data,setData] = useState([])
console.log("province",province)
console.log("district",district)
    const fetchData = () =>{
        axios.get("https://turkey-pharmacy.p.rapidapi.com/dutyPharmacy",{
            params:{
                il: province,
                ilce: district
            },
            headers:{
                'x-rapidapi-key': '0757ad8163msha2440650db3dcf9p1afca5jsn047fb5354ce9',
                'x-rapidapi-host': 'turkey-pharmacy.p.rapidapi.com'
            }
        }).then((res)=>console.log(res))
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <SafeAreaView>
            <View>
                <Text>Pharmancy</Text>
            </View>
        </SafeAreaView>
    )
}