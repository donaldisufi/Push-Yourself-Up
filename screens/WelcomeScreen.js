import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

export default function LinksScreen() {
  return (
  <View style={styles.container}>
    <Text>
      WelcomeScreen
    </Text>
  </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
