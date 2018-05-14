import {observable} from 'mobx';

class UserStore {
  @observable
  uuid;
  @observable
  username;
  @observable
  rank;
  @observable
  phone;

}

//导出用户全局数据
export const globalUserData = new UserStore();