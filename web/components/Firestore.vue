<template>
  <ul>
    <li v-for="(t, index) in list" :key="index">{{t.user}}</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { watchData } from '~/service/Firestore'

type Data = {
  list: Text[]
  unsubscriber: () => void
}
type Text = {
  user: string
}
export default Vue.extend({
  name: 'Firestore',
  data: (): Data => {
    return {
      list: [],
      unsubscriber: () => {}
    }
  },
  beforeMount() {
    this.unsubscriber = watchData<Text>((data, index) => {
      if (this.list[index] == null) {
        this.list.push(data)
      } else {
        console.log(data)
        this.$set(this.list, index, data)
      }
    })
  },
  beforeDestroy() {
    this.unsubscriber()
  }
})
</script>