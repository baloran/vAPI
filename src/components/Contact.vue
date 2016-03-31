<template>
  <div>
    <h3 v-bind:class="{'del':isDel}">https://api.baloran.fr/{{url}}</h3>

    <form action="">
      <span class="email"><input @focus="yolo($event)" @blur="blur($event)" type="text" placeholder="your email"></span>
      <span class="name"><input type="text" @focus="yolo($event)" @blur="blur($event)" placeholder="your name"></span>
      <span class="content"><textarea @focus="yolo($event)" @blur="blur($event)" name="" id="" cols="30" rows="10" placeholder="a Project ? an Idea ?"></textarea></span>
    </form>
    </pre>
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  data () {
    return {
      code: String,
      url: String,
      isDel: false
    }
  },
  ready () {
    const self = this

    self.$set('url', self.$route.name)
  },
  methods: {
    yolo: function ($event) {
      $($event.target).parent().addClass('active')
    },
    blur: function ($event) {
      $($event.target).parent().removeClass('active')
    }
  },
  watch: {
    '$route.params': {
      handler: function () {
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus">
  
form
  margin-top 20px
  display flex
  width 300px
  flex-direction column
  input
    font-family inherit
    font-size 13px
    outline none
    margin-bottom 30px
    border none
    width 300px
    padding 10px
    padding-left 5px
    box-sizing border-box
  textarea
    font-family inherit
    font-size 13px
    outline none
    margin-bottom 20px
    border none
    height 100px
    width 300px
    padding 5px
    padding-left 5px
    box-sizing border-box
  span
    position relative
    &:after
      content "your email"
      font-weight 800
      font-size 10px
      color rgba(#fff, 0)
      text-transform uppercase
      padding-left 10px
      position absolute
      height 12px
      top 30px
      left 10px
      right -10px
      background-color #151515
      transition all 0.2s
      transition-timing-function ease-in
    &.name:after
      content "your name"
    &.content:after
      top initial
      bottom 20px
      content "hmm.. what can i do for you ?"
    &.active
      &:after
        height 20px
        line-height 20px
        color rgba(#fff, 1)

</style>