<script setup lang="ts">
import {ref} from 'vue'
import {useRoute, useRouter} from "vue-router";
import type {Rules} from 'async-validator'
import {useAsyncValidator} from '@vueuse/integrations/useAsyncValidator'
import {useUserStore} from "../store/user.ts";
import Form from "../components/Form.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import api from "../api";

const formData = ref({
  id: "",
  name: "",
  avatar: ""
})

const rules: Rules = {
  id: {type: "email", min: 3, max: 50, required: true},
  name: {type: "string", min: 1, max: 20, required: true},
  avatar: {type: "url", required: true}
}

const {errorFields, execute} = useAsyncValidator(formData, rules, {immediate: false, manual: true}
)

const {setUser} = useUserStore()

const route = useRoute()
const router = useRouter()

function login() {
  execute().then(({pass}) => {
    if (!pass) {
      return
    }

    api.user.useAddUser(formData.value)
        .then(() => {
          setUser(formData.value)
          if (route.query.referer) {
            router.push(route.query.referer)
            return
          }
          router.push("/")
        })
  })

}
</script>
<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <Form class="bg-base-200 border-base-300 rounded-box w-xs">
      <Input v-model="formData.id"
             label="地址"
             placeholder="输入你的邮箱地址"
             :errors="errorFields.id"/>
      <Input v-model="formData.name"
             label="昵称"
             placeholder="输入你的昵称"
             :errors="errorFields.name"/>
      <Input v-model="formData.avatar"
             label="头像"
             placeholder="输入一个图片的URL作为头像"
             :errors="errorFields.avatar"/>
      <Button @click="login">登录</Button>
    </Form>
  </div>
</template>
