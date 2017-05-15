import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App = () => (
  <View style={styles.container}>
    <Header>Albums</Header>
    <AlbumList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
