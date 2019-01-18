<template>
  <div>
    <form @submit="submitFromData">
      <div class="cu-form-group">
        <div class='title'>标题：</div>
        <input placeholder="请输入信息标题" class='radius' name="title">
      </div>
      <div class="cu-form-group">
        <div class='title'>合作地区：</div>
        <input placeholder="请选择合作地区" class='radius' name="address">
      </div>
      <div class="cu-form-group top">
        <div class='title'>我们提供：</div>
        <textarea placeholder="您可以提供什么" maxlength="-1" placeholder-class='placeholder' name="have"></textarea>
      </div>
      <div class="cu-form-group top">
        <div class='title'>我们需要：</div>
        <textarea placeholder="您需要什么" maxlength="-1" placeholder-class='placeholder' name="ned"></textarea>
      </div>

      <div class="padding flex flex-direction" @tap="addNeed">
        <button class='cu-btn bg-red margin-tb-sm lg' form-type="submit">发布信息</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {NeedApi} from '../../api'

  export default {
    data () {
      return {
        modalName: ''
      }
    },
    methods: {
      async submitFromData (e) {
        console.log(e)
        let data = await NeedApi.add()
        console.log(data)
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
