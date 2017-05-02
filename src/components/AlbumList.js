import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const renderAlbums = (albums) => albums.map((album) => {
  const { artist, title } = album;

  return (
    <View key={`${artist}|${title}`}>
      <Text>{artist}</Text>
      <Text>{title}</Text>
    </View>
  );
});

class AlbumList extends Component {
  state = { albums: [] }

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }));
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>List</Text>
        {renderAlbums(this.state.albums)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});

export default AlbumList;
