import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../redux/slices/userSlice';
//import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';

const GetData = ({navigation}) => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector(state => state.users);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [localUsers, setLocalUsers] = useState(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setLocalUsers(users);
  }, [users]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const toggleUserDetails = userId => {
    setSelectedUserId(prevUserId => (prevUserId === userId ? null : userId));
  };

  const showInnerData = data => {
    return Object.entries(data).map(([key, value]) => (
      <View key={key} style={styles.detailItem}>
        <Text style={styles.detailText}>
          {key}: {value?.toString() ?? 'Not Defined'}
        </Text>
      </View>
    ));
  };

  const addNewUser = newUser => {
    setLocalUsers([...localUsers, newUser]);
  };

  const deleteUser = userId => {
    setLocalUsers(localUsers.filter(user => user.id !== userId));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get User Data - {localUsers.length}</Text>
      <View>
        {localUsers.map(item => (
          <View key={item.id} style={styles.userContainer}>
            <View style={styles.userInfo}>
              <Text
                style={styles.bigblue}
                onPress={() => toggleUserDetails(item.id)}>
                ID: {item.id} - Name: {item.name}
              </Text>
              <TouchableOpacity
                onPress={() => deleteUser(item.id)}
                style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={24} color={colors.red} />
              </TouchableOpacity>
            </View>
            {selectedUserId === item.id && (
              <View style={styles.details}>
                <Text>More Details:</Text>
                {showInnerData(item)}
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.buttonGroup}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('GetDataById', {addNewUser})}
          style={styles.button}
          contentStyle={styles.buttonContent}>
          Add
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('DeleteUser', {deleteUser})}
          style={styles.button}
          contentStyle={styles.buttonContent}>
          Delete
        </Button>
      </View>
    </ScrollView>
  );
};

export default GetData;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    flex: 1,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  details: {
    marginTop: 10,
    paddingLeft: 10,
    borderLeftColor: 'gray',
    borderLeftWidth: 2,
  },
  detailItem: {
    marginVertical: 3,
  },
  detailText: {
    fontSize: 16,
    color: 'black',
  },
  deleteButton: {
    marginLeft: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: 90,
  },
  buttonContent: {
    height: 40,
  },
});