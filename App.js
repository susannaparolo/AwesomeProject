import Home from "./src/screens/Home";
import LearnMore from "./src/screens/LearnMore";
import AboutUs from "./src/screens/AboutUs";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={styles.bottomBarStyle}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Learn More" component={LearnMore} />
        <Tab.Screen name="About Us" component={AboutUs} />
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

