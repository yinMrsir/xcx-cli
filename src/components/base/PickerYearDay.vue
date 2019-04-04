<template>
  <div class="picker">
    <picker mode="date"
            :value="pickerTime"
            :start="startDate" :end="endDate" @change="bindDateChangeStart">
      <div class="picker__details">
        <div>{{ pickerTime }}</div>
      </div>
    </picker>
  </div>
</template>

<script>
  import Util from '../../utils'

  export default {
    data () {
      return {
        startDate: '1900-01-01',
        endDate: '2200-01-01',
        pickerTime: '2018-05-6'
      }
    },
    mounted () {
      // 设置时间
      let today = Util.formatTime(new Date(), 1)
      this.pickerTime = today.replace(/\//g, '-')
    },
    methods: {
      bindDateChangeStart (e) {
        this.pickerTime = e.mp.detail.value
      }
    }
  }
</script>

<style lang="less" scoped>
.picker{
  picker{
    height: 80rpx;
    line-height: 80rpx;
    width: 96%;
    padding: 0 2%;
    background: transparent;
    border: none;
    outline: none;
  }
  .picker__details{

  }
}
</style>
