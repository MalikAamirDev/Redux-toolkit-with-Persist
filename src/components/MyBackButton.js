import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../assets/BackIcon';

const MyBackButton = () => {
  // hooks
  const {goBack} = useNavigation();
  return (
    <Pressable onPress={goBack} style={styles.box}>
      <BackIcon width={30} height={30} />
    </Pressable>
  );
};

export default MyBackButton;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'lightcoral',
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
