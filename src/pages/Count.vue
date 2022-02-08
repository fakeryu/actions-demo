<template>
  <div>
    <h1>Sun:{{sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increament"></button>
    <button @click="decreament"></button>
    <button @click="increamentOdd"></button>
    <button @click="increamentWait"></button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      sum: 0,
      n: 1
    }
  },
  methods: {
    increament () {
      this.sum += this.n;
    },
    decreament () {
      this.sum -= this.n;
    },
    increamentOdd () {
      if (this.sum % 2) this.sum += this.n;
    },
    increamentWait () {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    }
  },
  beforeRouteEnter (to, from, next) {

  },
  afterRouteEnter (to, from, next) {

  }
}
</script>

<style lang="css" scoped>
</style>