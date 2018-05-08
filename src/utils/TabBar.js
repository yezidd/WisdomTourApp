import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import React from 'react'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  SafeAreaView
} from 'react-navigation'
import Home from '../page/Home'
import Mine from '../page/Mine'
import Meet from '../page/Meet'

export const TabBar = TabNavigator(
  {
    Meet: {
      screen: Meet,
      navigationOptions: {
        tabBarLabel: '遇见',

        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={
              !focused
                ? require('../asset/tab1.png')
                : require('../asset/tab1Active.png')
            }
            style={[styles.tabIcon]}
            resizeMode="contain"
          />
        )
      }
    },
    // Schedule: {
    //   screen: Home,
    //   navigationOptions: {
    //     tabBarLabel: '拍照',
    //
    //     tabBarIcon: ({focused, tintColor}) => (
    //       <View style={styles.picView}>
    //         <Image
    //           source={!focused ? require('../asset/tab2.png') : require('../asset/tab2Active.png')}
    //           style={[styles.tabIcon1]}
    //           resizeMode="contain"/>
    //       </View>
    //     ),
    //   }
    // },
    Mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: '我',

        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={
              !focused
                ? require('../asset/tab3.png')
                : require('../asset/tab3Active.png')
            }
            style={[styles.tabIcon]}
            resizeMode="contain"
          />
        )
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    lazy: true,
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#3399ff', // 文字和图片选中颜色icon_dd11@2x.png
      inactiveTintColor: '#919caa', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
      style: {
        backgroundColor: '#f8f8fa', // TabBar 背景色
        height: 49,
        shadowColor: '#b2b2b2',
        shadowOffset: {
          width: 0,
          height: 0.5
        },
        shadowRadius: 0,
        shadowOpacity: 1,
        borderTopWidth: 0,
        borderTopColor: '#3399ff'
      },
      labelStyle: {
        fontSize: 10 // 文字大小
        // marginBottom: 2,
        // marginTop:PublicStyle.setHeight(10)
      },
      iconStyle: {
        height: 24
        // width: 22,
        // marginBottom: 4
      }
    }
  }
)

const styles = StyleSheet.create({
  tabIcon: {
    height: 24,
    width: 24,
    marginBottom: 2
  },
  picView: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabIcon1: {
    width: 50,
    height: 50
  }
})
