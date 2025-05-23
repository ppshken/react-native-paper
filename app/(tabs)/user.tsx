import React from 'react';
import { Text, View } from 'react-native';

export default function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 22, color: '#0a7ea4', fontWeight: 'bold' }}>User Page</Text>
    </View>
  );
}