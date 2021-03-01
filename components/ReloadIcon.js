import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {colors} from '../utils';

export default function ReloadIcon({load}) {
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={Platform === "ios" ? "ios-refresh" : "md-refresh"}
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 35,
      }
    }),
    right: 20,
  }
});
