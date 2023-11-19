import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../redux/features/ProductsSlice';

const Home = () => {
  // hooks
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {products, isSuccess} = useSelector(state => state.products);
  console.log('🚀 ~ file: Home.js:12 ~ Home ~ products:', products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products?.products}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => navigate('SingleProduct', {Product: item})}
              style={styles.cardBox}
              key={item.id}>
              <Image source={{uri: item.thumbnail}} style={styles.img} />
              <View style={styles.footer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    marginTop: 10,
  },
  cardBox: {
    marginBottom: 30,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
