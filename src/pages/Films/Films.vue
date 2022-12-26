<template>
    <MainLayout>
        <FilmList :films="films"></FilmList>
    </MainLayout>
</template>

<script setup>
import FilmList from '@/components/Films/FilmList.vue';
import { useFilms } from "@/composables/use-films"
import { onMounted, ref } from 'vue';

const { films, fetchFilms } = useFilms()

const searchText = ref("")

const handleSubmit = async () => {
    await fetchFilms(["title", "==", searchText.value])
}

onMounted(async () => {
    await fetchFilms()
})

</script>