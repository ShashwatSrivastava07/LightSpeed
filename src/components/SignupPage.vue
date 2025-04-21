<template>
    <div class="login-page">
        <div class="login-wrapper desktop-width">
            <div class="logo-login">
                <svg viewBox="0 0 465 108" width="130px" style="margin: 0px auto; width: 280px;">
                    <path
                        d="M36,0l5,8.68a5.84,5.84,0,0,1,0,5.78L11.43,66l13.94,24.3a12.2,12.2,0,0,0,21.24,0L60.55,66,56.78,59.4,41,87a5.77,5.77,0,0,1-10,0L19,66,46.4,18.13l5,8.67a5.84,5.84,0,0,1,0,5.79L32.23,66,36,72.52,56.8,36.26,70.43,60a11.94,11.94,0,0,1,0,11.83L56.57,96c-2.14,3.7-8.68,12-20.6,12S17.55,99.74,15.42,96L1.57,71.88A11.94,11.94,0,0,1,1.57,60L36,0"
                        class="red svelte-1xm44i5"></path>
                    <path
                        d="M146.25,41.6c-11.1,0-20.1,7.83-20.1,20.32s7.75,20.15,20.18,20.15c4.93,0,10.1,2.53,10.1,8.05s-4.44,8.62-10.1,8.62-10.41-3.42-10.41-8.62h-9.77c0,10.8,8.64,17.88,20.18,17.88s19.95-6.83,19.95-17.88c0-5.12-1.62-9.92-8.24-13.25,6.54-3,8.4-10,8.4-15,0-12.5-9.05-20.31-20.19-20.31Zm.08,32.27c-5.73,0-10.41-5-10.41-12s4.68-12.11,10.41-12.11,10.34,5.2,10.34,12.11S152,73.86,146.33,73.86Zm239.76-7.69c1.1,4.75,5.43,8.9,12.38,8.9,3.63,0,8.4-1.78,10.66-4.13l6.3,6.22c-4.2,4.38-11.06,6.48-17.12,6.48-12.43,0-21.43-8.3-21.43-21.06a20.53,20.53,0,0,1,20.73-21c12,0,22,8.28,21,24.56H386.09Zm23.14-7.55a12,12,0,0,0-11.5-8.84,12.22,12.22,0,0,0-11.63,8.84Zm-68.55,7.55c1.1,4.75,5.43,8.9,12.38,8.9,3.63,0,8.4-1.78,10.66-4.13l6.3,6.22c-4.2,4.38-11.06,6.48-17.12,6.48-12.42,0-21.43-8.3-21.43-21.06a20.53,20.53,0,0,1,20.73-21c12,0,22,8.28,21,24.56H340.68Zm23.14-7.55a12,12,0,0,0-11.5-8.84,12.22,12.22,0,0,0-11.63,8.84ZM194.9,41.56a14.6,14.6,0,0,0-12.37,6V24.91h-9.8V82.6h9.8V62.23c0-6,4-10.92,9.8-10.92,5.22,0,9,3.07,9,10.35V82.59h9.79V61C211.12,49.24,206.14,41.56,194.9,41.56Zm112.61,0c-4.5,0-9.8,1.94-12.85,6.38l-.32-5.47h-9.47v57.73l9.8-1.06V77.9c2.8,4.36,8.9,5.74,13.08,5.74,12.7,0,20.08-9.53,20.08-21.17s-8.1-20.86-20.32-20.86Zm-.72,33.49c-6.66,0-11.24-6.18-11.24-12.39s4.17-12.92,11.24-12.92S318,56.49,318,62.71,313.46,75.1,306.79,75.1Zm135.55,8.54c4.5,0,9.8-1.93,12.85-6.38l.33,5.33H465V25h-9.8V47.35c-2.8-4.36-9-5.67-13.17-5.67-12.69,0-20,9.46-20,21.11s8.11,20.85,20.32,20.85h0Zm.72-33.49c6.67,0,11.25,6.17,11.25,12.4s-4.18,12.91-11.25,12.91-11.24-6.69-11.24-12.91S436.4,50.15,443.06,50.15ZM235,75.82a3.21,3.21,0,0,1-2.75-1.19,6.3,6.3,0,0,1-.9-3.8V51.13h7.9l.9-8.58h-8.71v-11l-9.9,1.06v9.94h-7.46v8.57h7.46l0,19.91q0,6.18,2.89,9.36T233,83.64a17.75,17.75,0,0,0,5-.73,15.41,15.41,0,0,0,4.5-2.1l-3.37-6.3a8.13,8.13,0,0,1-4.13,1.3Zm40.35-14.69c-4-2.48-8.7-2.81-13.26-3.1-2.68-.16-6.84-.8-6.84-4.3,0-2.52,2.6-4,7.3-4,3.82,0,7.07.89,9.91,3.56L278,46.84c-4.63-4-9.34-5.24-15.6-5.24-7.3,0-16.89,3.24-16.89,12.45a11.07,11.07,0,0,0,5.27,9.38c3.72,2.33,8.46,2.65,12.65,3.09,2.8.29,7.39,1,6.65,4.9-.53,2.75-3.76,3.53-6.13,3.63a25.11,25.11,0,0,1-7.48-.69,22.85,22.85,0,0,1-7-3.44l-5,6.4.6.5a27.63,27.63,0,0,0,23.4,5.2c6.06-1.37,11.31-5.83,11.31-12.48,0-3.74-1.27-7.4-4.5-9.4ZM110.75,82.6h9.8v-40h-9.8Zm-.84-52.81A5.76,5.76,0,0,1,115.65,24h0a5.78,5.78,0,0,1,0,11.56,5.66,5.66,0,0,1-4.05-1.69,5.82,5.82,0,0,1-1.69-4.1Zm-7.2,52.87V25H93v57.7h9.71Z"
                        class="css-u7eqf6-WordPath eb1r0l60"></path>
                </svg>
            </div>
            <h1>
                Sign Up to Lightspeed POS Restaurant
            </h1>
            <router-link to="/login" class="link">Login</router-link>
    
            <div class="login-form">
                <label for="user">Username *</label>
                <input type="text" placeholder="Johndoe01" id="user" class="form-control" v-model="username"
                    :class="{ error: username === '' && submitted }" />
                <label for="pass">Name *</label>
                <input type="text" placeholder="John Doe" id="text" class="form-control" v-model="name"
                    :class="{ error: name === '' && submitted }" />
                <label for="pass">Password *</label>
                <input type="password" placeholder="Password" id="pass" class="form-control" v-model="password"
                    :class="{ error: password === '' && submitted }" />
                <div class="btn-wrap">
                    <button @click="alert" class="btn btn-primary">Signup</button>
                </div>
            </div>
    
        </div>
        <div class="login-img" ></div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'SignupPage',

    data() {
        return {
            username: '',
            password: '',
            name: '',
            submitted: false, // Track if the form has been submitted
            isLoggedIn: false, // Track if the user is logged in
        }
    },

    methods: {
        async alert() {

            let request = await axios.post('http://localhost:3000/users', {
                username: this.username,
                password: this.password,
                name: this.name
            })
            console.warn(request.data)
            if (request.status === 201) {
                console.warn('User created successfully!')
                this.$router.push('/')
            } else {
                console.warn('Error creating user!')
            }
            localStorage.setItem('user', JSON.stringify(request.data))
        }
    },
    mounted() {
        // Check if the user is already logged in
        let user = localStorage.getItem('user');
        if (user) {
            this.$router.push('/')
        } // Redirect to home if user is already logged in
    }
}

</script>


<style scoped>

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
}

.login-img {
    background-image: url(https://id-cdn.lightspeed.app/images/LoginPages_2022_L-Series.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
}

.login-wrapper {
    padding: 50px;
    padding-inline: 120px;
}

.btn-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

.btn-primary {
    display: block;
    padding: 10px 12px;
    margin: 20px 0;
    width: fit-content;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 30px 0;
}

input.form-control {
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

input:focus {
    outline: none;
    border-color: #000;
}


@keyframes shake {
    0% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(-5px);
    }

    40% {
        transform: translateX(5px);
    }

    60% {
        transform: translateX(-5px);
    }

    80% {
        transform: translateX(5px);
    }

    100% {
        transform: translateX(0);
    }
}


input.error::placeholder {
    color: #e81c1c;
}

input.error {
    border: 1px solid #e81c1c;
    box-shadow: 0 4px 8px rgba(232, 28, 28, 0.3);
    animation: shake 0.3s ease;
}

.input.error:focus {
    border-color: #e81c1c;
    box-shadow: 0 4px 8px rgba(232, 28, 28, 0.3);
}

@media (max-width:1440px) {
    .login-wrapper {

        padding: 50px 20px;
    }
}

@media (max-width: 1124px) {
    .login-img {
        display: none;
    }

    .login-wrapper {
        max-width: 757px;
        border: 1px solid #000;
    }
}



@media (max-width:768px) {
    .login-form {
        width: 100%;
        max-width: 100%;
    }

    .login-wrapper {
        max-width: auto;
        border: none;
    }

    input.form-control {
        max-width: 100%;
    }

    h1 {
        font-size: 24px;
    }
}
</style>