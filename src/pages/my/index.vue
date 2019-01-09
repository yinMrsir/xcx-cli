<template>
  <div>
    <div class="userHeader">
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <div class="userName">
      <open-data type="userNickName"></open-data>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .userHeader{
    display: block;
    margin: 0 auto;
    width: 140rpx;
    height: 140rpx;
    border-radius: 50%;
    overflow: hidden;
  }
  .userName{
    padding-top: 15rpx;
    text-align: center;
    font-size: 30rpx;
  }
</style>