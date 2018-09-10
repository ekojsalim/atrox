import { observable, action } from "mobx";

class Authstore {
  @observable authUser = null;

  @action setUser(authUser) {
    this.authUser = authUser;
  }
}

export default new Authstore();
