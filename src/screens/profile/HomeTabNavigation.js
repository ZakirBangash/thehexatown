import React, {useCallback} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {GreyColor} from '../../constants/colors';

const data = [
  {id: 1, url: 'https://unsplash.it/400/400?image=1'},
  {id: 2, url: 'https://unsplash.it/400/400?image=2'},
  {id: 3, url: 'https://unsplash.it/400/400?image=3'},
  {id: 4, url: 'https://unsplash.it/400/400?image=4'},
  {id: 5, url: 'https://unsplash.it/400/400?image=5'},
  {id: 6, url: 'https://unsplash.it/400/400?image=6'},
  {id: 7, url: 'https://unsplash.it/400/400?image=6'},
  {id: 8, url: 'https://unsplash.it/400/400?image=6'},
  {id: 9, url: 'https://unsplash.it/400/400?image=6'},
  {id: 10, url: 'https://unsplash.it/400/400?image=6'},
];
const HomeTabNavigation = ({navigation, route}) => {
  const keyExtractor = useCallback(r => r.id, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.imgContainer}>
        <FastImage
          source={{
            uri: item.url,
          }}
          style={styles.img}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={3}
      />
    </View>
  );
};

export default HomeTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GreyColor,
  },
  imgContainer: {
    width: Dimensions.get('window').width / 2 - 60,
    height: 100,
    borderWidth: 1,
    borderColor: GreyColor,
  },
  img: {width: '100%', height: '100%'},
});
