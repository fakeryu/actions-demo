import vuex from "vuex";
import Vue from "vue";
Vue.use(vuex);

const actions = {
  jia(context, value) {
    console.log("actions` jia", context, value);
    context.commit("JIA", value);
    // context.dispatch("demo1".value);
  },
  demo1(context, value) {
    console.log("demo1");
    context.dispatch("demo2", value);
  },
  demo2(context, value) {
    console.log("demo2");
  },
  jian(context, value) {
    console.log("actions` jian", context, value);
    context.commit("JIAN", value);
  },
  jianOdd(context, value) {
    console.log("actions` jianOdd", context, value);
    context.commit("JIANODD", value);
  },
  jianWait(context, value) {
    console.log("actions` jianWait", context, value);
    context.commit("JIANWAIT", value);
  },
};

const mutations = {
  JIA(state, value) {
    console.log("mutations` jia", this);
    state.sum += value;
  },
  JIAN(state, value) {
    console.log("mutations` jian", state, value);
    state.sum -= value;
  },
  JIANODD(state, value) {
    console.log("mutations` jianOdd", state, value);
    if (value % 2) state.sum += value;
  },
  JIANWAIT(state, value) {
    console.log("mutations` jianWait", state, value);
    setTimeout(() => {
      state.sum += value;
    }, 300);
  },
  ADDPERSON(state, value){
    state.personList.push(value);
  }
};

const state = {
  sum: 1,
  school: "abc",
  subject: "math",
  personList: [
    {
      name: "章三",
      id: 1,
    },
  ],
};

//用于加工state数据
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

export default new vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
