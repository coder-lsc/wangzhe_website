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

    <m-card icon="menu1" title="新闻资讯">
      <div class="card-body pt-2">
          <div class="nav jc-between">
            <div class="nav-item active">
              <div class="nav-link">热门</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">新闻</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">新闻</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">新闻</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">新闻</div>
            </div>
          </div>
          <div class="pt-3">
            <swiper >
              <swiper-slide v-for="n in 5" :key="n">
                <div class="py-2" v-for="n in 5" :key="n">
                  <span>[新闻]</span>
                  <span>|</span>
                  <span>峡谷甜蜜520，周瑜小乔最新情侣皮肤送不停</span>
                  <span>05/21</span>
                </div>
              </swiper-slide>
            </swiper>
          </div>
      </div>
    </m-card>

    
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <i class="iconfont icon-menu1"></i>
  </div>
</template>

<script>
export default {
  data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.pagination-home'
          },
          // Some Swiper option/callback...
        }
      }
    },
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