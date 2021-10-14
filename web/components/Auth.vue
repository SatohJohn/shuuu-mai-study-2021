<template>
  <div>
    <p>id: <input v-model="id" type="text" /></p>
    <p>pass: <input v-model="password" type="password" /></p>
    <div>
      <button @click="login">ログイン</button>
    </div>

    <div v-if="nowLogin">
      <img :src="profileImage" class="profile">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { login } from '~/service/Auth'

type Data = {
  id: string
  password: string
  profileImage: string | null
}
export default Vue.extend({
  name: 'Auth',
  data: (): Data => {
    return {
      id: '',
      password: '',
      profileImage: null,
    }
  },
  computed: {
    nowLogin(): boolean {
      return this.profileImage != null;
    }
  },
  methods: {
    login() {
      login(this.id, this.password)
        .then(v => {
          this.profileImage = v.profileUrl
        })
        .catch(() => {
          alert('ログインに失敗しました')
        })
    },

  }
})
</script>

<style>
.profile {
  width: 300px;
}
</style>