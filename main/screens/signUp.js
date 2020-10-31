import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import DatePicker from "react-native-datepicker";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Input } from "react-native-elements";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
const SignUp = ({ signUpFunc }) => {
  const [signUpInformations, setSignUpInformations] = React.useState({
    name: "",
    email: "",
    date: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={styles.topBarLeft}>
            <AntDesign name="arrowleft" size={24} color="#1DA1F2" />
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
              style={styles}
              placeholder="İsim"
              value={signUpInformations.name}
              onChangeText={(value) =>
                setSignUpInformations((prevState) => {
                  return { ...prevState, name: value };
                })
              }
            />
            <Input
              rightIcon={{ type: "font-awesome", name: "eye", opacity: 0.5 }}
              style={styles}
              placeholder="e-posta"
              value={signUpInformations.email}
              onChangeText={(value) =>
                setSignUpInformations((prevState) => {
                  return { ...prevState, email: value };
                })
              }
            />
            <DatePicker
              placeholder="Dogum tarihi"
              style={{ width: width, border: "none" }}
              date={signUpInformations.date}
              mode="datetime"
              placeholder="Dogum tarihi"
              androidMode="spinner"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  display: "none",
                },
                dateInput: {
                  borderBottomColor: "#a0a0a0",
                  borderColor: "white",
                  width: width,
                  marginLeft: 10,
                  marginRight: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                setSignUpInformations((prevState) => {
                  return { ...prevState, date: date };
                });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Kayıt Ol"
          style={styles.buttonS}
          onPress={() => {
            signUpFunc(loginInformations.email, loginInformations.password);
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
