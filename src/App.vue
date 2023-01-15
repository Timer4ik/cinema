<template>
  <router-view />
</template>

<script setup>
// import { ref, onMounted, onUnmounted } from "vue"
// import { onAuthStateChanged } from "firebase/auth"

import { onMounted } from 'vue';
import useAuth from "@/composables/use-firebase-auth"

const {checkAuth} = useAuth()

// import useUserStore from "./composables/use-user-store"
// import { auth } from "./configs/db";

// const unsub = ref(null)

// onMounted(() => {
//   unsub.value = onAuthStateChanged(auth, (user) => {
//     const { setUser } = useUserStore()
//     setUser({ displayName:user?.displayName,email:user?.email})
//   })
// })

// onUnmounted(() => {
//   const { clearUser } = useUserStore()

//   unsub.value()

//   clearUser()
// })

onMounted(() => {
  checkAuth()
})
</script>

<style lang="scss">
@import '@/styles';
</style>