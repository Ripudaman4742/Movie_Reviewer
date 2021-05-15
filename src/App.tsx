/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import HomePage from './homescreen/HomePage';

const App = () => {
  return (
    <LinearGradient
      colors={['#77acf1', '#233e8b']}
      style={styles.LinearGradient}
    >
      
        <HomePage />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  LinearGradient: {
    height: '100%',
  }
});

export default App;
