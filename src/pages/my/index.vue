<template>
  <div>
    <navigator url="/pages/info" class="weui-media-box weui-media-box_appmsg">
      <div class="weui-media-box__hd_in-appmsg avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
        <div class="weui-media-box__title"><open-data type="userNickName"></open-data></div>
      </div>
      <div class="weui-cell__ft weui-cell__ft_in-access"></div>
    </navigator>

    <div class="weui-grids">

      <navigator url="/pages/my_heartbeat" class="weui-grid">
        <div class="weui-grid__label">
          <div><img src="../../resource/images/icon_heart@3x.png"></div>
          <div>我的心动</div>
          <!--<div>78</div>-->
        </div>
      </navigator>
      <navigator url="/pages/my_leave" class="weui-grid">
        <div class="weui-grid__label">
          <div><img src="../../resource/images/icon_message_big@3x.png"></div>
          <div>我的留言</div>
          <!--<div>102</div>-->
        </div>
      </navigator>
      <navigator url="/pages/dynamic_my" class="weui-grid">
        <div class="weui-grid__label">
          <div><img src="../../resource/images/icon_moment@3x.png"></div>
          <div>我的动态</div>
          <!--<div>22</div>-->
        </div>
      </navigator>
      <navigator url="/pages/my_attention" class="weui-grid">
        <div class="weui-grid__label">
          <div><img src="../../resource/images/icon_focus_h@3x.png"></div>
          <div>我的关注</div>
          <!--<div>22</div>-->
        </div>
      </navigator>
    </div>
    <div style="height: 20rpx;background:rgba(246,246,246,1);"></div>
    <div class="weui-cells weui-cells_after-title">
      <navigator url="/pages/user_money" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <img src="../../resource/images/icon_counts@2x.png">
          我的账户
        </div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
      <navigator url="/pages/order_list" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <img src="../../resource/images/icon_order@2x.png">
          我的订单
        </div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
      <navigator url="/pages/invite_list" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <img src="../../resource/images/icon_invite@2x.png">
          我的邀约
        </div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
      <div style="height: 20rpx;background:rgba(246,246,246,1);"></div>
      <div url="" class="weui-cell weui-cell_access" bindtap='loginOut'>
        <button class="weui-cell__bd" open-type="feedback">
          <img src="../../resource/images/icon_tips@2x.png">
          意见反馈
        </button>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </div>
      <navigator url="/pages/setting" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <img src="../../resource/images/icon_setting@3x.png">
          设置
        </div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {}
      }
    }
  }
</script>

<style lang="less" scoped>
  .avatar{
    border-radius: 100%;
    overflow: hidden;
  }
  .weui-cell_active{
    border-bottom: 0;
    background: #000;
  }
  .weui-grid{
    width: 25%;
    background: #fff;
    border-right: 0;
    border-bottom: 0;

    .weui-grid__label{
      img{
        width: 40rpx;
        height: 37rpx;
      }
    }
  }
  .weui-grids{
    border-top: 0;
    border-bottom: 0;
  }
  .weui-media-box{
    background: #fff;
    padding-bottom: 0;
  }
  .weui-cell{
    padding: 25rpx 15rpx;
  }
  .weui-cell:before{
    border: 0;
  }
  .weui-cells:before {
    border-top: 0;
  }
  .weui-cell__bd{
    font-size: 32rpx;
    text-align: left;
    background: none;
    padding-left: 0;
    &:after{
      border: 0;
    }
    img{
      width: 38rpx;
      height: 37rpx;
      display: inline-block;
      vertical-align: -5rpx;
      margin-right: 33rpx;
      position: relative;
      left: 10rpx;
    }
  }
</style>