import React from 'react';
import { StatusBar } from 'expo-status-bar';
import CreateCard from '../components/item-card';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import Header2 from '../components/header2.js';


export default function Courses(props) {
    return (
        <SafeAreaView style={styles.container}>
          <Header2 header2Text={'DATA, SOFTWARE OR \nFULL-STACK SPECIALISATION'} />
          <Text style={styles.text}>
          Level up with our 14-week CFGdegree in either data, software or, 
          new for 2022, full-stack. Our CFGdegree is open by application 
          and interview to high potential women who want to pursue a career 
          in data, software, or as a full-stack developer with our partner companies.
          </Text> 
          <StatusBar style="auto" />
          <ScrollView>
           <CreateCard 
            title={'SOFTWARE ENGINEERING CAREER PATHWAY'}
            description={'The skills you will learn in our Software CFGdegree will allow you to explore a software engineering career pathway, with roles including software engineer, full-stack developer, back-end programmer, cyber security, mobile apps developer, cloud engineer, solutions architect, devOps and more!'}
            />
           <CreateCard
            title={'DATA CAREER PATHWAY'}
            description={'The skills you will learn in our Data CFGdegree will allow you to explore a data career pathway, with roles including data analyst, machine learning, data engineer, data architect, data scientist, applications/data visualisation engineer, business analyst, just to name a few!'}
            />
           <CreateCard
            title={'FULL-STACK DEVELOPER CAREER PATHWAY'}
            description={'The skills you will learn in our Full-Stack CFGdegree will allow you to explore all sorts of roles as a developer as you’ll learn both front-end and back-end skills, and how to connect the two. You’ll be able to take on roles like full-stack developer (obvs!), front-end developer, back-end developer, mobile app developer and loads more!'}
           />
          </ScrollView>
        </SafeAreaView>
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4effc',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70
    },
    text: {
        color: '#1f1135',
        fontSize: 10,
        padding: 20
    }
  });
