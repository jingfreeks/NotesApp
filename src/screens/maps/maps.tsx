import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {UseHomeHooks} from '@/screens/home/hooks';
import {List} from './component';
import {maps} from './constant';
const Maps = () => {
  const {notes} = UseHomeHooks();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
      >
        {notes?.ids?.map((item: string,idx:number) => {
          return (
            <List key={idx} item={item}/>
          );
        })}

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
export default Maps;
