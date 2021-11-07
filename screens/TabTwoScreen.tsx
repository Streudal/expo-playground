import MapboxGL from '@react-native-mapbox-gl/maps';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';

const token = process.env.MAPBOX_TOKEN ?? null;
MapboxGL.setAccessToken(token);

export default function TabTwoScreen() {
  return (
    <View style={styles.page}>
      <MapboxGL.MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  map: {
    flex: 1
  }
});
