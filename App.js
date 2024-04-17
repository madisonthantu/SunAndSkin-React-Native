import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import { useFonts } from 'expo-font';


// /* 
export const DisplayLogo = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/images/logo/sun.png')}
      />
      <Image
        style={styles.logo}
        source={require('./assets/images/logo/skincare.png')}
      />
    </View>
  );
};
// */
const currDate = new Date();
const currDateStr = `${currDate.getDay()}, ${currDate.getMonth()} ${currDate.getDate()}, ${currDate.getFullYear()}`;
const App = () => {
  const [fontsLoaded] = useFonts({
    'Pacifico': require('./assets/fonts/Pacifico.ttf'),
  });
  
  return (
    <View style={styles.container}>
      <Text> {currDateStr} </Text>
      <DisplayLogo />
      <Text style={styles.title}>Sun & Skin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ff2e55',
    justifyContent: 'center', alignItems: 'center'
  },
  imageContainer: {
    paddingTop: 25,
  },
  title: {
    marginTop: 0,
    paddingVertical: 8,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Pacifico'
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  logo: {
    width: 66,
    height: 75,
  },
});

export default App;