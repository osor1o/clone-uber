import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import BackImage from '../../../assets/back.png';
import styles from './styles';

export default ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
      <Image source={BackImage} style={styles.image} />
    </TouchableOpacity>
  );
};
