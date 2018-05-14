/**
 * Created by yzdd on 2018/5/14.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Modal
} from 'react-native';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const loadingGif = require("../asset/loading.gif");

export default class LoadingSpinner extends Component {


  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.")
        }}
      >
        <View style={styles.contain}>
          <Image
            source={loadingGif}
            resizeMode={"contain"}
          />
        </View>
      </Modal>
    );
  }
}