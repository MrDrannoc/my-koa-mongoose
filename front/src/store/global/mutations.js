/*
export const someMutation = (state) => {}
 */

export const connected = (state) => {
  state.connected = true
}
export const disconnected = (state) => {
  state.connected = false
}
export const addUser = (state, user) => {
  state.userSession = user
}
export const addToken = (state, token) => {
  state.token = token
  state.apiHeader.headers.Authorization = token
}
