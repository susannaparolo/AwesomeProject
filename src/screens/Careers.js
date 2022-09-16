import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import Header2 from '../components/header2.js';
import MainText from '../components/main-text.js';
import React, { useState } from 'react';

export default function Careers() {
  const [sponsors, setSponsors] = useState([
    { type: "Barclays" },
    { type: "Natwest" },
    { type: "Lloyds Bank" }
  ]);


  return (
    <SafeAreaView style={styles.container}>
      <Header2 header2Text={'EXPLORE YOUR TECH CAREER PATHWAY'} />
      <Text style={styles.subtitle}>A career in tech has many, many different faces and, with tech being integrated across loads of different areas, there are almost endless career path possibilities. Below, you can explore some career pathways, tech job roles, find out how tech works across different industries, and discover some real-life examples of women killing it in their tech careers.
      </Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => setSponsors([...sponsors, { type: "Selfridges"}])}>
         <Text style={styles.buttonTextStyle}>SHOW MORE SPONSORS</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollview}>
      {sponsors.map((sponsor) => (
        <Text style={styles.text}>{sponsor.type}</Text> ))}
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
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  scrollview: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#e2daeb',
    borderRadius: 4
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff6e6c',
    marginTop: 10,
    padding: 10
  },
  buttonTextStyle: {
      fontSize: 10,
      color: '#1f1135',
      fontWeight: 'bold'
  },
  subtitle: {
    color: '#1f1135',
    fontSize: 10,
    padding: 20
  }
});
