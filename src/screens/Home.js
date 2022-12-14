import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
// import {useDispatch, useSelector } from 'react-redux';
import MyButtonMain from '../components/button-main.js';
import MyButtonSecondary from '../components/button-secondary.js';
import Logo from '../components/icon.js';
import Header1 from '../components/header1.js';
import Header2 from '../components/header2.js';
import Header3 from '../components/header3.js';


export default function Home() {

//   const dispatch = useDispatch()

//   function addUser(user){
//     const action = {
//       type: "ADD_USER",
//       payload: user
//     }
//     dispatch(action)
//   }

//   const user = useSelector((state) => state.username)

  return (
    <SafeAreaView style={styles.container}>
      <Logo imageSource={'./assets/cfg-logo.png'} />
      <Header1 style={styles.header1} header1Text={'Hello World!'}/>
      <Header2 style={styles.header2} header2Text={'CFG Masters'}/>
      <Header3 style={styles.header3} header3Text={'Summer 2022'}/>
      <MyButtonMain buttonText='COURSES' />
      <MyButtonSecondary buttonText='OPPORTUNITIES' />
      
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
  }
});


