import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import MyButtonMain from '../components/button-main.js';
import Header2 from '../components/header2.js';
import MainText from '../components/main-text.js';

export default function LearnMore() {
  return (
    <SafeAreaView style={styles.container}>
      <Header2 header2Text={'EXPLORE YOUR TECH CAREER PATHWAY'} />
      <MainText mainText={'A career in tech has many, many different faces and, with tech being integrated across loads of different areas, there are almost endless career path possibilities. Below, you can explore some career pathways, tech job roles, find out how tech works across different industries, and discover some real-life examples of women killing it in their tech careers.'}/>
      <Text style={styles.text}></Text>
      <MyButtonMain buttonText={'CAREERS'} />
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
  text: {
    color: '#1f1135',
    fontSize: 10,
  }
});


