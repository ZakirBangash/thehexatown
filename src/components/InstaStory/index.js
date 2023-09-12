import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {PrimaryWhite} from '../../constants/colors';
const InstaStory = ({url, text}) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: 'https://unsplash.it/400/400?image=3',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InstaStory;

const styles = StyleSheet.create({
  container: {flex: 0.5, alignItems: 'center', justifyContent: 'center'},
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    marginHorizontal: 10,
  },
  text: {
    color: PrimaryWhite,
    marginTop: 4,
  },
});
