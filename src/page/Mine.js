/**
 * Created by yzdd on 2018/4/14.
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground
} from 'react-native'
import { line, publicStyle, width } from '../utils/publiscStyle'

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
  }
})

export default class Mine extends Component {
  static navigationOptions = () => {
    return {
      title: '我的',
      header: null
    }
  }

  render() {
    return (
      <View style={publicStyle.container}>
        <ImageBackground source={bg1} style={styles.headerBg}>
          <View style={styles.topHeader}>
            <Image
              source={mess}
              style={[styles.icon1, { marginRight: 10 }]}
              resizeMode={'contain'}
            />

            <Image
              source={list}
              style={[styles.icon1, { marginRight: 10 }]}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.bottomHeader}>
            <View style={styles.avatar}>
              <Text style={styles.font1}>登录</Text>
            </View>
            <View style={styles.nameView}>
              <Text style={styles.font2}>半夏的小人祭</Text>
            </View>
            <View style={styles.shareBtn}>
              <Text style={styles.font2}>分享形色</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
