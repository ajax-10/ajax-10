// 将 vuex 单独封装为一个文件
// 1.0 导入
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './moduleA.js'
import moduleB from './moduleB.js'

// 2.0 注册
Vue.use(Vuex)

// 3.0 创建 vuex 仓库
var store = new Vuex.Store({
  // 导入模块
  modules: {
    a: moduleA, // 这里，a 和 b 才是命名空间 (如果 moduleA 和 moduleB 中启用了命名空间的话)
    b: moduleB
  },
  state: { // state 用于存储数据
    msg: 'storeMsg',
    count: 1
  },
  getters: { // getters 相对于 vue 中的计算属性
    reverseMsg (state) {
      return state.msg.split('').reverse().join('')
    }
  },
  mutations: { // 所有对状态或数据(state)的改变，都应该统一放在 mutations 中定义。Mutation 中无法完成异步操作，只能进行【同步操作】。
    increment (state, payLoad) {
      state.count += payLoad.amount
    }
  },
  actions: { // Action 用来提交 mutation，而不是直接变更状态。Action 可以包含任意【异步操作】。
    // increment (context) { // context 对象 与 store 实例具有相同方法和属性 ，但不是 store 实例本身
    //   context.commit('increment')
    // }
    // increment ({ commit }) { // 从 context 对象中解构出 commit
    //   commit('increment')
    // }
    incrementAsync ({ commit }, payLoad) {
      setTimeout(() => {
        // commit('increment',payLoad)
        commit({
          type: 'increment',
          amount: payLoad.amount
        })
      }, 1000)
    }
  }
})

// 4.0 暴露仓库
export default store
