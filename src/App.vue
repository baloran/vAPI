<template>
<header>
  <h1>Baloran</h1>
  <div class="clear"></div>
  <h2>
    <span>aka</span>
    Arnaud Allouis
  </h2>
</header>
<div class="container">
  <menu></menu>
  <router-view></router-view>
</div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    Menu
  },
  ready () {
  }
}
</script>

<style lang="stylus">
@import "./assets/reset.css"
@import "./assets/highlight.css"

html, body
  height 100%

body
  padding 50px
  background-color #FCFCFC
  font-family 'Hack'
  overflow hidden

header
  cursor pointer
  h1
    &:after
      content "Developer"
      color #fff
      text-transform uppercase
      font-size 10px
      line-height 22px
      text-align left
      padding-left 15px
      box-sizing border-box
      opacity 0
      position absolute
      display block
      left -5px
      top 0
      bottom -5px
      width 0px
      background-color #000
      width 0
      transition all 0.4s
      transition-timing-function ease-in
  &:hover
    h1
      &:after
        opacity 1
        width 110%

  h2
    &:after
      content "full-stack"
      opacity 0
      color #fff
      text-transform uppercase
      font-size 10px
      line-height 20px
      text-align left
      padding-left 15px
      box-sizing border-box
      position absolute
      display block
      left -5px
      top 0
      bottom -5px
      width 0px
      background-color #000
      transition all 0.4s
      transition-timing-function ease-in
  &:hover
    h2
      &:after
        width 110%
        opacity 1

h1
  font-size 20px
  font-weight 800
  position relative
  display inline-block

.clear
  clear both

h2
  font-size 14px
  margin-top 5px
  font-weight 800
  position relative
  cursor pointer
  display inline-block
  span
    font-size 12px
    font-style italic
    font-weight 300
    margin-right 10px

.container
  display flex
  margin-top 65px
  height 100%
</style>
