import React from 'react'
import {
  Dimensions,
  StyleSheet,
  PixelRatio,
  Platform,
  StatusBar
} from 'react-native'

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height
export const __IOS__ = Platform.OS === 'ios'
export const __ANDROID__ = Platform.OS !== 'ios'
export const line = 1 / PixelRatio.get()
export const publicStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: __IOS__ ? 20 : 0
  },
  borderBottomStyle: {
    borderBottomWidth: line,
    borderBottomColor: '#dddddd'
  },
  shadow: {
    shadowColor: '#DCDCDC',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1
  }
})
