<template>
  <div>
    <div class="lds-hourglass" v-if="!completed"></div>
    <div class="detail" v-if="completed">
      <div class="back-button" @click='backToPrevious'>返回</div>
      <div class="detail__image-wrapper">
        <img class="detail__image" :src="image" alt="">
      </div>
      <div class="detail__content-wrapper">
        <ul class="info">
          <li class="title">{{title}}</li>
          <li class="director">导演：{{directors}}</li>
          <li class="cast">主演：{{casts}}</li>
        </ul>
        <div class="intro">
          <p class="intro-title">简介</p>
          <p class="intro-content">
            {{intro}}
          </p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Axios from 'axios'
import router from 'vue-router'
export default {
  name: 'Detail',
  props: {
    movieId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      image: '',
      title: '',
      directors: '',
      casts: '',
      intro: '',
      completed: false
    }
  },
  methods: {
    backToPrevious(){
      this.$router.back()
    },
    getData() {
      this.completed = false;
      var devUrl = '/api/movie/subject/'
      var prodUrl = 'https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/subject/'
      // https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/subject/
      Axios.get(prodUrl + this.movieId).then(res => {
        console.log(res.data)
        this.title = res.data.title
        this.directors = res.data.directors.map(e=>e.name).join("，")
        this.casts = res.data.casts.map(e=>e.name).join('，')
        this.intro = res.data.summary
        this.image = res.data.images.small
        this.completed = true;
      })
    }
  },
  activated() {
    console.log(this.movieId, "获取详情")
    this.getData()
    console.log(this)
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  }
}
</script>

<style lang="scss" scoped>
.back-button {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 1;
  color: white;
  background-color: rgba(192, 188, 188, 0.6);
  padding: .6rem .8rem;
  border-radius: .2rem;
}
.detail {
  font-family: monospace, 'Courier New', Courier;
  color: #444;
  font-size: 1.6rem;
  position: relative;
}
.detail__image-wrapper {
  width: 100%;
  margin-bottom: 3vh;
  overflow: hidden;
  position: relative;
}
.detail__image {
  width: 100%;
  height: 40vh;
}
.detail__content-wrapper {
  padding: 1vw 4vw;
  line-height: 1.5;
}
.intro-title{
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.title {
  color: black;
  font-size: 2.4rem;
  font-weight: bolder;
}
.title,
.director,
.cast {
  margin-bottom: 0.4rem;
}
.info,
.intro {
  margin-bottom: 2rem;
}
.lds-hourglass {
  margin: 2vh auto;
  display: block;
  position: relative;
  width: 8rem;
  height: 8rem;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 0px;
  box-sizing: border-box;
  border: 4rem solid transparent;
  border-color: #e3e3e3 transparent #e3e3e3 transparent;
  animation: lds-hourglass 1s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
