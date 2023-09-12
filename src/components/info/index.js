import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {PrimaryWhite} from '../../constants/colors';

const Info = ({text, fontWeight, color = PrimaryWhite}) => {
  return <Text style={styles.text(fontWeight, color)}>{text}</Text>;
};

export default Info;

const styles = StyleSheet.create({
  text: (fontWeight, color) => {
    return {color, fontWeight, marginVertical: 3};
  },
});
