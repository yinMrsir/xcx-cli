<template>
  <div>
    <div class="cu-form-group">
      <div class='title'>标题：</div>
      <input placeholder="请输入信息标题" class='radius' name='input'>
    </div>
    <div class="cu-form-group">
      <div class='title'>微博：</div>
      <input placeholder="请输入粉丝量" class='radius' name='input'>
    </div>
    <div class="cu-form-group">
      <div class='title'>微信：</div>
      <input placeholder="请输入粉丝量" class='radius' name='input'>
    </div>
    <div class="cu-form-group">
      <div class='title'>公众号：</div>
      <input placeholder="请输入粉丝量" class='radius' name='input'>
    </div>
    <div class="cu-form-group">
      <div class='title'>抖音：</div>
      <input placeholder="请输入粉丝量" class='radius' name='input'>
    </div>
    <div class="cu-form-group top">
      <div class='title'>其他：</div>
      <textarea placeholder="您可在此输入其他平台粉丝量..." maxlength="-1" placeholder-class='placeholder'></textarea>
    </div>
    <view class="cu-bar margin-top ">
      <view class='action'>
        <text class='icon-title text-red'></text>上传图片更有说服力哦~
      </view>
    </view>
    <div class="cu-form-group margin-top">
      <div class="grid col-3 grid-square flex-sub">
        <div class="padding-xs bg-img" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);">
        </div>
        <div class="padding-xs bg-img" style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);">
          <div class="cu-tag bg-red">
            <text class='icon-close'></text>
          </div>
        </div>
        <div class="padding-xs solids">
          <text class='icon-cameraadd'></text>
        </div>
      </div>
    </div>
    <view class="padding flex flex-direction">
      <button class='cu-btn bg-red margin-tb-sm lg'>发布信息</button>
    </view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        modalName: ''
      }
    }
  }
</script>

<style lang="less" scoped>
</style>