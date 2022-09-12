import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import Header2 from '../components/header2.js';
import MainText from '../components/main-text.js';
import React, { useState } from 'react';

export default function LearnMore() {
  const [sponsors, setSponsors] = useState([
    { type: "Barclays" },
    { type: "Natwest" },
    { type: "Lloyds Bank" }
  ]);


  return (
    <SafeAreaView style={styles.container}>
      <Header2 header2Text={'EXPLORE YOUR TECH CAREER PATHWAY'} />
      <MainText mainText={'A career in tech has many, many different faces and, with tech being integrated across loads of different areas, there are almost endless career path possibilities. Below, you can explore some career pathways, tech job roles, find out how tech works across different industries, and discover some real-life examples of women killing it in their tech careers.'}/>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => setSponsors([...sponsors, { type: "Selfridges"}])}>
         <Text style={styles.buttonTextStyle}>SHOW MORE SPONSORS</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollview}>
      {sponsors.map((sponsor) => (
        <Header2 header2Text={sponsor.type}/>))}
      </ScrollView>
 

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
    marginTop: 80
  },
  text: {
    color: '#1f1135',
    fontSize: 10,
  },
  scrollview: {
    marginVertical: 20,
    width: 250
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff6e6c',
    height: 45,
    width: 200
  },
  buttonTextStyle: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold'
  },
});
