import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./main/screens/login";
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
      });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Login"
          component={() => {
            return <Login loginFunc={login} />;
          }}
        />
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
