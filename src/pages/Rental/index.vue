<template>
    <div class="wrapper">
        <AppHeader></AppHeader>
        <main class="main container">
            <AppAside></AppAside>
            <AppFilmsTable></AppFilmsTable>
        </main>
    </div>
</template>

<script setup>
import useFirebaseAuth from "@/composables/use-firebase-auth"
import { onMounted } from "vue";

const { login, register, showAuth, logout } = useFirebaseAuth()

onMounted(async () => {
    // await register({ name: "adel2", email: "adel3@yandex.ru", password: "123456" })
    // await login({ name: "adel2", email: "adel3@yandex.ru", password: "123456" })
    // showAuth()
    // await logout()
    // showAuth()
})
</script>