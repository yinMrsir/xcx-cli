import Request from '../../common/request'
import store from '../../vuex/store'

/**
 * 微信登录
 * @param jsonData
 * @returns {Promise<*>}
 */
const login = async (jsonData) => {
  let code = await wxlogin()
  let data = await Request(`xcx/login`, 'POST', {jsonData, code})
  // 存储到本地
  wx.setStorageSync('userInfo', data)
  // 存储到vuex
  store.commit('saveUserInfo', data)
  return data
}

/**
 * 获取微信步数
 * @returns {Promise<*>}
 */
const getWeRunData = async () => {
  let {encryptedData, iv} = await wxGetWeRunData()
  iv = encodeURIComponent(iv)
  let data = await Request(`xcx/weRunData`, 'POST', {encryptedData, iv})
  return data
}

async function wxlogin () {
  return new Promise(resolve => {
    wx.login({
      success (res) {
        if (res.code) {
          resolve(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  })
}

async function wxGetWeRunData () {
  return new Promise(resolve => {
    wx.getWeRunData({
      success (res) {
        resolve(res)
      }
    })
  })
}

export default {
  login,
  getWeRunData
}
