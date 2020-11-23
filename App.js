import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View
        style={{
          height:500,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 1 }} />
        <View>

        </View>
        <Text style={{textAlign:"center"}}>Hello World!</Text>
      </View>
     
  );
}

export default YourApp;