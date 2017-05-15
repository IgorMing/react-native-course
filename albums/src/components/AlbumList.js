import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

import Album from './Album';

const renderAlbums = (albums) => albums.map((album) =>
  <Album key={album.title} {...album} />
);

export default class AlbumList extends Component {
  state = { albums: [] }

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }));
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        {renderAlbums(this.state.albums)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});
