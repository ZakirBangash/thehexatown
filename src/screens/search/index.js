import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrimaryDark, PrimaryWhite} from '../../constants/colors';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  );
};

export default Search;

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
