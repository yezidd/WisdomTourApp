/**
 * Created by yzdd on 2018/3/11.
 */
import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import {observer} from 'mobx-react/native'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  SafeAreaView
} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import {
  fromBottom,
  fromRight,
  fromBottomLikeAndroid
} from './utils/navigationUtil'
import {TabBar} from './utils/TabBar'
import ScanModal from "./page/modal/ScanModal";

const Stack = StackNavigator(
  {
    TabBar: TabBar
  },
  {
    initialRouteName: 'TabBar',
    cardStyle: {
      backgroundColor: '#FFFFFF',
      shadowOpacity: 0
    },
    navigationOptions: {
      headerTitleStyle: {
        fontSize: 17,
        color: '#FFFFFF'
      },
      headerStyle: {
        backgroundColor: 'rgb(41,40,45)',
        height: 44,
        // shadowColor: "#A8A8A8",
        // shadowOffset: {width: 0, height: 1},
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        borderBottomWidth: 0,
        elevation: 0
      }
    },
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
  }
)

export const BottomModal = StackNavigator(
  {
    Stack: {screen: Stack},
    ScanModal: {screen: ScanModal}
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: () => ({screenInterpolator: fromBottomLikeAndroid}),
    cardStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      shadowOpacity: 0
    }
  }
)
