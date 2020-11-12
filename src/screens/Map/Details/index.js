import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import uberx from '../../../assets/uberx.png';
import styles from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.typeTitle}>Popular</Text>
      <Text style={styles.typeDescription}>
        Viagens baratas para o dia a dia
      </Text>

      <Image source={uberx} style={styles.typeImage} />

      <Text style={styles.typeTitle}>UberX</Text>
      <Text style={styles.typeDescription}>R$ 6,00</Text>
      <TouchableOpacity style={styles.requestButton} onPress={() => {}}>
        <Text style={styles.requestButtonText}>SOLICITAR UBERX</Text>
      </TouchableOpacity>
    </View>
  );
};
