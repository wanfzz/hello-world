import { makeAutoObservable } from 'mobx';

export interface AppStoreTypes {
  appName: string,
  changeAppName: (name: string) => void
}

class AppStore implements AppStoreTypes{
  appName = 'NEST_APP'
  constructor() {
    makeAutoObservable(this)
  }
  changeAppName(name: string): void {
    this.appName = name
  }
}

export default new AppStore()