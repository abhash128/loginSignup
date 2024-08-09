import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';

const LogInScreen = () => {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons 
            name={"arrow-back-circle-sharp"} 
            color={colors.primary}  
            size={30} 
        />

      </TouchableOpacity>
    </View>
  )
}

export default LogInScreen

const styles = StyleSheet.create({})