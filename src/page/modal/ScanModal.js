'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {__IOS__, height, publicStyle, width} from "../../utils/publiscStyle";


const deleteIcon = require("../../asset/icon/delete.png");
const lightAutoIcon = require("../../asset/icon/lightauto.png");
const lightOnIcon = require("../../asset/icon/lighton.png");
const lightOffIcon = require("../../asset/icon/lightoff.png");
const cameraTurn = require("../../asset/icon/trun.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  icon1: {
    width: 24,
    height: 24
  },
  topIconView: {
    position: "absolute",
    top: __IOS__ ? 30 : 10,
    width: width,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16
  },
  bottomSubView: {
    width,
    height: 0.3 * height,
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25
  },
  subPicBtn: {
    borderWidth: 1,
    borderColor: "#8EE5EE",
    borderRadius: 60,
  },
  subPicBtnView: {
    width: 60,
    height: 60,
    backgroundColor: "#8EE5EE",
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#FFFFFF"
  },
  icon2: {
    width: 40,
    height: 40
  }
});

@observer
export default class ScanModal extends Component {

  @observable
  cameraType = RNCamera.Constants.Type.back;

  @observable
  cameraFlashMode = RNCamera.Constants.FlashMode.on;

  //跳转上一页
  toBack = () => {
    const {goBack} = this.props.navigation;
    goBack();
  };

  //改变闪光灯模式
  changeFlashMode = () => {
    switch (this.cameraFlashMode) {
      case RNCamera.Constants.FlashMode.on:
        this.cameraFlashMode = RNCamera.Constants.FlashMode.off;
        break;
      case RNCamera.Constants.FlashMode.off:
        this.cameraFlashMode = RNCamera.Constants.FlashMode.torch;
        break;
      case RNCamera.Constants.FlashMode.torch:
        this.cameraFlashMode = RNCamera.Constants.FlashMode.on;
        break;
    }
  };
  //改变摄像头方向
  changeDirection = () => {
    switch (this.cameraType) {
      case RNCamera.Constants.Type.back:
        this.cameraType = RNCamera.Constants.Type.front;
        break;
      case RNCamera.Constants.Type.front:
        this.cameraType = RNCamera.Constants.Type.back;
        break;
    }
  }
  shapeIcon = () => {
    switch (this.cameraFlashMode) {
      case RNCamera.Constants.FlashMode.on:
        return lightOnIcon;
      case RNCamera.Constants.FlashMode.off:
        return lightOffIcon;
      case RNCamera.Constants.FlashMode.torch:
        return lightAutoIcon;
    }
  }

  render() {
    return (
      <View style={publicStyle.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={this.cameraType}
          flashMode={this.cameraFlashMode}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={styles.bottomSubView}>
          <TouchableOpacity onPress={this.changeDirection}>
            <Image
              source={cameraTurn}
              style={styles.icon2}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.subPicBtn} onPress={this.takePicture.bind(this)}>
            <View style={styles.subPicBtnView}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeDirection}>
            <Image
              source={cameraTurn}
              style={styles.icon2}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topIconView}>
          <TouchableOpacity onPress={this.toBack}>
            <Image
              source={deleteIcon}
              style={styles.icon1}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeFlashMode}>
            <Image
              source={this.shapeIcon()}
              style={styles.icon1}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function () {
    if (this.camera) {
      const options = {quality: 0.5, base64: false, skipProcessing: true};

      const data = await this.camera.takePictureAsync(options);
      alert(data.uri);
    }
  };
}

