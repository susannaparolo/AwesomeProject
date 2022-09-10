import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header2 from '../components/header2';
import MainText from '../components/main-text';

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
        console.log("the AboutUs component now succesfully exists")
    }

    componentDidUpdate(){
        console.log(`The new Value is : ${this.state.val}`)
    }
  


  
    render (){
        return (  <View style={styles.container}>
            <Header2 header2Text ='ABOUT US' />
            <Text style={styles.title}>Value is : {this.state.val}</Text>
            <TouchableOpacity style={styles.button} onPress={this.update}>
                <Text>Press Here</Text>
            </TouchableOpacity>
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
        color: '#1f1135',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 50,
        marginTop: 30
      },
    button: {
        alignItems: "center",
        backgroundColor: "#fbdd74",
        padding: 10
      },
  });
  

  export default AboutUs;