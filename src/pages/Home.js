import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {iller} from '../iller';
import {homeStyles} from './styles';

export const Home = (props) => {

  const renderData = ({item}) => {
    const myPress = () => props.navigation.navigate('District', {province: item.title});

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let mytext = capitalizeFirstLetter(item.title.toLowerCase());

    return (
      
        <TouchableOpacity
          onPress={myPress}
          underlayColor={false}
          style={homeStyles.button}
        >
          <Text style={homeStyles.text}>{mytext}</Text>
          <Icon name="angle-right" size={30} color="#900" style={{marginRight:10}}/>
        </TouchableOpacity>
      
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <FlatList
          data={iller}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
