/**
 * Created by yzdd on 2018/5/14.
 */
import URI from 'urijs';
import {observable} from 'mobx';
import {get, post} from './rpc';
import DeviceInfo from 'react-native-device-info';
import {globalUserData} from './StoreGlobal';

//获取到游客登录的状态
export async function getPreLoginStatus() {
  const uniqueId = DeviceInfo.getUniqueID();

  const uri = new URI("/users/pre/login");
  try {
    let result = await post(uri, {
      deviceId: uniqueId
    });
    console.log(result, "====状态如下");
    //将数据赋值给全局数据
    globalUserData.uuid = result.data.uuid;
    globalUserData.phone = result.data.phone;
    globalUserData.rank = result.data.rank;
    globalUserData.username = result.data.username;

  } catch (error) {
    throw error;
  }
}
