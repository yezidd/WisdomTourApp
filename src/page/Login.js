/**
 * Created by yzdd on 2018/5/10.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {__TANGSHI__, line, publicStyle, width} from "../utils/publiscStyle";
import CDButton from "../component/CDButton";

const bg2 = require('../asset/bg/bg2.png');
const deleteIcon = require("../asset/icon/delete.png");

const styles = StyleSheet.create({
  bg2: {
    flex: 1
  },
  topView: {
    width,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginTop: 13
  },
  icon6: {
    width: 24,
    height: 24
  },
  titleView: {
    width,
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  font7: {
    fontFamily: __TANGSHI__,
    color: "#FFFFFF",
    fontSize: 32
  },
  font8: {
    fontFamily: __TANGSHI__,
    color: "#FFFFFF",
    fontSize: 14
  },
  loginInputView: {
    width,
    height: 300,
  },
  inputItem: {
    width: width - 100,
    height: 50,
    borderRadius: 25,
    borderWidth: line,
    borderColor: "#FFFFFF",
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  inputText: {
    width: width - 150,
    height: 50,
    marginLeft: 20,
    padding: 0,
    fontSize: 14
  },
  icon7: {
    width: 14,
    height: 14
  },
  line2: {
    height: 30,
    width: line,
    backgroundColor: "#FFFFFF"
  },
  verifyBtn: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: "center"
  },
  inputText2: {
    width: width - 220,
    height: 50,
    marginLeft: 20,
    padding: 0,
    fontSize: 14,
  },
  font9: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  loginBtn: {
    width: width - 100,
    height: 50,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#8EE5EE",
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 25
  },
  font10: {
    color: "#FFFFFF",
    fontSize: 16
  }
});

export default class Login extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={publicStyle.container}>
        <ImageBackground
          source={bg2}
          resizeMode={"stretch"}
          style={styles.bg2}
        >
          <View style={styles.topView}>
            <Image
              source={deleteIcon}
              resizeMode={"contain"}
              style={styles.icon6}
            />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.font7}>木语</Text>
            <Text style={styles.font8}>遇见 · 好景物</Text>
          </View>
          <View style={styles.loginInputView}>
            <View style={styles.inputItem}>
              <TextInput
                style={styles.inputText}
                placeholder={"请输入手机号码"}
                underlineColorAndroid="transparent"
                placeholderTextColor={"rgba(255,255,255,0.8)"}
              />
              <Image
                source={deleteIcon}
                resizeMode={"contain"}
                style={styles.icon7}
              />
            </View>
            <View style={styles.inputItem}>
              <TextInput
                style={styles.inputText2}
                placeholder={"请输入验证码"}
                underlineColorAndroid="transparent"
                placeholderTextColor={"rgba(255,255,255,0.8)"}
              />
              <View style={styles.line2}/>
              <CDButton style={styles.verifyBtn} textStyle={styles.font10}/>
            </View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.font10}>登录</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}