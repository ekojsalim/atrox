import {action, computed, observable} from "mobx";

class Authstore {
  @observable authUserId = null;
  @observable authUserName = null;
  @observable authUserEmail = null;

  @computed get loggedIn() {
    return !!this.authUserId;
  }

  @computed get dataComplete() {
    return this.authUserName && this.authUserEmail;
  }

  @action setUser(authUser) {
    this.authUserId = authUser.uid;
    this.authUserName = authUser.displayName;
    this.authUserEmail = authUser.email;
  }
}

export default new Authstore();
