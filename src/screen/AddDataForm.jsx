// src/components/AddDataForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addData, fetchData } from '../redux/slices/apiSlice';
//import { addData, fetchData } from '..src/redux/slices/apiSlice';

const AddDataForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    year: '',
    price: '',
    model: '',
    size: '',
  });

  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addData(formData)).unwrap();
      Alert.alert('Success', 'Data added successfully!');
      setFormData({
        id: '',
        name: '',
        year: '',
        price: '',
        model: '',
        size: '',
      });
      dispatch(fetchData()); // Refresh the data list after adding new data
    } catch (error) {
      Alert.alert('Error', 'Failed to add data');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={formData.id}
        onChangeText={(text) => handleChange('id', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        value={formData.year}
        onChangeText={(text) => handleChange('year', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={formData.price}
        onChangeText={(text) => handleChange('price', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Model"
        value={formData.model}
        onChangeText={(text) => handleChange('model', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Size"
        value={formData.size}
        onChangeText={(text) => handleChange('size', text)}
      />
      <Button title="Add Data" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddDataForm;
