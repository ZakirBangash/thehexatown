import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrimaryWhite} from '../../constants/colors';

const Stats = ({number, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text('900')}>{number}</Text>
      <Text style={styles.text('600')}>{title}</Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: fontWeight => {
    return {
      color: PrimaryWhite,
      fontWeight,
    };
  },
});
