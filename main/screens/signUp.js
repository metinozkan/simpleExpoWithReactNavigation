import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Input } from "react-native-elements";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
const SignUp = ({ signUpFunc, navigation }) => {
  const [signUpInformations, setSignUpInformations] = React.useState({
    password: "",
    email: "",
  });
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={styles.topBarLeft}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="#1DA1F2"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.topBarRight}>
            <Icon name="sc-twitter" type="evilicon" color="#1DA1F2" />
          </View>
        </View>
        <View style={styles.content}>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 24,
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Hesabını Oluştur
          </Text>
          <View
            style={{
              flex: 1,
              width: width,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              placeholder="e-posta"
              value={signUpInformations.email}
              onChangeText={(value) =>
                setSignUpInformations((prevState) => {
                  return { ...prevState, email: value };
                })
              }
            />
            <Input
              secureTextEntry={true}
              rightIcon={{ type: "font-awesome", name: "eye", opacity: 0.5 }}
              placeholder="sifre"
              value={signUpInformations.password}
              onChangeText={(value) =>
                setSignUpInformations((prevState) => {
                  return { ...prevState, password: value };
                })
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Kayıt Ol"
          style={styles.buttonS}
          onPress={() => {
            signUpFunc(signUpInformations.email, signUpInformations.password);
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomContainer: {
    flex: 0.2,
    alignItems: "flex-end",
    justifyContent: "center",
    borderTopColor: "#e2e2e2",
    borderTopWidth: 0.5,
    width: width,
  },
  buttonS: {
    borderRadius: 10,
    marginRight: 10,
  },
  topBar: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topBarLeft: {
    flex: 1,
  },
  topBarRight: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    marginTop: 10,
    width: width,
    height: height - 100,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
  },
  emailInput: {
    marginTop: 10,
  },
});
export default SignUp;
