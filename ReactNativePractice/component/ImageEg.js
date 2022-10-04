import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ImageEg = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tinyLogo: {
    margin: 15,
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default ImageEg;
