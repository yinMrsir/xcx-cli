<template>
  <div>
    <div class="header-box">
      <div class="user-avatar-url">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="user-nick-name">
        <open-data type="userNickName"></open-data>
      </div>
    </div>
    <div class="cu-list menu margin-top">
      <div class="cu-item">
        <button class='content' open-type="contact" style="text-align: left">
          <text class='icon-discoverfill text-orange'></text>
          <text class='text-grey'>联系我们</text>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {GlobalApi} from '../../api'

  export default {
    data () {
      return {}
    },
    methods: {
      scanCode () {
        wx.scanCode({
          scanType: 'qrCode',
          success (res) {
            let code = res.result
            GlobalApi.canerCode(code)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-box{
    padding:30rpx 0;
    background: #fff;
    .user-avatar-url{
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      display: block;
    }
    .user-nick-name{
      text-align: center;
      font-size: 30rpx;
      color: #333;
      margin-top: 20rpx;
    }
  }
</style>
