// 为A页面提供数据的 模块A
const moduleA = {
  namespaced: true, // 启用命名空间
  state: {
    name: '作者',
    title: '书名',
    amount:'数目',
  },
  getters: {
    AgetAmount (state) { // 这里的 `state` 对象是模块的局部状态
      return state.amount + ' 4'
    }
  },
  mutations: {
    Aincrement (state, payLoad) {
      state.age += payLoad.amount
    }
  },
  actions: {
    Aincrement ({ commit }, payLoad) {
      commit({
        type: 'Aincrement',
        amount: payLoad.amount
      })
    }
  }
}

export default moduleA
