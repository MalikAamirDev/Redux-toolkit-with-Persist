import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MyBackButton from '../components/MyBackButton';
import MyButton from '../components/MyButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  clearCart,
  removeFromCart,
} from '../redux/features/CartSlice';

const CartScreen = () => {
  // hooks
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const {cartData, totalAmount} = useSelector(state => state.cartItems);

  // functions
  const handleCheckout = () => {
    dispatch(clearCart());
    Alert.alert('Order Success', 'Your order place successfully', [
      {text: 'OK', onPress: () => navigate('Home')},
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.container}>
        <MyBackButton />
        <FlatList
          data={cartData}
          style={styles.flatlistStyle}
          renderItem={({item, index}) => {
            return (
              <View style={styles.cardBox} key={item.id}>
                <View style={styles.innerContainer}>
                  <Image source={{uri: item.thumbnail}} style={styles.img} />
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </View>
                <View style={styles.twoBtn}>
                  <Pressable
                    style={styles.btnBox}
                    onPress={() => dispatch(removeFromCart(item.id))}>
                    <Text style={styles.btn}>-</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.amount}>{item.quantity}</Text>
                  </Pressable>
                  <Pressable
                    style={styles.btnBox}
                    onPress={() => dispatch(addToCart(item))}>
                    <Text style={styles.btn}>+</Text>
                  </Pressable>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.totalAmount}>
          Total Amount:{'  '}
          <Text style={styles.totalAmountPrice}>{totalAmount}$</Text>
        </Text>

        <MyButton onPress={handleCheckout} title="Proceed to checkout" />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  flatlistStyle: {
    flex: 1,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    marginTop: 10,
  },
  cardBox: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingRight: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  footer: {
    width: '55%',
  },
  twoBtn: {
    gap: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnBox: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  btn: {
    fontSize: 25,
  },
  amount: {
    fontSize: 16,
  },
  bottom: {
    flex: 0.2,
    gap: 10,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
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
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmountPrice: {
    fontSize: 22,
  },
});
