import {StyleSheet, Text, Platform} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {PrimaryDark, PrimaryWhite} from '../../constants/colors';

const AppHeader = ({text}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="chevron-back-outline" size={20} color={PrimaryWhite} />
      <Text style={styles.text}>{text}</Text>
      <Entypo name="dots-three-horizontal" size={20} color={PrimaryWhite} />
    </SafeAreaView>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryDark,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        marginBottom: -20,
      },
      android: {
        marginBottom: 20,
      },
    }),
  },
  text: {
    color: PrimaryWhite,
  },
});
