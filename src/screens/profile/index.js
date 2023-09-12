import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import InstaStory from '../../components/InstaStory';
import AppHeader from '../../components/appHeader';
import Info from '../../components/info';
import Pill from '../../components/pill';
import ProfilePic from '../../components/profilePic';
import Stats from '../../components/stats';
import MyTabs from '../../navigation/TabsNavigation';
import {PrimaryDark, PrimaryWhite, SecondryWhite} from '../../constants/colors';
import {PROFILE} from '../../constants/constants';

const Profile = () => {
  return (
    <View style={styles.container}>
      <AppHeader text={PROFILE.inDarkMode} />
      <View style={styles.myInfoContainer}>
        <ProfilePic />
        <View style={styles.statsContainer}>
          <Stats number={125} title={PROFILE.posts} />
          <Stats number={'20K'} title={PROFILE.followers} />
          <Stats number={22} title={PROFILE.following} />
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Info text={PROFILE.inDarkMode} fontWeight="800" />
        <Info text={PROFILE.AppPage} fontWeight="600" color={SecondryWhite} />
        <Info text={PROFILE.officialAccount} fontWeight="700" />
        <Info text={PROFILE.officialAccount} fontWeight="700" />
        <Info text={PROFILE.website} fontWeight="700" />
        <Text style={styles.textContainer}>
          followed by
          <Text style={styles.followerText}>zakir, ashar, and 15 others</Text>
        </Text>
      </View>
      <View style={styles.pillContainer}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Pill isShowIcon={true} text={PROFILE.followers} />
          <Pill isShowIcon={false} text={PROFILE.message} />
          <Pill isShowIcon={false} text={PROFILE.contact} />
          <Pill isShowIcon={true} text="" />
        </ScrollView>
      </View>

      <View style={styles.instaStoryContainer}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.contentContainerStyle}
          style={styles.scrollView}>
          <InstaStory text="News" />
          <InstaStory text="zakir" />
          <InstaStory text="Laiba" />
          <InstaStory text="shahzain" />
          <InstaStory text="zohan" />
        </ScrollView>
      </View>
      <MyTabs />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  myInfoContainer: {
    flexDirection: 'row',
    backgroundColor: PrimaryDark,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: PrimaryDark,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 20,
    paddingRight: 40,
  },
  bioContainer: {
    padding: 20,
  },
  textContainer: {color: PrimaryWhite, fontWeight: '700', marginVertical: 3},
  followerText: {color: PrimaryWhite, fontWeight: '900', marginVertical: 3},
  pillContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
  },
  scrollView: {flex: 1, flexDirection: 'row'},
  instaStoryContainer: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  contentContainerStyle: {paddingHorizontal: 20},
});
