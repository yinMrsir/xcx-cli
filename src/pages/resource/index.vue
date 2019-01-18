<template>
  <div>
    <div class="cu-card dynamic no-card">
      <navigator class="cu-item shadow" url="/pages/resource-detail/main" v-for="(item, index) in 10" :key="index">
        <div class="dtitle">提供费用/免费试听劵，寻求北京高校资源/有年轻群体的资源合作</div>
        <div class="cu-list menu menu-avatar">
          <div class="cu-item">
            <div class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
            <div class='content flex-sub'>
              <div>晓晓萌</div>
              <div class='padding-sm flex flex-wrap'>
                <div class='cu-tag bg-red'>潮流</div>
                <div class='cu-tag bg-orange'>时尚</div>
                <div class='cu-tag bg-cyan'>达人</div>
              </div>
              <button class='cu-btn round bg-red shadow concat'>联系我</button>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="grid col-2 margin-bottom text-center">
            <div class="padding padding solids-right solids-bottom solids-top">微博：11W</div>
            <div class="padding solids-bottom  solids-top">微信：10W</div>
            <div class="padding solids-right">公众号: 10w</div>
            <div class="padding">抖音：110W</div>
          </div>
        </div>
      </navigator>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .cu-card.no-card>.cu-item{
    margin-top: 30rpx;
  }
  .dtitle{
    font-size: 36rpx;
    font-weight: bold;
    padding:30rpx 30rpx 0;
    line-height: 1.5;
  }
  .concat{
    position: absolute;
    right: 30rpx;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 26rpx;
  }
  .padding-sm{
    padding-left: 0;
    padding-top: 10rpx;
  }
</style>



