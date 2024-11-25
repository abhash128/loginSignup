// src/components/ApiDataDisplay.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchData } from './slices/apiSlice';
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Button, Alert } from 'react-native';
import { fetchData, deleteData } from '../redux/slices/apiSlice';

const ApiDataDisplay = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("Deleting item with ID:", id); // Add this line for debugging
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => dispatch(deleteData(id)) }
      ]
    );
  };

  if (status === 'loading') {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.centered}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Button
            title="Delete"
            color="red"
            onPress={() => handleDelete(item.id)}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ApiDataDisplay;
