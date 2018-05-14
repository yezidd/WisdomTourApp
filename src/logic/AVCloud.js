/**
 * Created by yzdd on 2018/5/14.
 */

import AV from 'leancloud-storage';

var APP_ID = '5lpug1EybKJMLe56Eqkx9DV8-gzGzoHsz';
var APP_KEY = 'op8IuEw3ngIuGYNkdSMJquvA';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
export default AV;