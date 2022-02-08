<template>
  <div>
    <h1>人员列表</h1>
    <input type="text"
           v-model="name"
           placeholder="请输入姓名">
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in $store.state.personList"
          :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Person',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    add () {
      const personObj = { id: nanoid(), name: this.name };
			this.$store.commit('ADDPERSON',personObj)
      this.name = '';
    }
  }
}
</script>

<style>
</style>