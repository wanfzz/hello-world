<template>
    <p>
        <tempalte v-if="!mountedEnd">
            Loading...
        </tempalte>
        <template v-else-if="flag">
            {{$t('message.H5_TASKEXPIRED')}}
        </template>
        <template v-else>
            {{ day > 0 ? day + $t('message.H5_DAY') : time }}
        </template>
    </p>
</template>

<script>
  export default{
    data () {
      return {
        time : '',
        day: '',
        mountedEnd: false,
        flag : false,
        timer: null
      }
    },
    mounted () {
      this.timer = setInterval(()=>{
        if(this.flag == true){
          clearInterval(this.timer)
        }
        this.timeDown()
      },500)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    props : {
      endTime : {
        type : String
      }
    },
    methods: {
      timeDown() {
        const endTime = new Date(this.endTime)
        const nowTime = new Date();
        let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
        let d = parseInt(leftTime / (24 * 60 * 60))
        let h = this.formate(parseInt(leftTime / (60 * 60) % 24))
        let m = this.formate(parseInt(leftTime / 60 % 60))
        let s = this.formate(parseInt(leftTime % 60))
        if (leftTime <= 0) {
          this.flag = true
          this.$emit('time-end')
        }
        this.day = d
        this.time = `${h}:${m}:${s}`
        this.mountedEnd = true
      },
      formate(time) {
        if (time >= 10) {
          return time
        } else {
          return `0${time}`
        }
      }
    }
  }
</script>
