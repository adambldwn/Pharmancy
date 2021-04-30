import axios from 'axios';
import React, {useState, useEffect,useRef} from 'react';
import {SafeAreaView, View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView,{ Marker }  from 'react-native-maps';
import { showLocation } from 'react-native-map-link'
import Geolocation from '@react-native-community/geolocation';

import {pharmancyStyles} from './styles';

export const Pharmancy = props => {
  const {district, province} = props.route.params;
  const [dataList, setDataList] = useState([]);
  const [lat,setLat] = useState("");
  const [long,setLong] = useState("");

  const mapRef = useRef(null);

  const fetchData = () => {
    axios
      .get('https://turkey-pharmacy.p.rapidapi.com/dutyPharmacy', {
        params: {
          il: province,
          ilce: district,
        },
        headers: {
          'x-rapidapi-key':
            '142631cdecmshc630b70f204e7c7p18b1a9jsnfcfdbfa731e4',
          'x-rapidapi-host': 'turkey-pharmacy.p.rapidapi.com',
        },
      }).then((res)=>{
        setDataList(res.data.result[0])
        const arr = res.data.result[0].loc.split(",")
        setLat(parseFloat(arr[0]))
        setLong(parseFloat(arr[1]))

        // console.log(parseFloat(arr[0]))
        // console.log(parseFloat(arr[1]))

        mapRef.current.fitToCoordinates([
          {
            latitude: parseFloat(arr[0]),
            longitude: parseFloat(arr[1])
          }
        ])
      })
    };
    
    const markerPress = () => {
      Geolocation.getCurrentPosition((info) => {
      
      showLocation({
        latitude: lat,
        longitude: long,
        sourceLatitude: info.coords.latitude,
        sourceLongitude: info.coords.longitude,
      })
      });
      
    }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View style={pharmancyStyles.container}>
        <Text style={pharmancyStyles.title}>{dataList.name}</Text>
        <View style={[pharmancyStyles.subContainer, {marginBottom: 5}]}>
          <Icon
            name="phone"
            size={20}
            color="green"
            style={pharmancyStyles.iconStyle}
          />
          <Text style={{fontSize: 15}}>{dataList.phone}</Text>
        </View>
        <View style={pharmancyStyles.subContainer}>
          <Icon
            name="map-marker"
            size={20}
            color="blue"
            style={[pharmancyStyles.iconStyle, {paddingLeft: 3}]}
          />
          <Text style={{fontSize: 15}}>{dataList.address}</Text>
        </View>
      </View>

      <View>
       { lat && long ? <MapView
          ref={mapRef}
          style={{height: 600,margin:5}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            title={dataList.name}
            coordinate={{
              latitude: lat,
              longitude: long
            }}
            onPress={markerPress}
          />

        </MapView> : <ActivityIndicator size="large" color="#6d4c41"/>}
      </View>
     
    </SafeAreaView>
  );
};

// openMap({ 
//   latitude: 40.93740999, 
//   longitude: 38.22554196,
//   provider: 'apple',
//   end: dataList.loc,
//   // navigate_mode: 'navigate',
// })