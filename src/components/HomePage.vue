<template>
    <div>
        <BannerComp />
    </div>
</template>

<script>
import BannerComp from './BannerComp.vue';
export default {
    name: 'HomePage',
    components: {
        BannerComp,
    },
    mounted() {
        // Check if the user is already logged in
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push('/signup')
        } // Redirect to home if user is already logged in
    }
}
</script>