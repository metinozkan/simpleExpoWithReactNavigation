import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./main/screens/login";
import SignUp from "./main/screens/signUp";
import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";
const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    // firebase.analytics();
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        console.log("logged in");
      } else {
        console.log("not logged in");
      }
    });
  }, []);

  const login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login successful!");
      })
      .catch(function (error) {
        console.log("Login failed!");
        Alert.alert("Hata", "Giriş Yapılamadı", [{ text: "Tamam" }]);
      });
  };

  const signUp = (email, pass) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((registeredUser) => {
        console.log("registeredUser", registeredUser);
      });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login">
          {(props) => <Login {...props} loginFunc={login} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {(props) => <SignUp {...props} signUpFunc={signUp}></SignUp>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
