<template>

    <article class="sharedialog">

        <div class="sharedialog-mask" @click="closeShareForm"></div>

        <div class="sharedialog-container" v-if="appShare">
            <div class="sharedialog-list">

                <!--<div class="sharedialog-cell" >-->
                    <!--<img class="sharedialog-cell_icon" src="@/assets/img/huo_qiezi_shareit.png" alt="">-->
                    <!--<span class="sharedialog-cell_name">SHAREit</span>-->
                <!--</div>-->

                <a @click="handleWhatsApp" class="sharedialog-cell" >
                    <img class="sharedialog-cell_icon" src="@/assets/img/huo_qiezi_whatsapp.png" alt="">
                    <span class="sharedialog-cell_name">{{$t('message.H5_SHARE_WHATSAPP')}}</span>
                </a>

                <div @click="handleFacebook" class="sharedialog-cell" >
                    <img class="sharedialog-cell_icon" src="@/assets/img/huo_qiezi_facebook.png" alt="">
                    <span class="sharedialog-cell_name">{{$t('message.H5_SHARE_FACEBOOK')}}</span>
                </div>

                <div @click="handleEmail" class="sharedialog-cell" >
                    <img class="sharedialog-cell_icon" src="@/assets/img/huo_qiezi_e-mail.png" alt="">
                    <span class="sharedialog-cell_name">{{$t('message.H5_SHARE_EMAIL')}}</span>
                </div>

                <div @click="handleSms" class="sharedialog-cell" >
                    <img class="sharedialog-cell_icon" src="@/assets/img/huo_qiezi_news.png" alt="">
                    <span class="sharedialog-cell_name">{{$t('message.H5_SHARE_SMS')}}</span>
                </div>

            </div>

            <div @click="closeShareForm" class="sharedialog-footer">
                {{$t('message.H5_CANCEL')}}
            </div>
        </div>

    </article>
</template>


<script>
  import { mapGetters } from 'vuex'
  import api from '@/api'
  export default {
    name: 'tab',
    props: {
    },
    data () {
      return {
        content_type: 1,
        share_id: 0,
        message: {
          email: '',
          facebook: '',
          sms: '',
          whats_app: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'appShare'
      ]),
      taskShare () {
        return this.$store.state.taskShare
      }
    },
    mounted () {
      if (this.$store.state.sharePage === 'task') {
        let { content, share_id } = this.taskShare
        this.content_type = 2
        this.share_id = share_id
        this.message = content
      } else {
        let { content, share_id } = this.appShare
        this.content_type = 1
        this.share_id = share_id
        this.message = content
      }
    },
    methods: {
      reportShare (type) {

        let params = {
          to_target: type,
          share_type: type,
          content_type: this.content_type,
          share_id: this.share_id
        }
        return new Promise((resolve, reject) => {
          api.reportShare(params, res => {
            resolve(res)
          }, msg => {
            reject()
          })
        })
      },
      handleSms () {
        this.$ga.event('share', 'click', 'type', 'sms')
        this.reportShare('sms').then(res => {
          this.closeShareForm()
          window.location.href = `sms:${navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? '&' : '?' }body=${this.message.sms.replace(/&/g, '^') || ''}`
        }, err => {
          // error...
        })
      },
      handleEmail () {
        this.$ga.event('share', 'click', 'type', 'email')
        let to = 'to@test.com'  // 收件人
        let bcc = 'bcc@test.com'  // 暗抄送
        let cc = 'cc@test.com'  // 抄送
        let suject = '测试主题'  // 主题
        let body = this.message.email  // 内容
        this.reportShare('email').then(res => {
          this.closeShareForm()
          window.location.href = `mailto:${to}?cc=${cc}&bcc=${bcc}&subject=${suject}&body=${body}`
        }, err => {
          // error...
        })
      },
      handleWhatsApp () {
        this.$ga.event('share', 'click', 'type', 'whatsapp')
        this.reportShare('whats_app').then(res => {
          window.location = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.message.whats_app)}`
        }, err => {
          // error...
        })
      },
      handleFacebook () {
        this.$ga.event('share', 'click', 'type', 'facebook')
        try {
          FB.ui({
            method: 'feed',
            link: this.message.facebook,
            picture: 'http://drib.tech/fbsharetest/quiz_landing.jpg',
            caption: 'handleFacebook-caption',
            title:  'handleFacebook-title',
            description: 'handleFacebook-description',
            message: 'handleFacebook-message',
          }, response => {
            if (response && !response.error_message) {
              this.reportShare('facebook').then(res => {
                this.closeShareForm()
                this.$tips(this.$t('message.H5_TIPS_SUCCESS_SHARE'))
              }, err => {
                this.$tips(this.$t('message.H5_TIPS_ERROR_SHARE'))
              })
            } else {
              this.$tips(this.$t('message.H5_TIPS_ERROR_SHARE'))
            }
          })
        } catch (err) {
          this.$tips(this.$t('message.H5_TIPS_ERROR_FBSDKFAIL'))
        }
      },
      closeShareForm () {
        this.$ga.event('share.dialog', 'close', 'visible', 0)
        this.$store.state.shareVisible = false
      },
      handleWhatsApp_test () {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
          var loadDateTime = new Date()
          window.setTimeout(function () {
              var timeOutDateTime = new Date()
              if (timeOutDateTime - loadDateTime < 5000) {
                window.location = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.message.whats_app)}`
              } else {
                window.close()
              }
            },
            25);
          window.location = `whatsapp://send?text=${encodeURIComponent(this.message.whats_app)}`
        } else if (navigator.userAgent.match(/android/i)) {
          var state = null
          try {
            state = window.open(`whatsapp://send?text=${encodeURIComponent(this.message.whats_app)}`)
          } catch (e) {
          }
          if (state) {
            window.close()
          } else {
            window.location = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.message.whats_app)}`
          }
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">

    .sharedialog {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;
        &-mask {
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        &-container {
            position: absolute;
            bottom: 0;
            left: 0;
            overflow: hidden;
            width: 100vw;
            border-top-left-radius: 19px;
            border-top-right-radius: 19px;
            background-color: #ffffff;
            z-index: 12;
        }
        &-list {
            padding-top: 70px;
            overflow: hidden;
        }
        &-cell {
            width: 33.33%;
            float: left;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 70px;
            &_icon {
                width: 106px;
                height: 106px;
                margin-bottom: 20px;
            }
            &_name {
                color: #333333;
                font-size: 25px;
            }
        }
        &-footer {
            line-height: 96px;
            width: 100vw;
            border-top: 1px solid #eeeeee;
            font-size: 29px;
            color: #557CFF;
            text-align: center;
        }
    }

</style>
