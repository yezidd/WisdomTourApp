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
import {__TANGSHI__, line, publicStyle, width} from "../../utils/publiscStyle";
import CDButton from "../../component/CDButton";
import AV from '../../logic/AVCloud';
import Toast from 'react-native-simple-toast';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {setLogin} from "../../logic/LoginStore";
import LoadingSpinner from "../../component/LoadingSpinner";

const bg2 = require('../../asset/bg/bg2.png');
const deleteIcon = require("../../asset/icon/delete.png");

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
    fontSize: 14,
    color: "#FFFFFF"
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
    color: "#FFFFFF"
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
@observer
export default class Login extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      LoadingShow: false
    }
  }

  @observable
  phone = "";

  @observable
  verifyCode = "";

  //点击登录之后验证验证码，之后实现登录
  subLogin = () => {
    const {goBack} = this.props.navigation;
    var self = this;
    if (this.phone === "") {
      Toast.show("请输入手机号");
      return false;
    }
    if (this.verifyCode === "") {
      Toast.show("请输入验证码");
      return false;
    }
    this.setState({
      LoadingShow: true
    });
    AV.Cloud.verifySmsCode(this.verifyCode, this.phone).then(async function () {
      //开始接口数据绑定
      await setLogin(self.phone);
      //验证成功
      Toast.show("登录成功");
      self.setState({
        LoadingShow: false
      });
      goBack();
    }, function (err) {
      self.setState({
        LoadingShow: false
      });
      setTimeout(() => {
        //验证失败
        Toast.show("验证码错误");
      }, 500);
    });
  };
  goBackFor = () => {
    const {goBack} = this.props.navigation;
    goBack();
  };
  //发送验证码
  sendMess = () => {
    console.log("=====执行");
    if (!(/^1[23456789]\d{9}$/.test(this.phone))) {
      Toast.show("手机号码有误，请重填");
      return false;
    } else {
      AV.Cloud.requestSmsCode({
        mobilePhoneNumber: this.phone,
        name: '木语',
        op: '登录',
        ttl: 10                     // 验证码有效时间为 10 分钟
      }).then(function () {
        Toast.show("短信发送成功,有效期为10分钟");
        //调用成功
      }, function (err) {
        Toast.show("发生错误,短信发送失败");
        //调用失败
      });
    }
  }


  render() {
    return (
      <View style={publicStyle.container}>
        <ImageBackground
          source={bg2}
          resizeMode={"stretch"}
          style={styles.bg2}
        >
          <TouchableOpacity style={styles.topView} onPress={this.goBackFor}>
            <Image
              source={deleteIcon}
              resizeMode={"contain"}
              style={styles.icon6}
            />
          </TouchableOpacity>
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
                onChangeText={(text) => this.phone = text}
                value={this.phone}
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
                onChangeText={(text) => this.verifyCode = text}
                value={this.verifyCode}
              />
              <View style={styles.line2}/>
              <CDButton
                style={styles.verifyBtn}
                textStyle={styles.font10}
                onPress={this.sendMess}
              />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={this.subLogin}>
              <Text style={styles.font10}>登录</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <LoadingSpinner modalVisible={this.state.LoadingShow}/>
      </View>
    );
  }
}