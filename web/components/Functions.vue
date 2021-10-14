<template>
  <div>
    <div>
      <input type="text" v-model="name">
      <button @click="call">send</button>
    </div>
    <div>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { callHelloWorld } from '~/service/Functions'

type Data = {
  name: string
  message: string
}
export default Vue.extend({
  name: 'Functions',
  data: (): Data => {
    return {
      name: '',
      message: ''
    }
  },
  methods: {
    call() {
      callHelloWorld(this.name).then(v => {
        this.message = v.message
      })
    }
  }
})
</script>