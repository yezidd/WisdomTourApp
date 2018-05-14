/**
 * Created by yzdd on 2018/2/1.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react/native';
import {line} from "../utils/publiscStyle";

const styles = StyleSheet.create({
  font1: {
    color: "#5CB438",
    fontSize: 14
  },
  btn: {
    width: 75,
    height: 28,
    alignItems: "center",
    justifyContent: "center"
  }
});

//验证码时间
const TIME = 30;

//验证码组件
@observer
export default class CDButton extends Component {
  @observable
  cd = TIME;

  @observable
  flag = false;

  sub = () => {

    if (this.cd === TIME) {
      this.flag = true;
      this.props.onPress();
      let timer = setInterval(() => {
        this.cd = this.cd - 1;
        if (this.cd === 0) {
          this.flag = false;
          clearInterval(timer);
          this.cd = TIME;
        }
      }, 1000);
    }
  };


  render() {
    const {style, textStyle} = this.props;
    return (
      <TouchableOpacity
        style={[styles.btn, this.props.style]}
        onPress={this.sub}>
        {
          !this.flag ? <Text style={[styles.font1, textStyle]}>立即获取</Text> :
            <Text style={[styles.font1, textStyle]}>{this.cd + "秒"}</Text>
        }
      </TouchableOpacity>
    );
  }
}