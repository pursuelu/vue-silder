<template>
  <div class="content-part part-tese show">
    <div class="gallery_container">
      <div class="gallery_wrap threeD_gallery_wrap">
        <div v-for="(element,i) in imgsOption"
             :key="i"
             :class="'gallery_item threeD_gallery_item '+element.className">
          <img :src="element.img"
               class="show">
          <div class="line-t" />
          <div class="line-r" />
          <div class="line-b" />
          <div class="line-l" />
        </div>
      </div>
      <a class="prev"
         @click="onPrev" />
      <a class="next"
         @click="onNext" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    imgs: Array
  },
  data() {
    const leftClass = 'gallery_left_middle'
    const frontClass = 'front_side'
    const rightClass = 'gallery_right_middle'
    const outClass = 'gallery_out'
    const Classes = [leftClass, frontClass, rightClass, outClass]
    return {
      leftClass: leftClass,
      frontClass: frontClass,
      rightClass: rightClass,
      outClass: outClass,
      Classes: Classes,
      imgClass: this.imgs.map((item, i) => {
        return i < Classes.length ? Classes[i] : Classes[Classes.length - 1]
      })
    }
  },
  computed: {
    imgsOption() {
      return this.imgs.map((item, i) => {
        return { img: item, className: this.imgClass[i] }
      })
    }
  },
  beforeMount() {

  },
  mounted() {
  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    onPrev() {
      // 第一种方案
      //TODO:以下切换图片数组没有动画效果
      const firstItem = this.imgClass[0]
      this.imgClass.shift()
      this.imgClass.push(firstItem)
    },
    onNext() {
      // TODO:以下切换图片数组没有动画效果
      const lastItem = this.imgClass[this.imgClass.length - 1]
      this.imgClass.pop()
      this.imgClass.unshift(lastItem)
    }
  }
}
</script>
<style>
.part-tese {
  height: 100%;
  width: 100%;
}
.part-tese.show .gallery_container {
  opacity: 1;
  transform: translateY(0);
  -ms-transform: translateY(0);
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -o-transform: translateY(0);
  transition: all 1s 0.1s;
  -webkit-transition: all 1s 0.1s;
  -moz-transition: all 1s 0.1s;
  -o-transition: all 1s 0.1s;
}
.part-tese .gallery_container {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.part-tese .gallery_container {
  opacity: 0;
  transform: translateY(200px);
  -ms-transform: translateY(200px);
  -webkit-transform: translateY(200px);
  -moz-transform: translateY(200px);
  -o-transform: translateY(200px);
}
.threeD_gallery_item {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.threeD_gallery_item.front_side {
  cursor: auto;
}
.part-tese .gallery_out {
  -webkit-transform: translate3d(0px, 0px, -2560px) rotateX(0deg) rotateY(0deg);
  transform: translate3d(0px, 0px, -2560px) rotateX(0deg) rotateY(0deg);
}
.part-tese .front_side {
  z-index: 5;
  -webkit-transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);
  transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);
}
.part-tese .gallery_right_middle {
  z-index: 3;
  -webkit-transform: translate3d(268px, 0px, -320px) rotateX(0deg)
    rotateY(-50deg);
  transform: translate3d(268px, 0px, -320px) rotateX(0deg) rotateY(-50deg);
}
.part-tese .gallery_left_middle {
  z-index: 3;
  -webkit-transform: translate3d(-268px, 0px, -320px) rotateX(0deg)
    rotateY(50deg);
  transform: translate3d(-268px, 0px, -320px) rotateX(0deg) rotateY(50deg);
}
.part-tese .gallery_container .gallery_wrap img {
  width: 100%;
}
.gallery_container .gallery_item .img-cover {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.44;
  position: absolute;
  left: 0;
  top: 0;
}
.gallery_container .gallery_item.front_side .img-cover {
  display: none;
}
.gallery_container .gallery_item img.show {
  visibility: visible;
}
.gallery_container .gallery_item img {
  width: 100%;
  height: 100%;
  visibility: hidden;
}
.gallery_container .prev {
  left: 0;
}
.gallery_container .next {
  right: 0;
}
@media (min-width: 1600px) {
  .part-tese .gallery_container {
    width: 1000px;
    height: 550px;
  }
  .threeD_gallery_wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    -ms-perspective: 1000px;
    perspective: 1000px;
  }

  .part-tese .gallery_container .gallery_wrap {
    width: 686px;
    height: 458px;
  }
  .gallery_container .prev,
  .gallery_container .next {
    position: absolute;
    top: 50px;
    width: 160px;
    height: 458px;
    z-index: 99;
    cursor: pointer;
  }
}

@media (min-width: 980px) and (max-width: 1600px) {
  .part-tese .gallery_container {
    width: 800px;
    height: 440px;
  }
  .threeD_gallery_wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-perspective: 800px;
    -moz-perspective: 800px;
    -ms-perspective: 800px;
    perspective: 800px;
  }

  .part-tese .gallery_container .gallery_wrap {
    width: 490px;
    height: 370px;
  }
  .gallery_container .prev,
  .gallery_container .next {
    position: absolute;
    top: 35px;
    width: 160px;
    height: 370px;
    z-index: 99;
    cursor: pointer;
  }
}

@media (min-width: 768px) and (max-width: 979px) {
  .part-tese .gallery_container {
    width: 571px;
    height: 314px;
  }
  .threeD_gallery_wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-perspective: 571px;
    -moz-perspective: 571px;
    -ms-perspective: 571px;
    perspective: 571px;
  }

  .part-tese .gallery_container .gallery_wrap {
    width: 350px;
    height: 264px;
  }
  .gallery_container .prev,
  .gallery_container .next {
    position: absolute;
    top: 25px;
    width: 130px;
    height: 264px;
    z-index: 99;
    cursor: pointer;
  }
}

@media (min-width: 480px) and (max-width: 767px) {
  .part-tese .gallery_container {
    width: 450px;
    height: 224px;
  }
  .threeD_gallery_wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-perspective: 407px;
    -moz-perspective: 407px;
    -ms-perspective: 407px;
    perspective: 407px;
  }

  .part-tese .gallery_container .gallery_wrap {
    width: 250px;
    height: 132px;
  }
  .gallery_container .prev,
  .gallery_container .next {
    position: absolute;
    top: 45px;
    width: 100px;
    height: 132px;
    z-index: 99;
    cursor: pointer;
  }
}

@media (max-width: 480px) {
}
</style>
