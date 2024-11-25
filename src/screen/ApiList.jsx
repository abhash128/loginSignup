import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteData } from '../redux/slices/apiSlice';




const ApiList = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.api.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteData(id));
    };
    // const navigation = useNavigation();
    // const[data, setData] = useState([])
    // const getApiData = async ()=>{
    //     const url = "https://api.restful-api.dev/objects";
    //     let result = await fetch(url);
    //     result = await result.json();
    //     if(result){
    //         setData(result)
    //     }
    // }

    // const deleteUser = async (id) =>{
    //     const url = "https://api.restful-api.dev/objects";
    //     let result = await fetch( `${url}/${id}`,{
    //         method:'DELETE'
    //     });
    //     result = await result.json();
    //     if(result){
    //         console.warn("User Delete");
    //     }


    // }

    // useEffect(()=>{
    //     getApiData();
    // },[])

    
    
    const handleGoBack = () => {
        navigation.goBack();
      };



    return (
        <ScrollView contentContainerStyle= {styles.scrollContainer}>
        <View style={styles.container}>

            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Ionicons
                    name={"arrow-back-circle-sharp"}
                    color={colors.primary}
                    size={30}
                />
            </TouchableOpacity>

            <View style={styles.dataWrapper}>
                <View style ={{flex:1}}>
                    <Text>ID</Text>
                </View>
                <View style ={{flex:1}}>
                    <Text>Name</Text>
                </View>
                <View style ={{flex:1}}>
                    <Text>Operations</Text>
                </View>

            </View>

            {
                data.length?(
                data.map((item) => (<View key={item.id} style={styles.dataWrapper}>
                    <View style ={{flex:1}}>
                        <Text>{item.id}</Text>
                    </View>
                    <View style ={{flex:1}}>
                        <Text>{item.name}</Text>
                    </View>
                    <View style ={{flex:1}}>
                        <Button onPress={()=>handleDelete(item.id)} title='Delete'/>
                    </View>
                    <View style ={{flex:1}}>
                        <Button title='Update'/>
                    </View>

                </View>))
                 ): (
                    <Text style={styles.noDataText}>No data available</Text>
                  )
            }

        </View>
        </ScrollView>
    );
};

export default ApiList

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    dataWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'orange',
        margin:5,
        padding:8

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