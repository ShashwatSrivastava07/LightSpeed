<template>
    <div class="profile desktop-width">
        <h1>My Profile</h1>
        <p>Welcome to your profile page!</p>
    </div>
</template>

<script>

export default {
    name: 'MyProfile',
    mounted() {
        // Check if the user is already logged in
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push('/signup')
        } // Redirect to home if user is already logged in
    }
}

</script>


<style scoped>
.profile {
    padding: 50px 0;
}

@media (max-width: 1440px) {
    .profile {
        padding: 50px 20px;
    }
}

@media (max-width: 768px) {
    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>