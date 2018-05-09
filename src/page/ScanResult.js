/**
 * Created by yzdd on 2018/5/9.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  WebView,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {publicStyle, width, height} from '../utils/publiscStyle'
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  webView: {
    width,
    height: height / 2,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: "#FFFFFF"
  },
  scanBg: {
    width,
    height: 300,
  },
  icon1: {
    width: 24,
    height: 24,
    marginLeft: 16,
    marginTop: 16
  },
  resultView: {},
  wrapper: {
    width,
    height: 450
  },
  resultTitle: {
    width,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16
  },
  font1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000000"
  },
  resultPic: {
    width: 300,
    height: 300,
    borderRadius: 300,
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },
  resultPicView: {
    elevation: 6,
    marginBottom: 20
  },
  slide: {
    width,
    height: 450,
    alignItems: "center",
    justifyContent: "center"
  },
  font2: {
    color: "#D9D9D9",
    fontSize: 16,
    marginBottom: 20
  },
  infoBtn: {
    width: width / 2,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#8EE5EE",
    alignItems: "center",
    justifyContent: "center",
  },
  font3: {
    color: "#FFFFFF",
    fontSize: 16
  }
});

const deleteIcon = require("../asset/icon/delete.png");

export default class ScanResult extends Component {

  static navigationOptions = () => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <ScrollView>
        <View style={publicStyle.container}>
          <ImageBackground
            source={{uri: "http://192.168.155.2:3000/1525851896342.png"}}
            resizeMode={"stretch"}
            style={styles.scanBg}
          >
            <Image
              source={deleteIcon}
              resizeMode={"contain"}
              style={styles.icon1}
            />
          </ImageBackground>
          <View style={styles.resultTitle}>
            <Text style={styles.font1}>这有点难倒我了</Text>
            <Text style={styles.font1}>不如看看你喜欢的吧</Text>
          </View>
          <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
            <View style={styles.slide}>
              <Text style={styles.font2}>它有可能是普陀南星</Text>
              <View style={styles.resultPicView}>
                <Image
                  source={{uri: "http://192.168.155.2:3000/1525851896342.png"}}
                  resizeMode={"cover"}
                  style={styles.resultPic}
                />
              </View>
              <TouchableOpacity style={styles.infoBtn}>
                <Text style={styles.font3}>点击查看详情</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.slide}>
              <Text style={styles.font2}>它有可能是普陀南星</Text>
              <View style={styles.resultPicView}>
                <Image
                  source={{uri: "http://192.168.155.2:3000/1525851896342.png"}}
                  resizeMode={"cover"}
                  style={styles.resultPic}
                />
              </View>
              <TouchableOpacity style={styles.infoBtn}>
                <Text style={styles.font3}>点击查看详情</Text>
              </TouchableOpacity>
            </View>
          </Swiper>
        </View>
      </ScrollView>
    );
  }
}