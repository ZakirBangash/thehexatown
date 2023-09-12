import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {PrimaryDark, PrimaryWhite} from '../../constants/colors';

const Pill = ({text, isShowIcon}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {isShowIcon ? (
        <Entypo name="chevron-down" size={20} color={PrimaryWhite} />
      ) : null}
    </View>
  );
};

export default Pill;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: PrimaryDark,
    width: 110,
    borderRadius: 4,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  text: {color: PrimaryWhite},
});
