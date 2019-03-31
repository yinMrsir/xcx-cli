<script>
  import store from './vuex/store'
  export default {
    created () {
      const userInfo = wx.getStorageSync('userInfo') || null
      if (userInfo) {
        // 存储到vuex
        store.commit('saveUserInfo', userInfo)
      }
    }
  }
</script>

<style lang="less">
  @import "style/icon.css";
  @import "style/colorUi.css";
  .tool-detail{
    background: #fff;
    padding-bottom: 20rpx;
  }

  h1 {
    font-size: 40rpx;
    font-weight: bold;
    color: #333;
    padding-top: 20rpx;
    text-align: center;
    line-height: 60rpx;
  }

  .m-section {
    color: #999;
    font-size: 30rpx;
    margin: 20rpx;
    line-height: 50rpx;
    height: 50rpx;
  }

  .m-work {
    margin: 20rpx;
  }

  .m-input {
    border: 1px solid #DDDDDD;
    border-radius: 3px;
    margin: 20rpx;
    .picker, input {
      height: 80rpx;
      line-height: 80rpx;
      width: 96%;
      padding: 0 2%;
      background: transparent;
      border: none;
      outline: none;
    }
  }

  .m-result {
    margin: 40rpx;
    padding: 20rpx;
    line-height: 50rpx;
    color: #555555;
    border: 1px solid #DEF5F2;
    border-radius: 6rpx;
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
    background: #F5FEFD;
  }

  .m-result-tit {
    text-align: center;
    color: #43B7A7;
    font-size: 32rpx;
    line-height: 60rpx;
  }

  .m-work button {
    height: 80rpx;
    width: 100%;
    color: #fff;
    text-align: center;
    border-radius: 6rpx;
    background: #7CD3C7;
    border: none;
    outline: none;
    font-size: 30rpx;
    line-height: 80rpx;
  }
</style>
