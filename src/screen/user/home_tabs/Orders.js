// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Orders = () => {
//   return (
//     <View>
//       <Text>Orders</Text>
//     </View>
//   )
// }

// export default Orders

// const styles = StyleSheet.create({})




// Order.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOURS } from '../../../../database/Database';
//import { COLOURS } from '../../database/Database'; // Assuming you have colors and database setup

const Orders = ({navigation}) => {
  const [orders, setOrders] = useState([]);

  // Retrieve orders from AsyncStorage or Backend when the screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchOrders();
    });

    return unsubscribe;
  }, [navigation]);

  // Fetch orders from AsyncStorage
  const fetchOrders = async () => {
    let storedOrders = await AsyncStorage.getItem('orders');
    storedOrders = JSON.parse(storedOrders);
    if (storedOrders) {
      setOrders(storedOrders);
    } else {
      setOrders([]);
    }
  };

  // Render each order
  const renderOrderItem = (order, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('OrderDetail', { order })}
        style={{
          width: '100%',
          padding: 20,
          marginBottom: 10,
          backgroundColor: COLOURS.backgroundLight,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: COLOURS.black,
            }}>
            Order #{order.orderId}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: COLOURS.black,
              opacity: 0.5,
            }}>
            {order.date}
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          {order.items.map((item, itemIndex) => (
            <View
              key={itemIndex}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 14, color: COLOURS.black}}>
                {item.productName} (x{item.quantity})
              </Text>
              <Text style={{fontSize: 14, color: COLOURS.black}}>
                &#8377;{item.productPrice * item.quantity}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: COLOURS.black,
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: COLOURS.black,
            }}>
            &#8377;{order.total}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
        
      <ScrollView>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingTop: 16,
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            style={{
              fontSize: 18,
              color: COLOURS.backgroundDark,
              padding: 12,
              backgroundColor: COLOURS.backgroundLight,
              borderRadius: 12,
            }}
          />
        </TouchableOpacity>
          
        {/* <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: COLOURS.black,
            marginBottom: 20,
          }}>
          My Orders
        </Text>*/}
        </View> 
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.black,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Orders
        </Text>
        {orders.length > 0 ? (
          orders.map(renderOrderItem)
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              You have no orders yet.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Orders;
