import { StyleSheet } from "react-native";
import BottomNavigator from "./src/components/bottom-navigator";


export default function App() {

  return (
    <BottomNavigator/>
  );
}

const styles = StyleSheet.create({
  bottomBarStyle: {
      backgroundColor: '#67568c',
      paddingBottom: 10,
  }
})


