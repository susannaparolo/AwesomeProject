import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import MyButtonMain from '../components/button-main.js';
import Header2 from '../components/header2.js';
import MainText from '../components/main-text.js';


export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
        <Header2 header2Text={'ACCOUNT'}/>
        <Text style={styles.text}></Text>
        <View style={styles.view}>
            <Text style={styles.text}>EMAIL ADDRESS</Text>
            <Input placeholder='example@email.com'/>
            <Text style={styles.text}>PASSWORD</Text>
            <Input placeholder="Password"/>
        </View>
        <MyButtonMain buttonText='LOG IN'/>
        <Text style={styles.text}>DON'T HAVE AN ACCOUNT YET?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
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


