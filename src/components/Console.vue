<template>
  <div>
    <h3 v-bind:class="{'del':isDel}">https://api.baloran.fr/{{url}}</h3>
    <pre><code class="json" v-bind:class="{'del':isDel}">{{{code}}}</code>
    </pre>
  </div>
</template>

<script>

import hljs from 'hljs'
import config from '../services/config'

export default {
  data () {
    return {
      code: String,
      url: String,
      isDel: false
    }
  },
  ready () {
    this.fetch()
  },
  methods: {
    fetch () {
      console.log(config)
      const self = this
      this.$set('isDel', true)
      this.$http({url: config + this.$route.params.slug, method: 'GET'}).then(function (response) {
        let pretify = hljs.highlightAuto(JSON.stringify(response.data, undefined, 2)).value
        pretify = hljs.fixMarkup(pretify)
        self.$set('code', pretify)
        self.$set('url', self.$route.params.slug)
        setTimeout(function () {
          self.$set('isDel', false)
        }, 500)
      })
    }
  },
  watch: {
    '$route.params': {
      handler: function () {
        this.fetch()
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus">

/* always present */
.expand-transition
  transition all .3s ease
  height 30px
  padding 10px
  background-color #eee
  overflow hidden

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave
  height 0
  padding 0 10px
  opacity 0

div
  height calc(100% - 140px)
  position relative

pre
  background-color #fff
  min-width 600px
  max-width 950px
  overflow-x scroll
  position absolute
  top 15px
  bottom 0px
  font-size 13px
  padding 15px

h3
  font-size 9px
  color #9B9B9B
  margin-bottom 5px

.del
  text-decoration none
  background-color #F7F7F7
  color #F7F7F7
  span
    color #F7F7F7 !important
</style>
