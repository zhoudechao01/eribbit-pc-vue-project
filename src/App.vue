<template>
  <!-- vue2.x需要根元素，vue3.x可以不用 -->
  <div>
    App
    <p>{{ $store.state.username }}</p>
    <p>{{ $store.getters['newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state)
    const mutationsFn = () => {
      store.commit('updateName')
    }
    return { mutationsFn }
  }
}
</script>
