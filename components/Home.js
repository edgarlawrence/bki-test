import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddFiles from '../components/Add';
import ViewFilesss from '../components/ViewFiles';

const Home = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={require('../images/minimalist-background-mobile.png')} style={styles.image}>
    <TouchableOpacity 
        style={styles.opacities}
        onPress={() => navigation.navigate('AddFiles')}>
    <Image source={require('../images/add.png')} 
    style={styles.images}
     />
     <Text
     style={styles.text}
     > Add </Text>
    </TouchableOpacity>

    <TouchableOpacity 
      onPress={() => navigation.navigate('ViewFilesss')}
      style={styles.opacities}>
      <Image source={require('../images/open-book.png')}
      style={styles.images2}
     />
     <Text
     style={styles.text2}
     > View Data </Text>
    </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "row"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  },
  images: {
    height: 200,
    width: 200
  },
  images2: {
    height: 200,
    width: 200,
    marginTop: 25
  },
  opacities: {
      alignItems: "center"
  },
  text: {
      fontSize: 20,
      fontWeight: "bold",
      paddingTop: 20,
      paddingBottom: 20
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20
}
});

export default Home;