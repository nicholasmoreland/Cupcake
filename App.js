import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMethod='cover' style={styles.image}>
        <Text style={styles.textRegular}>
          Welcome to, <Text style={styles.textCupcake}>Cupcake</Text>
        </Text>
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}