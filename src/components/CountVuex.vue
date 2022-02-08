<template>
  <div>
    <h1>Sum:{{sum}}</h1>
    <h1>Sum放大10倍:{{bigSum}}</h1>
    <h1>i`m in:{{school}},study:{{subject}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 使用mapmutations需要在模板传参 -->
    <button @click="increament(n)">+</button>
    <button @click="decreament(n)">-</button>
    <button @click="increamentOdd(n)">
      +奇数
    </button>
    <button @click="increamentWait(n)">+等待</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Test',
  data () {
    return {
      n: 1
    }
  },
  computed: {
    //从state中读取（对象写法）
    // ...mapState({ sum: 'sum' , school: 'school' ,subject: 'subject' }),
    // （对象写法）
    ...mapState(['sum', 'school', 'subject']),

    ...mapGetters(['bigSum']) // 同computed
    // bigSum () {
    //   return this.$store.getters.bigSum
    // }
  },
  methods: {
    // increament () {
    //   // this.$store.dispatch('jia',this.n)
    //   this.$store.commit('JIA', this.n)
    // },
    // decreament () {
    //   // this.$store.dispatch('jian', this.n)
    //   this.$store.commit('JIAN', this.n)
    // },

    ...mapMutations({ increament: 'JIA', decreament: 'JIAN' }), //直接commit
    // ...mapMutations(['JIA','JIAN']),


    // increamentOdd () {
    //   this.$store.dispatch('jianOdd', this.n)
    // },
    // increamentWait () {
    //   this.$store.dispatch('jianWait', this.n)
    // }

    ...mapActions({ increamentOdd: 'jianOdd', increamentWait: 'jianWait' }) // 走action处理
  },
  mounted () {

  }
}
</script>

<style lang="css" scoped>
</style>