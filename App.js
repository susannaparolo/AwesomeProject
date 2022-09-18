import { StyleSheet } from "react-native";
import BottomNavigator from "./src/components/bottom-navigator";
import { createStore } from "redux";
import { Provider } from 'react-redux';


export default function App() {

  const initialState = {
    email: "No email is set yet",
    password: ""
  }

  function userReducer(state, action){
    switch (action.type) {
      case "ADD_USER":
        console.log(action.payload)
        return state.email = {...state, email:action.payload}
      case "LOGOUT":
        return state
      default:
        return state
    }
  }

  const store = createStore(userReducer,initialState);

  return (
      <Provider store={store}>
        <BottomNavigator/>
      </Provider>
    );
}

const styles = StyleSheet.create({
  bottomBarStyle: {
      backgroundColor: '#67568c',
      paddingBottom: 10,
  }
})


