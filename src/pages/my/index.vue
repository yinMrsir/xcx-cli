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
    <div class="cu-list grid col-2 solid-top}}">
      <div class="cu-item">
        <div class='icon-cardboardfill text-red'>
          <div class="cu-tag badge">
            <block>99+</block>
          </div>
        </div>
        <text>我的消息</text>
      </div>
      <div class="cu-item">
        <div class='icon-recordfill text-orange'>
          <div class="cu-tag badge">
            <block>99+</block>
          </div>
        </div>
        <text>我发布的</text>
      </div>
    </div>
    <div class="cu-list menu margin-top">
      <div class="cu-item">
        <navigator class='content' hover-class='none' url='/pages/resource-add/main'>
          <text class='icon-circlefill text-grey'></text>
          <text class='text-grey'>我有资源</text>
        </navigator>
      </div>
      <div class="cu-item">
        <navigator class=' content' hover-class='none' url='/pages/need-add/main'>
          <text class='icon-btn text-olive'></text>
          <text class='text-grey'>我要资源</text>
        </navigator>
      </div>
      <div class="cu-item">
        <navigator class='content' hover-class='none' url='../list/list' open-type="redirect">
          <text class='icon-discoverfill text-orange'></text>
          <text class='text-grey'>联系我们</text>
        </navigator>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
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