// 为B页面提供数据的 模块B
const moduleB = {
  namespaced: true, // 启用命名空间
  state: {
    name: '作者',
    title:'书名',
    amount:'数目',
  },
  getters: {
    BgetAmount (state) { // 这里的 `state` 对象是模块的局部状态
      return state.amount + ' 2'
    }
  },
  mutations: {
    Bincrement (state, payLoad) {
      state.amount += payLoad.amount
    }
  },
  actions: {
    Bincrement ({ commit }, payLoad) {
      commit({
        type: 'Bincrement',
        amount: payLoad.amount
      })
    }
  }
}

export default moduleB
