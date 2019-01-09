<template>
  <div class='list-item-wrap'>
    <navigator class='head' hover-class="none">
      <div class='user'>
        <img class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/G9uic0M8kD3dRjibPdavYLINvhPXRuFDTQtWobx1ZHXXywHag1j7H95LiarMJHZmZQEjibIj7HjHCaoF0ia9FbaCJzw/132" />
        <div class='des'>
          <div class='name'>成是非</div>
          <div class='sex'>  男 | 30岁  </div>
        </div>
      </div>
      <div class='time'></div>
    </navigator>
    <div class='content'>
      很高兴来到这里！
    </div>
    <div class='img'>
      <div>
        <img class="" src="http://111.230.52.50/upload/null/20190107161955412.JPEG" />
      </div>
      <div>
        <img class="" src="http://111.230.52.50/upload/null/20190107161955412.JPEG" />
      </div>
      <div>
        <img class="" src="http://111.230.52.50/upload/null/20190107161955412.JPEG" />
      </div>
    </div>
    <div class='opt'>
      <div class="counts"><img src="../resource/images/icon_read@3x.png">0</div>
      <div class="counts"><img src="../resource/images/icon_like@3x.png">0</div>
      <div class="counts"><img src="../resource/images/icon_message_sm@3x.png">0</div>
      <div class="counts"><img src="../resource/images/icon_share_sm@3x.png">0</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dynamic'
  }
</script>



<style lang="less">
  .list-item-wrap {
    display: flex;
    flex-direction: column;
    padding: 0 30rpx 0 30rpx;
    margin-bottom: 30rpx;
    background: #FFFFFF;
    border-bottom: #f9f9f9 solid 20rpx;
    &:last-child{
      border-bottom: 0;
    }
    .head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top:20rpx;
    }
    .user {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 100%;
      margin-right: 20rpx;
    }
    .name {
      font-size: 36rpx;
      font-weight: 700;
      color: #333;
    }
    .sex, .time {
      font-size: 24rpx;
      color: #999;
    }
    .content {
      font-size: 30rpx;
      margin-top: 30rpx;
      line-height: 42rpx;
      color:#5D5D5D;
    }
    .img {
      display: flex;
      flex-direction: row;
      margin-top: 30rpx;
      justify-content: space-between;
    }
    .img img {
      width: 220rpx;
      height: 180rpx;
    }
    .opt {
      display: flex;
      flex-direction: row;
      margin: 30rpx 0 30rpx 0;
      justify-content: space-around	;
      align-items: center;
      font-size: 26rpx;
      color: #666;
    }
    .counts{
      display: flex;
      align-items: center;
      img{
        width: 30rpx;
        height: 30rpx;
        margin-right: 10rpx;
      }
    }
    .dt-item-talk{
      background: #f9f9f9;
      padding: 20rpx;
    }
    .dt-item-talk-name{
      color: #9348A8;
    }
  }
</style>