<template>
  <div class="star" :id="itemid">
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    rating: {
      type: Number
    },
    itemid: {
      type: String
    }
  },
  mounted() {
    // console.log('before')
    this.calculatePosition()
  },
  methods: {
    calculatePosition() {
      let coefficient = 10 - Math.round(Math.floor(this.rating * 2) / 2)
      let star = document.getElementById(this.itemid)
      if (star) {
        star.style.backgroundPosition = '0px -' + coefficient * 11 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.star {
  background-position: 0px -55px;
  background: url('../assets/ic_rating_s.png') no-repeat;
  display: inline-block;
  width: 55px;
  height: 11px;
  margin: 0 3px 0 0;
  overflow: hidden;
}
</style>
