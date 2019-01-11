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
        if (data.statusCode === 200 && data.data.code === 200) {
          resolve(data.data.Result)
        } else if (data.statusCode === 200 && data.data.code === 551) {
          resolve(data.data.Result)
        } else {
          wx.showToast({
            title: data.data.errMessage,
            icon: 'none',
            duration: 2000
          })
          resolve(false)
        }
      },
      fail () {
        resolve(false)
      }
    })
  })
}

export default Request
