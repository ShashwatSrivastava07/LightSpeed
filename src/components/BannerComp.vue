<template>
    <div class="banner-main">
        <div>
            <h1>Restaurant POS system</h1>
            <p class="subtitle">Serve better with one fast, flexible platform</p>
            <p class="content">
                Connect and run every location with Lightspeed's restaurant management software. Turn tables faster,
                help boost revenue and grow with powerful insights.
            </p>
            <div class="btn-wrapper">
                <button class="btn btn-primary">Get started</button>
                <button class="btn btn-secondary">Request a demo</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BannerComp',
}

</script>


<style scoped>
.banner-main {
    background: url('../assets/banner.jpg') no-repeat center center;
    background-size: cover;
    height: auto;
    width: 100%;
    font-size: 2rem;
    padding: 10% 8%;
}

.banner-main div:first-child {
    width: 41.3333%;
}

h1 {
    color: #e81c1c;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.4;
    letter-spacing: .26em;
    margin-bottom: 24px;
}

p.subtitle {
    font-size: 46px;
    font-weight: 400;
    margin-bottom: 36px;
}

p.content {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 24px;
    color: #000;
    margin-bottom: 24px;
}

.btn-wrapper {
    display: flex;
    align-items: center;
    gap: 14px;
}

button {
    padding: 14px 24px;
}


@media (max-width:900px) {
    .banner-main div:first-child {
        width: 55.3333%;
    }
}

@media (max-width:768px) {
    .banner-main {
        padding: 4% 8%;
        background: #e9e9e9;
    }

    .banner-main div:first-child {
        width: 100%;
    }

    .btn-wrapper {
        flex-direction: column;
        gap: 10px;
    }

    button {
        width: 100%;;
    }

    h1 {
        font-size: 14px;
    }
    p.subtitle {
        font-size: 36px;
    }
    p.content {
        font-size: 15px;
    }
}



</style>