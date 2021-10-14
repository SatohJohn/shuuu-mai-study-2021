<template>
  <div>
    <button @click="select">
      select + upload
      <input type="file" @change="upload" style="display: none;">
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { upload } from '~/service/Storage'
interface Event<T = EventTarget> {
  target: T
}

type Data = {
}
export default Vue.extend({
  name: 'Storage',
  data: (): Data => {
    return {
    }
  },
  methods: {
    select(event: Event<HTMLInputElement>) {
      event.target.querySelector('input')?.click()
    },
    upload(event: Event<HTMLInputElement>) {
      if (event.target.files == null) {
        return 
      }
      const file = event.target.files.item(0)
      if (file == null) {
        return 
      } 
      upload(file)
    }
  }
})
</script>