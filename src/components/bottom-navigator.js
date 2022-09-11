import Home from "../screens/Home";
import LearnMore from "../screens/Opportunities";
import Courses from "../screens/Courses";
import FAQs from "../screens/FAQs";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo } from "@expo/vector-icons"
import { StyleSheet } from "react-native";


const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {

  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={styles.bottomBarStyle}>
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: () => (<Entypo name="home" size={20} color="white" />)
          }} />
        <Tab.Screen 
          name="Courses" 
          component={Courses}
          options={{
            tabBarIcon: () => (<Entypo name="graduation-cap"size={20} color="white" />) 
          }}/>
        <Tab.Screen 
          name="Opportunities" 
          component={LearnMore} 
          options={{
            tabBarIcon: () => (<Entypo name="briefcase"size={20} color="white" />)
          }}/>
        <Tab.Screen 
          name="FAQs" 
          component={FAQs} 
          options={{
            tabBarIcon: () => (<Entypo name="help"size={20} color="white" />)
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomBarStyle: {
      backgroundColor: '#67568c',
      paddingBottom: 10,
  }
})


