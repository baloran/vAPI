<template>
  <ul>
    <li v-link-active><a v-link="{ name: 'm', params:{slug:'profile'} }" @click="load"><span class="verb">GET</span>/profile</a></li>
    <li v-link-active class="green"><a v-link="{ name: 'm', params:{slug:'works'} }" @click="load"><span class="verb">GET</span>/works</a></li>
    <li v-link-active class="yellow"><a v-link="{ name: 'contact'}" @click="load"><span class="verb">GET</span>/contact</a></li>
  </ul>
</template>

<script>

</script>

<style lang="stylus" scoped>
.container
  border 1px solid #f00

ul
  margin-right 200px
  li
    margin-bottom 10px
    text-decoration none
    list-style none
    position relative
    z-index 10
    &:before
      content ""
      display inline-block
      position absolute
      width 0px
      left -2px
      right 0px
      top 10px
      bottom -2px
      z-index 5
      transition width 0.4s
      transition-timing-function ease-in
      background-color #438eff
    &.green
      &:before
        background-color #a6f3a6
    &.yellow
      &:before
        background-color #f1e05a

    a
      color #000
      position relative
      z-index 10
      text-decoration none
    .verb
      padding-right 20px
      font-weight 800
    &:hover
      &:before
        right -10px
        width 105%
    &.v-link-active
      &:before
        right -10px
        width 105%
        

h2
  color #393
</style>
