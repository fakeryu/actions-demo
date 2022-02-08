<template>
  <div>
    <button>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition appear>
        <h1 v-if="isShow">你好！</h1>
      </transition>
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

.v-enter-active {
  animation: atgo 1s;
}
.v-leave-active {
  animation: atgo 1s reverse;
}

@keyframes atgo {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>