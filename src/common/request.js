import Config from '../config'

const Request = (url, method = 'GET', params) => {
  return new Promise(resolve => {
    wx.request({
      url: `${Config.hosts}${url}`,
      method: method,
      header: {
        'Auth': wx.getStorageSync('userInfo') ? wx.getStorageSync('userInfo').auth : ''
      },
      data: params,
      success (data) {
        resolve(data.data)
      },
      fail () {
        resolve(false)
      }
    })
  })
}

export default Request
