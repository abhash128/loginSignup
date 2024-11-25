// // OrderDetail.js
// import React from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import { COLOURS } from '../../database/Database';
// //import { COLOURS } from '../../database/Database'; // Assuming you have COLOURS setup

// const OrderDetail = ({ route, navigation }) => {
//   const { order } = route.params; // Order data passed from the Order.js

//   return (
//     <View
      
//       style={{
//         width: '100%',
//         height: '100%',
//         backgroundColor: COLOURS.white,
//         paddingHorizontal: 16,
//         paddingVertical: 20,
//       }}>
//       <ScrollView>
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: '500',
//             color: COLOURS.black,
//             marginBottom: 20,
//           }}>
//           Order #{order.orderId}
//         </Text>

//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: '500',
//             color: COLOURS.black,
//             marginBottom: 10,
//           }}>
//           Date: {order.date}
//         </Text>

//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: '500',
//             color: COLOURS.black,
//             marginBottom: 20,
//           }}>
//           Items:
//         </Text>

//         {order.items.map((item, index) => (
//           <View
//             key={index}
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               marginBottom: 10,
//             }}>
//             <Text style={{ fontSize: 14, color: COLOURS.black }}>
//               {item.productName} (x{item.quantity})
//             </Text>
//             <Text style={{ fontSize: 14, color: COLOURS.black }}>
//               &#8377;{item.productPrice * item.quantity}
//             </Text>
//           </View>
//         ))}

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginTop: 20,
//           }}>
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: '500',
//               color: COLOURS.black,
//             }}>
//             Total
//           </Text>
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: '500',
//               color: COLOURS.black,
//             }}>
//             &#8377;{order.total}
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default OrderDetail;





// OrderDetail.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOURS } from '../../database/Database';
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';

//import { COLOURS } from '../../database/Database'; // Assuming you have COLOURS and database setup

const OrderDetail = ({ route, navigation }) => {
  const { order } = route.params; // Order data passed from the Order.js

  const handleGoBack = () => {
    navigation.navigate("Orders")
  };

  // Render each product in the order with its image
  const renderOrderItem = (item, index) => {
    return (
      <View
        key={index}
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}>
          <Image
            source={item.productImage}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 14,
              maxWidth: '100%',
              color: COLOURS.black,
              fontWeight: '600',
              letterSpacing: 1,
            }}>
            {item.productName}
          </Text>
          <View
            style={{
              marginTop: 4,
              flexDirection: 'row',
              alignItems: 'center',
              opacity: 0.6,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                maxWidth: '85%',
                marginRight: 4,
              }}>
              &#8377;{item.productPrice} x {item.quantity}
            </Text>
            <Text>
              = &#8377;{item.productPrice * item.quantity}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        paddingHorizontal: 16,
        paddingVertical: 20,
      }}>
      <ScrollView>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons 
            name={"arrow-back-circle-sharp"} 
            color={colors.primary}  
            size={30} 
        />
      </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: COLOURS.black,
            marginBottom: 20,
          }}>
          Order #{order.orderId}
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: COLOURS.black,
            marginBottom: 10,
          }}>
          Date: {order.date}
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: COLOURS.black,
            marginBottom: 20,
          }}>
          Items:
        </Text>

        {order.items.map((item, index) => renderOrderItem(item, index))}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: COLOURS.black,
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: COLOURS.black,
            }}>
            &#8377;{order.total}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetail;
const styles = StyleSheet.create({
  backButtonWrapper:{
    height: 35,
  width: 35,
  backgroundColor: colors.gray,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center"
},
})

