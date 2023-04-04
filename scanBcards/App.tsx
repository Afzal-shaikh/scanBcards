/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Camera, CameraPermissionStatus , useCameraDevices} from 'react-native-vision-camera';

import {
  Button,
  StyleSheet,
  View
} from 'react-native';


function App(): JSX.Element {

  const devices = useCameraDevices('wide-angle-camera')
  const device = devices.back

  if (device == null) return <View />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
