import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Input } from "react-native-elements";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
const Login = ({ loginFunc, navigation }) => {
  const [loginInformations, setLoginInformations] = React.useState({
    email: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={styles.topBarLeft}>
            {/* <AntDesign
              name="arrowleft"
              size={24}
              color="#1DA1F2"
              onPress={() => {
                navigation.goBack();
              }}
            /> */}
          </View>
          <View style={styles.topBarRight}>
            <Icon name="sc-twitter" type="evilicon" color="#1DA1F2" />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={{ color: "#1DA1F2" }}>Kaydol</Text>
            </TouchableOpacity>

            <FontAwesome5 name="ellipsis-v" size={24} color="#1DA1F2" />
          </View>
        </View>
        <View style={styles.content}>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 24,
            }}
          >
            Twitter'a giriş yap.
          </Text>
          <Input
            style={styles}
            label="Telefon, e-posta ya da kullanıcı adı"
            labelStyle={styles.emailInput}
            value={loginInformations.email}
            onChangeText={(value) =>
              setLoginInformations((prevState) => {
                return { ...prevState, email: value };
              })
            }
          />
          <Input
            rightIcon={{ type: "font-awesome", name: "eye", opacity: 0.5 }}
            style={styles}
            label="Şifre"
            secureTextEntry={true}
            value={loginInformations.password}
            onChangeText={(value) =>
              setLoginInformations((prevState) => {
                return { ...prevState, password: value };
              })
            }
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Giriş Yap"
          style={styles.buttonS}
          onPress={() => {
            loginFunc(loginInformations.email, loginInformations.password);
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
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    marginTop: 10,
    width: width,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  emailInput: {
    marginTop: 10,
  },
});
export default Login;
