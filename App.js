import { StyleSheet } from "react-native";
import BottomNavigator from "./src/components/bottom-navigator";


export default function App() {

  // const initialState = {username: "No user is set yet"}

  // function usersReducer(state, action){
  //   switch (action.type) {
  //     case "ADD_USER":
  //       return state.username = {...state, username:action.payload}
  //     case "REMOVE_USER":
  //       return state
  //     default:
  //       return state
  //   }
  // }

  // const store = createStore(usersReducer,initialState);

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


