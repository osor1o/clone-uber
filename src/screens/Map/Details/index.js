import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import currencyFormatter from 'currency-formatter';
import uberx from '../../../assets/uberx.png';
import styles from './styles';

export default ({minutes = 0}) => {
  const price = currencyFormatter.format(0.6 * minutes, {code: 'BRL'});

  return (
    <View style={styles.container}>
      <Text style={styles.typeTitle}>Popular</Text>
      <Text style={styles.typeDescription}>
        Viagens baratas para o dia a dia
      </Text>

      <Image source={uberx} style={styles.typeImage} />

      <Text style={styles.typeTitle}>UberX</Text>
      <Text style={styles.typeDescription}>{price}</Text>
      <TouchableOpacity style={styles.requestButton} onPress={() => {}}>
        <Text style={styles.requestButtonText}>SOLICITAR UBERX</Text>
      </TouchableOpacity>
    </View>
  );
};
