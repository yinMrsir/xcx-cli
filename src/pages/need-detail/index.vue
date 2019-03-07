<template>
  <div>
    <div class="need-detail">
      <h1 class="btitle">小程序开发框架wepy视频教程1-项目构建</h1>
      <div class="padding" @click="copyHander">
        可访问网站：http://www.yinchunyu.com
      </div>
      <div class='text-gray text-sm padding'>
        <span class="icon-attentionfill"></span> 10
        <span class="icon-appreciatefill"></span> 20
        <span class="icon-messagefill"></span> 30
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      copyHander () {
        wx.setClipboardData({
          data: 'http://www.yinchunyu.com',
          success (res) {
            wx.getClipboardData({
              success (res) {
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .need-detail{
    background: #fff;
    .btitle{
      padding:15rpx 30rpx 0;
      line-height: 1.5;
    }
    .cu-form-group{
      justify-content: flex-start;
    }
  }
</style>
