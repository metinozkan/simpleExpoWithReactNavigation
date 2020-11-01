import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
  StatusBar,
  Image,
  Modal,
  Alert,
  TextInput,
} from "react-native";
import { Icon, Input } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { firebaseConfig } from "../../firebaseConfig";

import * as firebase from "firebase";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const [user, setUser] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [tweet, setTweet] = React.useState("");
  const [tweetArray, setTweetArray] = React.useState([{ tweet: "a" }]);
  React.useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        firebase
          .database()
          .ref("users")
          .child(auth.uid)
          .once("value", (snap) => {
            setUser(snap.val());
          });
      } else {
        //
        navigation.replace("Login");
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <View style={styles.topBarLeft}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
            source={{ uri: user.photo }}
          />
        </View>
        <View style={styles.topBarRight}>
          <Icon name="sc-twitter" type="evilicon" color="#1DA1F2" size={50} />
        </View>
      </View>
      <View style={styles.centerContainer}>
        {tweetArray.map((tw, index) => {
          return (
            <View key={index}>
              <Text>{tw.tweet}</Text>
            </View>
          );
        })}
        <TouchableOpacity
          style={{ position: "absolute", bottom: 25, right: 15 }}
          onPress={() => {
            setOpenModal(true);
          }}
        >
          <View
            style={{
              height: 70,
              width: 70,
              borderRadius: 35,
              backgroundColor: "#1DA1F2",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="leaf" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <View
          style={{
            paddingTop: 44,
            height: height,
            width: width,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              width: width,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
              }}
            >
              <Text style={{ color: "#1DA1F2" }}>vazgeç</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
                // sendTweet();
              }}
            >
              <Text style={{ color: "#1DA1F2" }}>Tweet At</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Durumunuz."
            style={{
              width: width - 20,
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderBottomWidth: 0.5,
              borderColor: "lightgray",
              color: "black",
            }}
            value={tweet}
            onChangeText={(val) => setTweet(val)}
          />
        </View>
      </Modal>
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
    flex: 0.08,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    marginBottom: 20,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopColor: "#e2e2e2",
    width: width,
  },
  buttonS: {
    borderRadius: 10,
    marginRight: 10,
  },
  topBarLeft: {
    flex: 0.8,
  },
  topBarRight: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
export default Home;
