import MapboxGL from '@react-native-mapbox-gl/maps';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';

MapboxGL.setAccessToken('pk.eyJ1Ijoic3RyZXV0YSIsImEiOiJja2c4OWo3emcwYmFxMndzNXFpZXU4Y3A1In0.YWRAPmIkJj6ry8S3gmna6w');

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
