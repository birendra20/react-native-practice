import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

const image = {uri: 'https://reactjs.org/logo-og.png'};
const ImageBackGroundEg = () => {
  return (
    <View>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>ImageBackGroundEg</Text>
      </ImageBackground> */}
      <Text>ImageBackGroundEg</Text>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
        }}
        style={{flex: 1, width: null, height: null}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Your Contents</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
// });

export default ImageBackGroundEg;
