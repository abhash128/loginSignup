import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/slices/apiSlice'; // Import the addObject thunk


const AddObject = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [name,setName]=useState('');
    const [year,setYear]=useState('');
    const [price,setPrice]=useState('');
    const [modal,setModal]=useState('');
    const [size,setSize]=useState('');

    const saveData =async ()=>{

      const newObject = { id, name, year, price, modal, size };
      
        console.log(id);
        console.log(name);
        console.log(year);
        console.log(price);
        console.log(modal);
        console.log(size);
        const url ="https://api.restful-api.dev/objects";
        let result = await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name,year,price,modal,size})
        });
        result = await result.json();
        if (result){
            console.warn("Data added")
        }

    }

    const handleGoBack = () => {
        navigation.goBack();
      };


  return (

    <View>

      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons 
            name={"arrow-back-circle-sharp"} 
            color={colors.primary}  
            size={30} 
        />
      </TouchableOpacity>

      <Text style={{fontSize:30} }>AddObject</Text>

      <TextInput
        style={styles.input}
        value={id}
        onChangeText={text => setId(text)}
        placeholder="ID"
        placeholderTextColor={colors.blue}
      />

      <TextInput style={styles.input} 
        value={name}
        onChangeText={(text)=>setName(text)}
        placeholder='Enter Name'
        placeholderTextColor={colors.secondary}
      />

      <TextInput style={styles.input} 
        value={year}
        onChangeText={(text)=>setYear(text)}
        placeholder='Enter Year'
        placeholderTextColor={colors.secondary}
      />

      <TextInput style={styles.input} 
        value={price}
        onChangeText={(text)=>setPrice(text)}
        placeholder='Enter Price'
        placeholderTextColor={colors.secondary}
      />

      <TextInput style={styles.input} 
        value={modal}
        onChangeText={(text)=>setModal(text)}
        placeholder='Enter CPU Model'
        placeholderTextColor={colors.secondary}
      />

      <TextInput style={styles.input} 
        value={size}
        onChangeText={(text)=>setSize(text)}
        placeholder='Enter Hard disk size'
        placeholderTextColor={colors.secondary}
      />

      <View style={styles.button}>
            <Button
                title="Add Object"
                onPress={saveData}
            />
      </View>
    </View>
  )
}

export default AddObject

const styles = StyleSheet.create({
    input:{
        borderColor:"skyblue",
        borderWidth:1,
        margin:20
    },

    button:{
        width: 80,
        alignContent: "center",
        alignItems:"center",
        marginLeft:100
    },

    backButtonWrapper: {
        height: 35,
        width: 35,
        backgroundColor: colors.gray,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      },
})