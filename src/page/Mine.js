/**
 * Created by yzdd on 2018/4/14.
 */
import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native'
import {line, publicStyle, width} from '../utils/publiscStyle'
import {get} from '../logic/rpc';
import TouchableItem from "../../react-navigation/src/views/TouchableItem";
import {globalUserData} from "../logic/StoreGlobal";

const list = require('../asset/icon/list.png')
const mess = require('../asset/icon/mess.png')
const bg1 = require('../asset/bg/bg1.jpg')

const styles = StyleSheet.create({
  headerBg: {
    width,
    height: 200,
    justifyContent: 'space-between'
  },
  topHeader: {
    width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16
  },
  icon1: {
    width: 30,
    height: 30
  },
  bottomHeader: {
    width,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  avatar: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50
  },
  font1: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  nameView: {
    flex: 1,
    height: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10
  },
  rankView: {
    borderWidth: line,
    borderColor: '#FFFFFF',
    borderRadius: 2
  },
  font2: {
    color: '#FFFFFF',
    fontSize: 16
  },
  font3: {
    color: '#FFFFFF',
    fontSize: 10
  },
  shareBtn: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5
  },
  picView: {
    flex: 1,
    borderBottomColor: "#dddddd",
    borderBottomWidth: line
  },
  picItem: {
    width,
    height: 300,
    flexDirection: 'row'
  },
  picItemLeft: {
    width: 60,
    height: 300,
    alignItems: 'center',
    paddingTop: 10
  },
  font4: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#000000"
  },
  font5: {
    fontSize: 14,
  },
  picItemMiddle: {
    width: 10,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    width: 1,
    height: 300,
    backgroundColor: "#dddddd"
  },
  circle: {
    width: 8,
    height: 8,
    backgroundColor: "#eeeeee",
    borderRadius: 8,
    position: "absolute",
    top: 10
  },
  picItemRight: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10
  },
  pic: {
    width: width - 90,
    height: 250,
    marginLeft: 10,
    marginRight: 10
  },
  picImg: {
    width: width - 90,
    height: 250,
  },
  mess: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  }
})

export default class Mine extends Component {
  static navigationOptions = () => {
    return {
      title: '我的',
      header: null
    }
  }

  renderItem = (item, index) => {
    return <Item item={item} index={index}/>
  }

  //跳转到识图的modal
  toScanModal = () => {
    const {navigate} = this.props.navigation;
    navigate("ScanModal")
  }

  toLogin = () => {
    const {navigate} = this.props.navigation;
    navigate("Login");
  }

  render() {
    return (
      <View style={publicStyle.container}>
        <ImageBackground source={bg1} style={styles.headerBg}>
          <View style={styles.topHeader}>
            <Image
              source={mess}
              style={[styles.icon1, {marginRight: 10}]}
              resizeMode={'contain'}
            />

            <Image
              source={list}
              style={[styles.icon1, {marginRight: 10}]}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.bottomHeader}>
            <TouchableOpacity style={styles.avatar} onPress={this.toLogin}>
              <Text style={styles.font1}>{globalUserData.phone === null ? "登录" : "已登录"}</Text>
            </TouchableOpacity>
            <View style={styles.nameView}>
              <Text style={styles.font2}>{globalUserData.username}</Text>
            </View>
            <TouchableOpacity style={styles.shareBtn} onPress={this.toScanModal}>
              <Text style={styles.font2}>拍照识图</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.picView}>
          <FlatList
            renderItem={({item, index}) => this.renderItem(item, index)}
            data={[1, 2, 3]}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
        </View>
      </View>
    )
  }
}

class Item extends Component {
  render() {
    return (
      <View style={styles.picItem}>
        <View style={styles.picItemLeft}>
          <Text style={styles.font4}>24</Text>
          <Text style={styles.font5}>三月</Text>
        </View>
        <View style={styles.picItemMiddle}>
          <View style={styles.line}/>
          <View style={styles.circle}/>
        </View>
        <View style={styles.picItemRight}>
          <View style={styles.pic}>
            <Image
              source={bg1}
              resizeMode={"stretch"}
              style={styles.picImg}
            />
          </View>
          <View style={styles.mess}>
            <Text>枯草水中长，挖来用药声</Text>
          </View>
        </View>
      </View>
    )
  }
}
