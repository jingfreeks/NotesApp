import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const Notemaps = (props: any) => {
  const {route} = props;
  const {body, title, lat, long, _id} = route?.params || {};
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parseInt(lat),
          longitude: parseInt(long),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: parseInt(lat),
            longitude: parseInt(long),
          }}
          title={title}
          description={body}
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Notemaps;
