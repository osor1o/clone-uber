import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export default ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
