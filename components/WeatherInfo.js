import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../utils';

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

export default function WeatherInfo({currentWeather}) {
  const {main, weather: [details], name} = currentWeather;

  const iconUrl = `https://openweathermap.org/img/wn/${details.icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{uri: iconUrl}} />
      <Text style={styles.textPrimary}>{main.temp}°</Text>
      <Text style={styles.weatherTextDescription}>{details.description}</Text>
      <Text style={styles.textSecondary}>{details.main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherTextDescription: {
    textTransform: 'capitalize',
    fontWeight: '700',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR
  },
  textSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: '500',
    marginTop: 10,
  }
})