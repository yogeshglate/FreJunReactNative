import React, { useState } from 'react';
import { NativeModules, Text, TouchableOpacity, View } from 'react-native';
import { appConstants } from '../../constants';
import { styles } from './BridgingStyles';

const Bridging = () => {
  const [deviceId, setDeviceId] = useState('');
  const { DeviceIDModule } = NativeModules;

  const getDeviceId = () => {
    DeviceIDModule.getPhoneID()
      .then((id: string) => {
        setDeviceId(`Device ID : ${id}`);
      })
      .catch((err: any) => {
        __DEV__ && console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getDeviceId} style={styles.button}>
        <Text style={styles.buttonText}>{appConstants.getDeviceId}</Text>
      </TouchableOpacity>
      {deviceId && <Text>{deviceId}</Text>}
    </View>
  );
};

export default Bridging;
