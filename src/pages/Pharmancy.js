import axios from 'axios';
import React, {useState, useEffect,useRef} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView,{ Marker }  from 'react-native-maps';

import {pharmancyStyles} from './styles';

export const Pharmancy = props => {
  const {district, province} = props.route.params;
  const [dataList, setDataList] = useState([]);
  const [position,setPosition] = useState([]);

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
        return res.data.result[0]
      }).then((res)=>{
        // const arr = dataList.loc.split(",")
        console.log(res)
      })
      

      mapRef.current.fitToCoordinates([
        {
          latitude: 40.934425,
          longitude: 38.213976
        }
      ])
  };

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
        <MapView
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
            coordinate={{
              latitude: 40.934425,
              longitude: 38.213976
            }}
          />
        </MapView>
      </View>
     
    </SafeAreaView>
  );
};
