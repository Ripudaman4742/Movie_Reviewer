import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacityBase,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import Puppydetails from '../puppyDetailScreen/Puppydetails';
import ImageSlider from './components/ImageSlider';
import TopNavigator from './components/TopNavigator';
interface loginData {
  imageUrl?: string,
  title?: string,
  genre?: string,
  releaseDate?: string,
  length?: string,
  cast?: [],
  rating?: Number,
  images?: []
}

const HomePage = (props: loginData) => {
  const [newUser, setNewUser] = useState(false)
  return (
    <>
    {/* <Puppydetails /> */}
   <SafeAreaView>
      <View style={styles.bodyContainer}>
      <View >
      <TopNavigator />
      </View>
      <View style={{marginTop:100}} >
      <ImageSlider/>
      </View>
    </View>
   </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    
  },
});

export default HomePage;
