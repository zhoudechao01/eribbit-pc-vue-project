import { createStore } from 'vuex'

// vue2.x 创建仓库  new Vuex.store({})
export default createStore({
  // 存放状态
  state: {
    username: 'zs'
  },
  // 写计算属性
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  // 修改方法
  mutations: {
    updateName (state) {
      state.username = 'ls'
    }
  },
  // 拿数据
  actions: {
    updateName (context) {
      setTimeout(() => {
        context.commit('updateName')
      }, 1000)
    }
  },
  // 分模块
  modules: {
  }
})
