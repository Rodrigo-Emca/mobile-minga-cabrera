import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MangaCard(props) {
  console.log(props)
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('MangaDetail', { manga: props });
  };

  return (
    <View style={styles.cardContainer} onPress={handleNavigate}>
      <View style={[styles.spanCard, { backgroundColor: props.category_.name.includes('shonen') ? 'red' : props.category_.name.includes('comic') ? 'orange' : props.category_.name.includes('shojo') ? 'green' : props.category_.name.includes('seinen') ? 'purple' : '' }]}></View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title_}</Text>
        <Text style={styles.category}>{props.category_.name}</Text>
        <View style={styles.btnCont}>
            <Text style={styles.btnTexto}>
                Read
            </Text>
        </View>
      </View>
      <Image style={styles.img} source={{ uri: props.photo }} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '80%'
  },
  spanCard: {
    width: 15,
    height: 200,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 10
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  category: {
    fontSize: 18
  },
  img: {
    width: 150,
    height: 200
  },
  btnCont:{
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 60,
    backgroundColor: '#F9A8D4',
    borderRadius: 5000,
},
  btnTexto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 500,
},
});

