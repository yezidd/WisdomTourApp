import React, {Component} from 'react'
import {StyleSheet, Switch, Text, View, Platform, TouchableOpacity, Alert, Image} from 'react-native'
import {MapView} from 'react-native-amap3d'
import {__IOS__, width} from '../utils/publiscStyle'

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  controls: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    paddingLeft: 20,
    paddingRight: 20,
    ...Platform.select({
      android: {
        backgroundColor: '#f5f5f5',
      },
      ios: {
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopColor: '#e0e0e0',
        borderTopWidth: StyleSheet.hairlineWidth,
        zIndex: 1,
      },
    }),
  },
  control: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    marginTop: 5,
  },
  customInfoWindow: {
    width: 100,
    height: 100
  },
  topBtnView: {
    position: 'absolute',
    top: __IOS__ ? 40 : 20,
    width,
    height: 30,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-end',
  },
  icon2: {
    width: 20,
    height: 20,
  },
  iconPackageView: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  }
})


const avatar = require("../asset/avatar.png");
const meet_search = require("../asset/icon/search.png");
const meet_info = require("../asset/icon/info.png");

export default class Meet extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    showsCompass: false,
    showsScale: true,
    showsZoomControls: true,
    showsLocationButton: false,
    time: new Date(),
    lat: 0,
    lon: 0
  }


  componentDidMount() {
    this.mounted = true
    setInterval(() => {
      if (this.mounted) {
        this.setState({time: new Date()})
      }
    }, 1000)
  }

  componentWillUnmount() {
    this.mounted = false
  }

  _coordinates = [
    {
      latitude: 39.806901,
      longitude: 116.397972,
    },
    {
      latitude: 39.806901,
      longitude: 116.297972,
    },
    {
      latitude: 39.906901,
      longitude: 116.397972,
    },
    {
      latitude: 39.706901,
      longitude: 116.397972,
    },
  ]

  _onMarkerPress = () => Alert.alert('onPress')
  _onInfoWindowPress = () => Alert.alert('onInfoWindowPress')
  _onDragEvent = ({nativeEvent}) => Alert.alert(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>

        <MapView
          zoomLevel={15}
          locationEnabled
          showsCompass={false}
          showsLocationButton={true}
          coordinate={{latitude: this.state.lat, longitude: this.state.lon}}
          onLocation={({nativeEvent}) => {
            this.setState({
              lat: nativeEvent.latitude,
              lon: nativeEvent.longitude
            })
            console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)
          }
          }
          style={styles.map}
        >
          <MapView.Marker active={false} color="green"
                          coordinate={{latitude: this.state.lat - 0.001, longitude: this.state.lon}} flat={true}
                          icon={() => <Image source={avatar} style={{width: 30, height: 30, borderRadius: 30}}/>}
                          onPress={() => console.log("---点击了按钮---")}>
            <TouchableOpacity activeOpacity={0.9} onPress={this._onInfoWindowPress}>
              <View style={styles.customInfoWindow}>
                <Text>自定义信息窗口</Text>
                <Text>{this.state.time.toLocaleTimeString()}</Text>
              </View>
            </TouchableOpacity>
          </MapView.Marker>
        </MapView>
        <View style={styles.topBtnView}>
          <View style={styles.iconPackageView}>
            <Image
              source={meet_search}
              style={styles.icon2}
              resizeMode={"contain"}
            />
          </View>
          <View style={styles.iconPackageView}>
            <Image
              source={meet_info}
              style={styles.icon2}
              resizeMode={"contain"}
            />
          </View>
        </View>
      </View>
    )
  }
}