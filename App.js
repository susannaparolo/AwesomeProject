import { StyleSheet } from "react-native";
import BottomNavigator from "./src/components/bottom-navigator";
// import { createStore } from "redux";
// import { Provider } from 'react-redux';


export default function App() {

  // const initialState = {username: "No user is set yet"}

  // function userReducer(state, action){
  //   switch (action.type) {
  //     case "ADD_USER":
  //       console.log(action.payload)
  //       return state.username = {...state, username:action.payload}
  //     case "REMOVE_USER":
  //       return state
  //     default:
  //       return state
  //   }
  // }

  // const store = createStore(userReducer,initialState);

  return (
      // <Provider store={store}>
        <BottomNavigator/>
      {/* </Provider> */}
    );
}

const styles = StyleSheet.create({
  bottomBarStyle: {
      backgroundColor: '#67568c',
      paddingBottom: 10,
  }
})


