import React from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Album = ({ artist, title, thumbnail_image, image, url }) => (
  <Card>
    <CardSection>
      <View style={styles.imageContainer}>
        <Image
          style={styles.thumbnail}
          source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(url)}>
        Buy now!
      </Button>
    </CardSection>
  </Card>
);

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  image: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default Album;
