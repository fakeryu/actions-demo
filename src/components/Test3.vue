<template>
  <div>
    <button>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <!-- <transition appear
                  name="hello">
        <h1 v-if="isShow">你好！</h1>
      </transition> -->
      <transition-group appear name="animate__animated animate__bounce"
                        enter-active-class="animate__swing"
                        leave-active-class="animate__backOutUp">
        <h1 v-if="isShow"
            key="1">你好！</h1>
        <h1 v-if="isShow"
            key="2">你好2！</h1>
      </transition-group>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="css" scoped>
* {
  width: 100%;
}

h1 {
  /* transition: 1s linear; */
}
/* .hello-leave{
  transform: translateX(0);
}

.hello-leave-to{
  transform: translateX(-100%);
} */
</style>