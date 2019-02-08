/*
export const someActions = (state) => {}
 */

export const connected = ({ commit }) => {
  commit('connected')
}
export const disconnected = ({ commit }) => {
  commit('disconnected')
}
export const addUser = ({ commit }, user) => {
  commit('addUser', user)
}
export const addToken = ({ commit }, token) => {
  commit('addToken', token)
}
