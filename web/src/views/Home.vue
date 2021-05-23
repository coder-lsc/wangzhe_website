<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" 
      slot="pagination"></div>
    </swiper>
    <!-- end of swiper  -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3"
          v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav-icons  -->

  

    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2 fs-lg d-flex" v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </div>
      </template>
    </m-list-card>
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>

  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.pagination-home'
          },
          // Some Swiper option/callback...
        },
        newsCats: [
          {
            name: '热门',
            newsList: new Array(5).fill({}).map(item => (
              {
                categoryName: '公告',
                title: '峡谷甜蜜520，周瑜小乔最新情侣皮肤送不停',
                date: '05/21'
              }
            ))
          },
          {
            name: '公告',
            newsList: new Array(5).fill({}).map(item => (
              {
                categoryName: '公告',
                title: '峡谷甜蜜521，周瑜小乔最新情侣皮肤送不停',
                date: '05/21'
              }
            ))
          },
          {
            name: '热门',
            newsList: new Array(5).fill({}).map(item => (
              {
                categoryName: '公告',
                title: '峡谷甜蜜520，周瑜小乔最新情侣皮肤送不停',
                date: '05/21'
              }
            ))
          },
          {
            name: '热门',
            newsList: new Array(5).fill({}).map(item => (
              {
                categoryName: '公告',
                title: '峡谷甜蜜520，周瑜小乔最新情侣皮肤送不停',
                date: '05/21'
              }
            ))
          },
          {
            name: '热门',
            newsList: new Array(5).fill({}).map(item => (
              {
                categoryName: '公告',
                title: '峡谷甜蜜520，周瑜小乔最新情侣皮肤送不停',
                date: '05/21'
              }
            ))
          },
        ]
      }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    }
  },
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  created() {
    this.fetchNewsCats()
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

  .pagination-home {
    .swiper-pagination-bullet {
      opacity: 1;
      border-radius: 0.1538rem;
      background: #fff;
      &.swiper-pagination-bullet-active {
        background: map-get($colors, 'info');
      }
    }
  }
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none
    }
  }
}
</style>