import Header2 from "../components/header2";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../redux/action";

export default function App() {

  const { email, password } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(email && password) {
    setSubmitted(true);
  }

  return (

      <SafeAreaView style={styles.container}>
          <Header2 header2Text={'ACCOUNT'}/>
          {submitted && valid ?
          <Text style={styles.text}>Success! Thank you for registering</Text> : null}
          <View style={styles.view}>
            <Text style={styles.text}>EMAIL ADDRESS</Text>
            <Input 
              value={email} 
              onChange={(value) => dispatch(setEmail(value))}
              placeholder='example@email.com'/>
            {submitted && !email ? <Text style={styles.errortext}> Please enter email address</Text> : null}
            <Text style={styles.text}>PASSWORD</Text>
            <Input 
              value={password}
              onChange={(value) => dispatch(setPassword(value))}
              placeholder="Password"/>
            {submitted && !password ? <Text style={styles.errortext}> Please enter password</Text> : null}
          </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    },
    errortext: {
      color: 'red',
      marginBottom: 15
    }
  });

}