import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export default function MangaCard(props) {
  console.log(props)
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('MangaDetail', { manga: props });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleNavigate}>
      <View style={[styles.spanCard, { backgroundColor: props.category_.name.includes('shonen') ? 'red' : props.category_.name.includes('comic') ? 'orange' : props.category_.name.includes('shojo') ? 'green' : props.category_.name.includes('seinen') ? 'purple' : '' }]}></View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title_}</Text>
        <Text style={styles.category}>{props.category_.name}</Text>
      </View>
      <Image style={styles.img} source={{ uri: props.photo }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    width: '80%'
  },
  spanCard: {
    width: 20,
    height: 200,
    borderRadius: 50,
    marginRight: 10
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  category: {
    fontSize: 16
  },
  img: {
    width: 100,
    height: 150
  }
});

