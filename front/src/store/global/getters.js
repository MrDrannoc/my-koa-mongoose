/*
export const someGetter = (state) => {}
 */
import { LocalStorage } from 'quasar'

export const connected = (state) => {
  if (!LocalStorage.has('token')) {
    state.connected = false
    return state.connected
  }
}
