import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import MyButtonMain from '../components/button-main.js';
import Header2 from '../components/header2.js';
import MainText from '../components/main-text.js';


export default function FAQs() {
  return (
    <SafeAreaView style={styles.container}>
      <Header2 header2Text={'FREQUENTLY ASKED Qs'}/>
      <MainText mainText={'If you have a question about our classes or CFGdegree, check the below links for our FAQs, where we have covered our most ‘in demand’ questions from the community'} />
      <MyButtonMain buttonText='CLASS FAQs'/>
      <Text style={styles.text}>CAN'T FIND WHAT YOU'RE LOOKING FOR? GET IN TOUCH!</Text>
      <View style={styles.view}>
            <Input placeholder='Full Name' />
            <Input placeholder='Email'/>
            <Input placeholder="Your Message"/>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
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


