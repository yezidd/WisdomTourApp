/**
 * Created by tdzl2003 on 6/18/16.
 */
import {
  AsyncStorage,
  DeviceEventEmitter
} from 'react-native';
import {EventEmitter} from 'fbemitter';
import URI from 'urijs';
import {observable} from 'mobx';


class ResponseError extends Error {
  constructor(message, code, origin) {
    super(message);
    this.code = code;
    this.origin = origin;
  }
}

const RPC = new EventEmitter();
const emit = RPC.emit.bind(RPC);

export default RPC;

const KEY_TOKEN = 'token';
let ROOT_URL;

ROOT_URL = 'http://10.137.126.201:3000';//开发
// ROOT_URL = 'https://api-gw.duojin.xll512.com/v1';//release


let token = null;

export function getToken() {
  console.log(token);
  return token;
}

export async function saveToken(_token) {
  token = _token;
  return AsyncStorage.setItem(KEY_TOKEN, token);
}


export async function clearToken() {
  await AsyncStorage.removeItem(KEY_TOKEN);
  token = null;
}


async function request(url, _options) {
  const uri = new URI(ROOT_URL + url);

  const options = _options || {};
  options.method = options.method || 'GET';
  options.headers = options.headers || {};


  if (__DEV__) {
    console.log(`${options.method} ${uri}`);
    if (options.body) {
      console.log(options.body);
    }
  }

  const resp = await fetch(uri.toString(), options);
  console.log('--------resp.status-----------')
  if (resp.status === 204) {
    return true;
  }
  const text = await resp.text();
  const json = JSON.parse(text);

  console.log("----获取的结果------");
  console.log(json);

  return json;
}

//生成图片随机数
function randomString(len) {
  len = len || 16;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

export async function uploadImage(path) {
  let formData = new FormData();
  let file = {uri: path, type: 'multipart/form-data', name: 'image.png'};   //这里的key(uri和type和name)不能改变,
  formData.append("files", file);

  let url = "/upload";

  const uri = new URI(ROOT_URL + url);

  console.log(uri, "=====");

  let resp = await fetch(uri.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });

  const text = await resp.text();
  const json = JSON.parse(text);

  console.log("----获取的结果------");
  console.log(json);

  return json;

}

export function get(url, options) {
  return request(url, options);
}

export function post(url, data, options) {
  return request(url, {
    method: 'POST',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    ...options,
  });
}

export function put(url, data, options) {
  return request(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}


export function del(url, data, options) {
  return request(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}

