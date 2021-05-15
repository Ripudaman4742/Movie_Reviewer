import React from 'react';
import {Image, StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height / 6.5;

export default class ImageHeaderPaperScroll extends React.Component {
  render() {
    return (
      <>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
          }}
          style={[
            styles.headerImage,
            {
              height: Dimensions.get('window').height / height + 250,
            },
          ]}
        />
        <SafeAreaView>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
              }}
              style={[{height: 150, width: 120}]}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: Dimensions.get('window').width,
    shadowColor: 'black',
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  imageContainer: {
    marginTop: 120,
    marginLeft: 10,
    borderRadius:10,
    overflow:'hidden'
  },
});
