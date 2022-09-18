import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import Header2 from '../components/header2.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


export default function Account() {

  const dispatch = useDispatch()
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(email && password) {
    setSubmitted(true);
  }
  
  function addUser(user){
      const action = {
        type: 'ADD_USER',
        payload: user
      }
    dispatch(action)
  }

  return (
    <SafeAreaView style={styles.container}>
        <Header2 header2Text={'ACCOUNT'}/>
        <Text style={styles.text}></Text>
        <View style={styles.view}>
            <Text style={styles.text}>EMAIL ADDRESS</Text>
            <Input placeholder='example@email.com'/>
            {submitted && !email ? <Text style={styles.errortext}> Please enter email address</Text> : null}
            <Text style={styles.text}>PASSWORD</Text>
            <Input placeholder="Password" secureTextEntry={true}/>
            {submitted && !password ? <Text style={styles.errortext}> Please enter password</Text> : null}
        </View>

        <TouchableOpacity 
            style={styles.button}
            onPress={addUser} >
              <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4effc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: 300,
  },
  text: {
    color: '#1b1325',
    fontWeight: 'bold',
    fontSize: 10,
    padding: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    height: 30,
    width: 80
  },
  buttonText: {
    color: 'white'
  }
});

}
