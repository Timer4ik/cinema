<template>
	<div>
		<Form>
			<Field validateOnInput name="password" rules="required" v-slot="{ field, meta }">
				<input v-bind="field" :class="{ red: !meta.valid }" />
			</Field>
		</Form>
	</div>
</template>

<script setup>
import { Form, Field } from "vee-validate"

import useFirebaseAuth from "@/composables/use-firebase-auth"
import { onMounted } from "vue";
const { login, register, showAuth, logout } = useFirebaseAuth()

onMounted(async () => {
	await register({ name: "adel2", email: "adel3@yandex.ru", password: "123456" })
	await login({ name: "adel2", email: "adel3@yandex.ru", password: "123456" })
	showAuth()
	await logout()
	showAuth()
})
</script>