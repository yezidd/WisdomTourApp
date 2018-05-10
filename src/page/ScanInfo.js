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
import {publicStyle, width, __SONG__, line, __HEI__} from '../utils/publiscStyle';

const styles = StyleSheet.create({
  pic1: {
    width: (width - 52) / 2,
    height: (width - 52) / 2,
    marginLeft: 5,
    marginRight: 5
  },
  font1: {
    fontFamily: __SONG__,
    fontSize: 20,
    color: "#000000"
  },
  font2: {
    fontFamily: __SONG__,
    fontSize: 16,
    color: "#000000"
  },
  line: {
    height: line,
    width: 40,
    backgroundColor: "#000000",
    marginTop: 15
  },
  titleOne: {
    width,
    height: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  titleTwo: {
    width,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16
  },
  morePic: {
    width,
    height: (width) / 2,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "row"
  },
  toMoreView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  icon1: {
    width: 16,
    height: 16,
    marginLeft: 2
  },
  font3: {
    color: "#FFFFFF",
    fontSize: 16
  },
  icon2: {
    width: 18,
    height: 14,
    marginRight: 5
  },
  toMapSub: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    height: 35,
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: line,
    borderColor: '#000000',
    marginLeft: (width - 230) / 2,
    marginTop: 20
  },
  font4: {
    fontSize: 14,
    color: "#363636"
  },
  font5: {
    fontSize: 16,
    color: "rgb(124,124,124)",
    fontFamily: __HEI__,
    lineHeight: 30
  },
  font6: {
    fontSize: 18,
    color: "#000000",
    fontFamily: __SONG__
  },
  titleThree: {
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16
  }
});

const rightArrow = require("../asset/icon/rightArrow.png");
const gou = require("../asset/icon/gou.png");


export default class ScanInfo extends Component {
  render() {
    return (
      <View style={publicStyle.container}>
        <View style={styles.titleTwo}>
          <View style={styles.titleOne}>
            <Text style={styles.font1}>普陀南星</Text>
            <View style={styles.line}/>
          </View>
          <Text style={styles.font2}>不是北斗南星位,观音济世解毒草</Text>
        </View>
        <View style={styles.morePic}>
          <Image
            source={{uri: "http://192.168.155.2:3000/1525851896342.png"}}
            resizeMode={"stretch"}
            style={styles.pic1}
          />
          <ImageBackground
            source={{uri: "http://192.168.155.2:3000/1525851896342.png"}}
            resizeMode={"stretch"}
            style={styles.pic1}
          >
            <TouchableOpacity style={styles.toMoreView}>
              <Text style={styles.font3}>查看更多</Text>
              <Image
                source={rightArrow}
                resizeMode={"contain"}
                style={styles.icon1}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <TouchableOpacity style={styles.toMapSub}>
          <Image
            source={gou}
            style={styles.icon2}
            resizeMode={"contain"}
          />
          <Text style={styles.font4}>确认是此景物并晒到地图上</Text>
        </TouchableOpacity>

        <View style={styles.titleThree}>
          <View style={styles.titleOne}>
            <Text style={styles.font6}>一花一名</Text>
            <View style={styles.line}/>
          </View>
          <Text style={styles.font5}>普陀南星是天南星的变种。天南星有别名一把伞，普陀南星也有基本相同的体征。由于其叶上半部弯曲，形成一面盖住的形态，如伞一般。</Text>
        </View>

      </View>
    );
  }
}