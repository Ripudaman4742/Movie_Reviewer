import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import ImageHeaderPaperScroll from './components/ImageHeader';
const {width: screenWidth} = Dimensions.get('window');


const Puppydetails = (props:any)=> {
  return (
    <ImageHeaderPaperScroll />
  )
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth + 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {width: -15, height: 20},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
  subTitle: {
    textAlign: 'center',
  },
  bottomButton: {
      borderWidth:2,
      borderColor:'white',
      borderRadius:20,
      width:150,
      padding:10,
      marginTop:20
  }
});

export default Puppydetails
