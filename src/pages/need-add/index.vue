<template>
  <div>
    <div class="cu-form-group">
      <div class='title'>标题：</div>
      <input placeholder="请输入信息标题" class='radius' name='input'>
    </div>
    <div class="cu-form-group">
      <div class='title'>合作地区：</div>
      <input placeholder="请选择合作地区" class='radius' name='input'>
    </div>
    <div class="cu-form-group top">
      <div class='title'>我们提供：</div>
      <textarea placeholder="您可以提供什么" maxlength="-1" placeholder-class='placeholder'></textarea>
    </div>
    <div class="cu-form-group top">
      <div class='title'>我们需要：</div>
      <textarea placeholder="您需要什么" maxlength="-1" placeholder-class='placeholder'></textarea>
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