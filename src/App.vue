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
  page{
    background: #f1f1f1;
  }
  h1{
    font-weight: bold;
    font-size: 36rpx;
  }
</style>
