import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../utils';
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

export default function WeatherDetails({currentWeather, unitsSystem}) {
  const {main, wind} = currentWeather;
  const windSpeed = unitsSystem === 'metric' ? `${Math.round(wind.speed)} m/s` : `${Math.round(wind.speed)} miles/h`;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            ...styles.weatherDetailsRow,
            borderRightWidth: 1,
            borderRightColor: colors.BORDER_COLOR
          }}
        >
          <FontAwesome5 name="temperature-low" size={25} color={colors.PRIMARY_COLOR} />
          <View style={styles.weatherDetailsItems}>
            <Text>Se siente:</Text>
            <Text style={styles.textSecondary}>{main.feels_like}°</Text>
          </View>
        </View>

        <View
          style={{
            ...styles.weatherDetailsBox,
            ...styles.weatherDetailsRow,
          }}
        >
          <MaterialCommunityIcons name="water" size={30} color={colors.PRIMARY_COLOR} />
          <View style={styles.weatherDetailsItems}>
            <Text>Humedad:</Text>
            <Text style={styles.textSecondary}>{main.humidity}%</Text>
          </View>
        </View>
      </View>
      <View style={{...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: colors.BORDER_COLOR }}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            ...styles.weatherDetailsRow,
            borderRightWidth: 1,
            borderRightColor: colors.BORDER_COLOR
          }}
        >
          <MaterialCommunityIcons name="weather-windy" size={25} color={colors.PRIMARY_COLOR} />
          <View style={styles.weatherDetailsItems}>
            <Text>Velocidad viento:</Text>
            <Text style={styles.textSecondary}>{windSpeed}</Text>
          </View>
        </View>

        <View
          style={{
            ...styles.weatherDetailsBox,
            ...styles.weatherDetailsRow,
          }}
        >
          <MaterialCommunityIcons name="speedometer" size={30} color={colors.PRIMARY_COLOR} />
          <View style={styles.weatherDetailsItems}>
            <Text>Presión:</Text>
            <Text style={styles.textSecondary}>{main.pressure} hPa</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherDetails: {
    margin: 20,
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textSecondary: {
    fontSize: 15,
    color: colors.SECONDARY_COLOR,
    fontWeight: '700',
    margin: 7,
  }
})