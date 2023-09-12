import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrimaryDark, PrimaryWhite} from '../../constants/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: PrimaryWhite,
  },
});
