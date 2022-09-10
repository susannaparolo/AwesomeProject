import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import Header2 from '../components/header2';
import MainText from '../components/main-text';
import MyButtonSecondary from '../components/button-secondary';

class AboutUs extends React.Component {
    constructor(){
        super()
        this.state = {val:0}
        this.update = this.update.bind(this)
    }
    update(){
       this.setState({val: this.state.val + 1}) 
    }

    componentDidMount(){
        console.log("the component AboutUs now successfully exists")
    }

    componentDidUpdate(){
        console.log(`The new Value is: ${this.state.val}`)
    }
  
    render (){
        return (  <View style={styles.container}>
            <Header2 header2Text ='ABOUT US' />
            <Text>value is: {this.state.val} </Text>
            <MainText mainText='All the companies below are supporting CFG members with sponsored places on our CFGdegree cohorts for 2021 and 2022 (so far!). Each of these companies is playing such an important role in the education and training of women in tech, but also in providing job opportunities and work experience at the end of their CFGdegree, ultimately driving change and shifting the stats around diversity in tech.'/>
            <MyButtonSecondary buttonText='Console Logs' onPress={this.update}/>
            <StatusBar style="auto" />
          </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4effc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
      color: 'green',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      fontSize: 20
    }
  });

  export default AboutUs;