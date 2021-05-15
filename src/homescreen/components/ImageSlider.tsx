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
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import RatingSlider from './ratingSlider';
const {width: screenWidth} = Dimensions.get('window');

const data = [
  {
    thumbnail:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
    title: 'Labrador',
    genre: 'Golder',
    length: '2 weeks',
    rating: {
      IMDB: `7 kg`,
      RottenTotmato: 'Done',
      KRK: '79%',
    },
  },
  {
    thumbnail:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
    title: 'Rotwiller',
    genre: 'Fantasy / Horror',
    length: '2 hours',
  },
  {
    thumbnail:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
    title: 'Golde Retriver',
    genre: 'comedy',
    length: '2 hours',
  },
];

interface itemInterface {
  thumbnail: string;
  title: string;
  rating: any;
}

export default class ImageSlider extends Component {
  _renderItem({item: item}, parallaxProps: any) {
    return (
      <>
        <View style={styles.item}>
          <ParallaxImage
            onClick={() => {
              Alert('hi');
            }}
            source={{uri: item.thumbnail}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0}
            {...parallaxProps}
          />
        </View>
        <View>
          <Text style={[styles.title, {color: 'white'}]} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={[styles.subTitle, {color: 'grey'}]}>
            {item.genre} . {item.length}
          </Text>
          <View style={{height: 10}}>
            <RatingSlider rating={item.rating} />
          </View>
        </View>
        <View
          style={{
            position: 'relative',
            marginTop: 50,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={()=>{
                console.log('press',item)
            }}
            style={styles.bottomButton}
          >
            <Text style={{textAlign: 'center',alignItems:'center',color:'white'}}>More Details</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  render() {
    return (
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={data}
        renderItem={this._renderItem}
        hasParallaxImages={true}
      />
    );
  }
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
