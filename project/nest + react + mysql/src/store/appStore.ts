import { makeAutoObservable } from 'mobx';

class AppStore {
  appName: string = 'NEST_APP'
  constructor() {
    makeAutoObservable(this)
  }
}

export default new AppStore()