/**
 * Created by yzdd on 2018/3/11.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { BottomModal } from './src'
import { observable } from 'mobx'
import { AsyncStorage, StatusBar, View } from 'react-native'
import { updateFocus } from 'react-navigation-is-focused-hoc'

@observer
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BottomModal
          onNavigationStateChange={(prevState, currentState) => {
            updateFocus(currentState)
          }}
        />
      </View>
    )
  }
}
