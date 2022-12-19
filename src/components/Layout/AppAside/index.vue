<template>
    <aside class="aside">
        <AppAsideNavigation></AppAsideNavigation>
        <AppAsideProfile></AppAsideProfile>
    </aside>
</template>

<script>
export default {
    name: 'AppAside'
}
</script>

<style lang="scss" scoped>
.aside {
    background-color: #2C7079;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 100%;

    padding: 60px 28px;

    height: 100%;

    max-width: 350px;
}
</style>