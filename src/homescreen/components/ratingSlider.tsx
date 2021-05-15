import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

interface ratingData{
    rating:any
}


const RatingSlider = (props:ratingData) => {
    const [IMDB,setIMDB] = useState('N/A')
    const [RottenTotmato,setRottenTotmato] = useState('N/A')
    const [KRK,setKRK] = useState('N/A')

    useEffect(()=>{
        props.rating && setIMDB(props.rating.IMDB)
        props.rating && setRottenTotmato(props.rating.RottenTotmato)
        props.rating && setKRK(props.rating.KRK)

    },)
    
  const [newUser, setNewUser] = useState(false);
  return (
    <View style={styles.topNavigator}>
      <View
        style={{
          flex: 1,
          height: 100,
          width: 50,
          alignItems:'center',
        }}>
        <Text style={{textAlign: 'center',color:'white',fontSize:20}}>{IMDB}</Text>
        <Text style={{textAlign: 'center',color:'grey'}}>weight</Text>
      </View>
      <View style={{flex: 1, height: 100, width: 50, alignItems: 'center'}}>
      <Text style={{textAlign: 'center',color:'white',fontSize:20}}>{RottenTotmato}</Text>
        <Text style={{textAlign: 'center',color:'grey'}}>Vacination</Text>
      </View>
      <View style={{flex: 1, height: 100, width: 50, alignItems: 'center'}}>
      <Text style={{textAlign: 'center',color:'white',fontSize:20}}>{KRK}</Text>
        <Text style={{textAlign: 'center',color:'grey'}}>KRK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: 100,
  },
  topNavigator: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
});

export default RatingSlider;
