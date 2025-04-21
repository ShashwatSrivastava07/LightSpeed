<template>
    <div class="about desktop-width">
        <h1>About</h1>
    </div>
</template>

<script>
    export default {
        name: 'AboutComp',
    }
</script>

<style scoped>
    .about {
        padding: 50px 0;
    }

    @media (max-width: 1440px) {
        .about {
            padding:50px 20px;
        }
    }
</style>