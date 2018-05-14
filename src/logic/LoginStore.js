import URI from 'urijs';
import {observable} from 'mobx';
import {get, post} from './rpc';
import DeviceInfo from 'react-native-device-info';
import {globalUserData} from './StoreGlobal';

//游客登录手机号数据
export async function setLogin(phone) {
  const uniqueId = DeviceInfo.getUniqueID();
  const uri = new URI("/users/login");
  try {
    let result = await post(uri, {
      deviceId: uniqueId,
      phone
    });
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}