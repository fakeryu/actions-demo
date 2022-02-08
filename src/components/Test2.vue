<template>
  <div>
    <button>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <!-- <transition appear
                  name="hello">
        <h1 v-if="isShow">你好！</h1>
      </transition> -->
      <transition-group>
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
/* 进入起点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-active,
.hello-leave-active {
  transition: 1s linear;
}
/* 进入终点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}

/* .hello-leave{
  transform: translateX(0);
}

.hello-leave-to{
  transform: translateX(-100%);
} */
</style>