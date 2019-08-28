<template>
  <div class="main">
    <Slider :imgs="imgs" />
  </div>
</template>

<script>
import Slider from '@/components/Slider/index'
export default {
  components: {
    Slider
  },
  data() {
    return {
      imgs: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566902059702&di=f55ab467a44c939064da0c215c9084fa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F96be460a307fa106dccd66ef0abfbe03deb491cd1f6a2-5x1Fsm_fw658',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566902059833&di=308829c4762095597dc5d3a01ef7312d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4800da3a47406b3e2619cf63a0b3627bc16929ca557c6-YY9EfN_fw658',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566902059833&di=134803f17a6fa019da20d30b5ca260a0&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd5d997776893b6a5195ae6923dda0d8fb10d26b827682a-CizH0C_fw658',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566902059833&di=0c7eb9ef9fe283a1d0b9a3c8327e551b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3c17def5218983c0b8d441e82659d4c99ca5d1ade55d3-svfkyn_fw658'
      ]
    }
  },
  computed: {
    imgsOption() {
      return this.imgs.map((item, i) => {
        return { img: item, className: this.imgClass[i] }
      })
    }
  },
  methods: {

  }
}
</script>
<style>
.main {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #636f85, #6960a0);
}
</style>