import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrimaryDark, PrimaryWhite} from '../../constants/colors';

const Create = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create</Text>
    </View>
  );
};

export default Create;

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
